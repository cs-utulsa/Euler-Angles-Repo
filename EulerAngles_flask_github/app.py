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
    ##default page state vals
    result = [0.0, 0.0, 0.0, 0.0]
    display = ep.initialImage()
    matrix = [[0.0,0.0,0.0], [0.0,0.0,0.0], [0.0,0.0,0.0]]

    #####python program to convert to quaternion angles#####
    if request.method == 'POST':
        x = float(request.values.get("x"))
        y = float(request.values.get("y"))
        z = float(request.values.get("z"))
        rot = str(request.form.get("rotation"))
        result = h.eulerToQuat(x, y, z, rot)
        resultList = np.ndarray.tolist(result)
        resultFormattedList = [ '%.4f' % elem for elem in resultList ]
        display = ep.eulerToQuat(x, y, z, rot)
        matrix = ep.rotArray(x, y, z, rot)
        matrixList = np.ndarray.tolist(matrix)
        list1 = matrixList[0]
        list2 = matrixList[1]
        list3 = matrixList[2]
        FormattedList1 = [ '%.2f' % elem for elem in list1  ]
        FormattedList2 = [ '%.2f' % elem2 for elem2 in list2  ]
        FormattedList3 = [ '%.2f' % elem3 for elem3 in list3  ]
        finalList = [FormattedList1,FormattedList2, FormattedList3]
        return render_template('EulerToQuaternion.html', mat = finalList ,
        calculation = resultFormattedList, pict = "data:image/png;base64," + display)

    return render_template('EulerToQuaternion.html', mat = matrix, calculation = result, pict = "data:image/png;base64," + display)


if __name__ == '__main__':
    app.run(debug=True)