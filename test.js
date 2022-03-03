"use strict";
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    // this는 Article입니다.
    return new this("Today's digest", new Date());
  }
}

let article = Article.createTodays();

alert( article.title ); // Today's digest