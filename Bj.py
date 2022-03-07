import sys
input = sys.stdin.readline
timeList = input().split()
timeForCook = int(input())
M = timeForCook + int(timeList[1])
timeList[1] = str(M)
if M >= 60:
  timeList[1] = str(M%60)
  timeList[0] = str(M//60 + int(timeList[0]))
if int(timeList[0]) >= 24:
  timeList[0] = str(int(timeList[0])%24)
print((' ').join(timeList))