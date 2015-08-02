function Shelf() {
  this.shelf = [];

  this.addBook = function(newBook) {
    this.shelf.push(newBook);
  };

  this.removeBook = function(title) {
    var count = 0;

    while (count < this.shelf.length) {
      if (title == this.shelf[count].title) {
        return this.shelf.splice(count,1);
      }
      count++;
    }
    return undefined;
  };

  this.toString = function() {
    var text = "";
    if (this.shelf.length === 0) {
      text += "No books on this shelf!";
    }
    if (this.shelf.length >= 1) {
      text += "There are " + this.shelf.length + " books on this shelf:";
      for (var i = 0; i < this.shelf.length; i++) {
        text += "<br/>" + this.shelf[i].toString();
      }
    }
    return text;
  };
}

