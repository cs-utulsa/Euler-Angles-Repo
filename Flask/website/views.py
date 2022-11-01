from flask import Blueprint, render_template

views  = Blueprint('views',__name__)

@views.route('/')
def home():
    return render_template("home.html")
@views.route('/Euler')
def Euler():
    return render_template("Euler.html", text="Testing") #passing py ver)

    