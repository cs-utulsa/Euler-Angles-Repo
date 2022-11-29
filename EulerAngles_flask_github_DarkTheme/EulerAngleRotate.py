from scipy.spatial.transform import Rotation as R
import numpy as np
from matplotlib.figure import Figure
import base64
from io import BytesIO


def rotArray(x, y, z, rotationSel):
    Rot = R.from_euler(rotationSel, [x, y, z], degrees=True)
    RotArray = Rot.as_matrix()
    return RotArray


def eulerToQuat(x, y, z, rotationSel):
    Rot = R.from_euler(rotationSel, [x, y, z], degrees=True)
    RotArray = Rot.as_matrix()
    matrix = np.asmatrix(RotArray)
    row = [0,0,0]
    result = np.r_[matrix,[row]]
    column = np.array([[0], [0], [0], [1]])
    rotationMatrix = np.append(result, column, axis=1)

    startPoint1 = np.array([[0], [0], [0], [0]])
    startPoint2 = np.array([[1], [0], [0], [0]])
    startPoint3 = np.array([[1], [0], [1], [0]])
    startPoint4 = np.array([[0], [0], [1], [0]])
    startPoint5 = np.array([[0], [0], [0], [0]])

    negTrans1 = np.array([[1,0,0,-startPoint1[0,0]],
                     [0,1,0,-startPoint1[1,0]],
                     [0,0,1,-startPoint1[2,0]],
                     [0,0,0,1]])

    posTrans1 = np.array([[1,0,0,startPoint1[0,0]],
                        [0,1,0,startPoint1[1,0]],
                        [0,0,1,startPoint1[2,0]],
                        [0,0,0,1]])

    negTrans2 = np.array([[1,0,0,-startPoint2[0,0]],
                        [0,1,0,-startPoint2[1,0]],
                        [0,0,1,-startPoint2[2,0]],
                        [0,0,0,1]])

    posTrans2 = np.array([[1,0,0,startPoint2[0,0]],
                        [0,1,0,startPoint2[1,0]],
                        [0,0,1,startPoint2[2,0]],
                        [0,0,0,1]])

    negTrans3 = np.array([[1,0,0,-startPoint3[0,0]],
                        [0,1,0,-startPoint3[1,0]],
                        [0,0,1,-startPoint3[2,0]],
                        [0,0,0,1]])

    posTrans3 = np.array([[1,0,0,startPoint3[0,0]],
                        [0,1,0,startPoint3[1,0]],
                        [0,0,1,startPoint3[2,0]],
                        [0,0,0,1]])

    negTrans4 = np.array([[1,0,0,-startPoint4[0,0]],
                        [0,1,0,-startPoint4[1,0]],
                        [0,0,1,-startPoint4[2,0]],
                        [0,0,0,1]])

    posTrans4 = np.array([[1,0,0,startPoint4[0,0]],
                        [0,1,0,startPoint4[1,0]],
                        [0,0,1,startPoint4[2,0]],
                        [0,0,0,1]])

    negTrans5 = np.array([[1,0,0,-startPoint5[0,0]],
                        [0,1,0,-startPoint5[1,0]],
                        [0,0,1,-startPoint5[2,0]],
                        [0,0,0,1]])

    posTrans5 = np.array([[1,0,0,startPoint5[0,0]],
                        [0,1,0,startPoint5[1,0]],
                        [0,0,1,startPoint5[2,0]],
                        [0,0,0,1]])


    moveToOrigin = np.matmul(negTrans1, startPoint1)
    rotate = np.matmul(rotationMatrix,moveToOrigin)
    finalPos1 = np.matmul(posTrans1, rotate)

    moveToOrigin = np.matmul(negTrans2, startPoint2)
    rotate = np.matmul(rotationMatrix,moveToOrigin)
    finalPos2 = np.matmul(posTrans2, rotate)

    moveToOrigin = np.matmul(negTrans3, startPoint3)
    rotate = np.matmul(rotationMatrix,moveToOrigin)
    finalPos3 = np.matmul(posTrans3, rotate)

    moveToOrigin = np.matmul(negTrans4, startPoint4)
    rotate = np.matmul(rotationMatrix,moveToOrigin)
    finalPos4 = np.matmul(posTrans4, rotate)

    moveToOrigin = np.matmul(negTrans5, startPoint5)
    rotate = np.matmul(rotationMatrix,moveToOrigin)
    finalPos5 = np.matmul(posTrans5, rotate)
   

    fig = Figure()
    ax = fig.add_subplot(111, projection='3d')
    xData = [startPoint1[0,0], startPoint2[0,0], startPoint3[0,0], startPoint4[0,0], startPoint5[0,0]]
    yData =[startPoint1[1,0], startPoint2[1,0], startPoint3[1,0], startPoint4[1,0], startPoint5[1,0]]
    zData =[startPoint1[2,0], startPoint2[2,0], startPoint3[2,0], startPoint4[2,0], startPoint5[2,0]]
    xFinalData = [finalPos1[0,0], finalPos2[0,0], finalPos3[0,0], finalPos4[0,0], finalPos5[0,0]]
    yFinalData =[finalPos1[1,0], finalPos2[1,0], finalPos3[1,0], finalPos4[1,0], finalPos5[1,0]]
    zFinalData =[finalPos1[2,0], finalPos2[2,0], finalPos3[2,0], finalPos4[2,0], finalPos5[2,0]]
    ax.scatter(xData, yData, zData, c='red', s=10)
    ax.plot(xData, yData, zData, color='black')
    ax.scatter(xFinalData, yFinalData, zFinalData, c='blue', s=10)
    ax.plot(xFinalData, yFinalData, zFinalData, color='black')
    ax.set_xticks([-1,0.5,0,0.5,1])
    ax.set_yticks([-1,0.5,0,0.5,1])
    ax.set_zticks([-1,0.5,0,0.5,1])
    buf = BytesIO()
    fig.savefig(buf, format="png")
    data = base64.b64encode(buf.getbuffer()).decode("ascii")
    return data

def initialImage():
    fig = Figure()
    ax = fig.add_subplot(111, projection='3d')
    startPoint1 = np.array([[0], [0], [0], [0]])
    startPoint2 = np.array([[1], [0], [0], [0]])
    startPoint3 = np.array([[1], [0], [1], [0]])
    startPoint4 = np.array([[0], [0], [1], [0]])
    startPoint5 = np.array([[0], [0], [0], [0]])
    xData = [startPoint1[0,0], startPoint2[0,0], startPoint3[0,0], startPoint4[0,0], startPoint5[0,0]]
    yData =[startPoint1[1,0], startPoint2[1,0], startPoint3[1,0], startPoint4[1,0], startPoint5[1,0]]
    zData =[startPoint1[2,0], startPoint2[2,0], startPoint3[2,0], startPoint4[2,0], startPoint5[2,0]]
    ax.scatter(xData, yData, zData, c='red', s=10)
    ax.plot(xData, yData, zData, color='black')
    ax.set_xticks([-1,0.5,0,0.5,1])
    ax.set_yticks([-1,0.5,0,0.5,1])
    ax.set_zticks([-1,0.5,0,0.5,1])
    buf = BytesIO()
    fig.savefig(buf, format="png")
    data = base64.b64encode(buf.getbuffer()).decode("ascii")
    return data