"use strict";
function getLastDayOfMonth(year, month){
  let lastDay = new Date(year,month+1,0);
  console.log(lastDay)
  return lastDay.getDate();
}
console.log(getLastDayOfMonth(2012, 1));