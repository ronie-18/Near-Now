from flask import Flask, render_template, request, redirect, session
import random
import smtplib
from email.message import EmailMessage

app = Flask(__name__)
app.secret_key = "super-secret-key"  # Needed for sessions

# Replace with your credentials
EMAIL_ADDRESS = "your-email@gmail.com"
EMAIL_PASSWORD = "your-app-password"


def send_otp(to_email, otp):
    msg = EmailMessage()
    msg["Subject"] = "Your OTP Code"
    msg["From"] = EMAIL_ADDRESS
    msg["To"] = to_email
    msg.set_content(f"Your OTP code is: {otp}")

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        smtp.send_message(msg)


@app.route("/")
def login():
    return render_template("login.html")


@app.route("/send-otp", methods=["POST"])
def send_otp_route():
    email = request.form["email"]
    session["email"] = email
    otp = str(random.randint(100000, 999999))
    session["otp"] = otp
    send_otp(email, otp)
    return redirect("/verify")


@app.route("/verify")
def verify():
    return render_template("verify.html")


@app.route("/verify-otp", methods=["POST"])
def verify_otp():
    user_otp = request.form["otp"]
    if user_otp == session.get("otp"):
        return render_template("success.html", email=session.get("email"))
    return "Invalid OTP. Please try again."


if __name__ == "__main__":
    app.run(debug=True)
