import numpy as np

def add(a ,b, c):
    return float(a) + float(b) + float(c) ##testing 




from scipy.spatial.transform import Rotation as R ##eulerToQuat
import numpy as np
def eulerToQuat(x, y, z, rotationSel):
    Rot = R.from_euler(rotationSel, [x, y, z], degrees=True)
    Rot_quat = Rot.as_quat()
    RotArray = Rot_quat.as_matrix()
    matrix = np.asmatrix(RotArray)
    return matrix