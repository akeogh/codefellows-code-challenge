var Shelf = require(shelf);

var Library = function(name) {
  this.name = name
  this.shelves = [];

  this.addShelf = function(shelf) {
    this.shelves.push(shelf);
  };

  this.removeShelf = function(shelfNumber) {
    this.shelves.splice(shelfNumber - 1, 1);
  }

  this.newBook = function(first, last, title, shelfNumber) {
    var book = new Book(first, last, title);
    this.shelves[shelfNumber - 1].addBook(book);
  }

  this.checkIn = function(book, shelfNumber) {
    this.shelves[shelfNumber - 1].push(book);
  }

  this.checkOut = function(title, shelfNumber) {
    return this.shelves[(shelfNumber - 1)].removeBook(title);
  }

  this.toString = function() {
    var text = "The " + this.name + " Library has " + this.shelves.length + " shelves.";
    for (var i = 0; i < this.shelves.length; i++) {
      text += "<br/><strong>Shelf " + (i + 1) + "</strong> - ";
      text += this.shelves[i].toString() + "\n";
    }
    return text;
  };
}

module.export Library;
