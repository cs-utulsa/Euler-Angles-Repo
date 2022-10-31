from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/help')
def help():
    return render_template('help.html')

@app.route('/converter')
def euler():
    return render_template('EulerToQuaternion.html')


if __name__ == '__main__':
    app.run(debug=True)