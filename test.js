"use strict";
class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // true
