"use strict";
for (let key in user) {
    if (typeof user[key] == 'function') {
      user[key] = user[key].bind(user);
    }
  }