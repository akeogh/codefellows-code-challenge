var Book = function(firstName, lastName, title) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;

  this.toString = function() {
    return '"' + this.title + '", ' + this.firstName + ' ' + this.lastName + '.';
  };

  return
};

module.export Book;
