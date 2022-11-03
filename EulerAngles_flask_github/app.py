from flask import Flask, render_template, request
app = Flask(__name__)

import help as h

app.config['TESTING'] = True

app.config['TEMPLATES_AUTO_RELOAD'] = 1


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/help')
def help():
    return render_template('help.html')

@app.route('/converter', methods = ['POST', 'GET'])
def euler(): 
    result = 0
    #####python program to convert to quaternion angles#####
    if request.method == 'POST':
        x = float(request.values.get("x"))
        y = float(request.values.get("y"))
        z = float(request.values.get("z"))
        rot = str(request.form.get("rotation"))
        result = h.eulerToQuat(x, y, z, rot)
    return render_template('EulerToQuaternion.html', calculation = str(result))


if __name__ == '__main__':
    app.run(debug=True)