import numpy as np

def add(a ,b, c):
    return float(a) + float(b) + float(c) ##testing 

def truncate(ls):
    for i in ls:
        i = [round(elt, 2) for elt in i]
    return ls


from scipy.spatial.transform import Rotation as R ##eulerToQuat
import numpy as np
def eulerToQuat(x, y, z, rotationSel):
    Rot = R.from_euler(rotationSel, [x, y, z], degrees=True)
    Rot_quat = Rot.as_quat()
    return Rot_quat