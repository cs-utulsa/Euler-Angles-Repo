


##Code to be used during animation##




from scipy.spatial.transform import Rotation as R
import numpy as np
from matplotlib import pyplot as plt
xinput = input("Enter your X value: ")
yinput = input("Enter your Y value: ")
zinput = input("Enter your Z value: ")
passed = True
while (passed):
    rotationSel = input("Enter your wanted rotation: ")
    if (rotationSel == 'zxz' or rotationSel == 'xyx' or rotationSel == 'yzy' or rotationSel == 'zyz'
    or rotationSel == 'xzx' or rotationSel == 'yxy' or rotationSel == 'xyz' or rotationSel == 'yzx'
    or rotationSel == 'zxy' or rotationSel == 'xzy' or rotationSel == 'zyx' or rotationSel == 'yxz'):
        passed=False
else:
    print("Try Again! Wrong Input")

Rot = R.from_euler(rotationSel, [xinput, yinput, zinput], degrees=True)

print("Euler Rotation Matrix:")
print(Rot.as_matrix())
RotArray = Rot.as_matrix()
matrix = np.asmatrix(RotArray)
row = [0,0,0]
result = np.r_[matrix,[row]]
column = np.array([[0], [0], [0], [1]])
rotationMatrix = np.append(result, column, axis=1) 


print(rotationMatrix) #formatted rotation matrix

startPoint1 = np.array([[0], [0], [0], [0]])
startPoint2 = np.array([[1], [0], [0], [0]])
startPoint3 = np.array([[1], [0], [1], [0]])
startPoint4 = np.array([[0], [0], [1], [0]])
startPoint5 = np.array([[0], [0], [0], [0]])


print("Position1:")
print(startPoint1)
print()
print("Position2:")
print(startPoint2)
print()
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


print("Position1 Rotated:")
print(finalPos1)
print()
print("Position2 Rotated:")
print(finalPos2)
print()
print("Position3 Rotated:")
print(finalPos3)
print()
print("Position4 Rotated:")
print(finalPos4)
print("Position5 Rotated:")
print(finalPos5)
print()

# Rot_quat = Rot.as_quat()

# print("Quaternion Matrix:")
# print(Rot_quat)

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
# ax.scatter(startPoint1[0,0], startPoint1[1,0], startPoint1[2,0], c='red', s=10)
# ax.scatter(finalPos1[0,0], finalPos1[1,0], finalPos1[2,0], c='blue', s=10)
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
ax.set_xticks([-4,-2,0,2,4])
ax.set_yticks([-4,-2,0,2,4])
ax.set_zticks([-4,-2,0,2,4])
# for angle in range(0, 360):
#     ax.view_init(30, angle)
#     plt.draw()
#     plt.pause(.001)
plt.show()