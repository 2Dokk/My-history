def makeArmy():
  shooters = []
  i = 0
  while i<10:
    def shooter():
      print(i)
    shooters.append(shooter)
    i += 1

myArmy = makeArmy()
myArmy[0]()
myArmy[5]()