from flask import Flask, render_template, request
app = Flask(__name__)

import help as h
import EulerAngleRotate as ep
import numpy as np

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
    result = [0, 0, 0, 0]
    display = ep.initialImage()
    matrix = [[0,0,0], [0,0,0], [0,0,0]]



    #####python program to convert to quaternion angles#####
    if request.method == 'POST':
        x = float(request.values.get("x"))
        y = float(request.values.get("y"))
        z = float(request.values.get("z"))
        rot = str(request.form.get("rotation"))
        result = h.eulerToQuat(x, y, z, rot)
        display = ep.eulerToQuat(x, y, z, rot)
        matrix = np.ndarray.tolist(ep.rotArray(x, y, z, rot))
        matrix = h.truncate(matrix)
        return render_template('EulerToQuaternion.html', mat = matrix ,
        calculation = np.ndarray.tolist(result), pict = "data:image/png;base64," + display)
    return render_template('EulerToQuaternion.html', mat = matrix, calculation = result, pict = "data:image/png;base64," + display)


if __name__ == '__main__':
    app.run(debug=True)