import numpy as np

def add(a ,b, c):
    return float(a) + float(b) + float(c) ##testing 




from scipy.spatial.transform import Rotation as R ##eulerToQuat
import numpy as np
def eulerToQuat(x, y, z, rotationSel):
    Rot = R.from_euler(rotationSel, [x, y, z], degrees=True)
    Rot_quat = Rot.as_quat()
    return Rot_quat

def truncate(ls):
    for i in ls:
        i =  [round(elem, 2) for elem in i]
    return ls