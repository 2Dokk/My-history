"use strict";
let group = {
    title: "1모둠",
    students: ["보라", "호진", "지민"],
  
    showList() {
      this.students.forEach(
        student => alert(this.title + ': ' + student)
      );
    }
  };
  
  group.showList();