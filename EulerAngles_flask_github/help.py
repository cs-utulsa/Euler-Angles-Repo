def add(a ,b, c):
    return float(a) + float(b) + float(c)

from scipy.spatial.transform import Rotation as R
import numpy as np
def eulerToQuat(x, y, z, rotationSel):
    Rot = R.from_euler(rotationSel, [x, y, z], degrees=True)
    RotArray = Rot.as_matrix() 
    Rot_quat = Rot.as_quat()
    return str(Rot_quat)