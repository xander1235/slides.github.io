import cv2 as cv
import sys
import os
#sys('chmod 777 blackandwhite.jpg')
imageAddress = str(sys.argv[1])
img = cv.imread(imageAddress,0)
cv.imwrite('blackandwhite'+str(imageAddress[0])+'.jpg',img)
print("blackandwhite"+str(imageAddress[0])+".jpg")
