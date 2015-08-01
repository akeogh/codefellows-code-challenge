var Library = require(library);

var books = [new Book("JRR", "Tolkien", "The Hobbit"),
    new Book("Leo", "Tolstoy", "War and Peace"),
    new Book("Phillip", "Pullman", "The Golden Compass"),
    new Book("Alexandre", "Dumas", "The Count of Monte Cristo"),
    new Book("Fyodor", "Dostoyevsky", "Crime and Punishment"),
    new Book("JK", "Rowling", "Harry Potter"),
    new Book("Lewis", "Carroll", "Alice in Wonderland"),
    new Book("Hunter S.", "Thompson", "Fear and Loathing in Las Vegas"),
    new Book("Gary", "Gygax", "Dungeons and Dragons: 5th Edition"),
    new Book("Roald", "Dahl", "Matilda"),
    new Book("John", "Milton", "Paradise Lost"),
    new Book("Ernest", "Hemingway", "The Old Man and the Sea"),
    new Book("William", "Shakespeare", "Hamlet"),
    new Book("P.G.", "Wodehouse", "My Man Jeeves"),
    new Book("Anton", "Chekhov", "The Cherry Orchard"),
    new Book("Rafael", "Sabatini", "Scaramouche")];

var shelf1 = new Shelf();
var shelf2 = new Shelf();
var shelf3 = new Shelf();
var shelf4 = new Shelf();

// BOOK DEMO - using Book's toString() function.
for (var i = 0; i < 15; i += 3) {
  shelf1.addBook(books[i]);
  shelf2.addBook(books[i+1]);
  shelf3.addBook(books[i+2]);
  shelf4.addBook(books[i+3]);
  $("#bookSection").append(books[i].toString() + '<br>');
}

// SHELF DEMO - Adding books, removing books
$("#addToShelf").append(shelf1.toString());

shelf1.removeBook("The Hobbit");
shelf1.removeBook("Matilda");
$("#removeFromShelf").append(shelf1.toString());

// LIBRARY DEMO - Creating a library, adding shelves, adding books by detail
// AND by Book object, removing a shelf, checking out a book.
var greenlake = new Library("Greenlake");
greenlake.addShelf(shelf1);
greenlake.addShelf(shelf2);
greenlake.addShelf(shelf3);
greenlake.addShelf(shelf4);
$('#library').append(greenlake.toString());

greenlake.newBook("Dashiell", "Hammett", "The Maltese Falcon", 1);
$('#newBooks').append(greenlake.toString());

greenlake.removeShelf(3);
$('#removeShelf').append(greenlake.toString());

var alice = greenlake.checkOut("Alice in Wonderland", 1);
var hamlet = greenlake.checkOut("Hamlet", 1);
$('#checkIn').append(greenlake.toString() + "<br/> <br/> Checked out Books: <br/>" + alice.toString() + "<br/>" + hamlet.toString() + "<br/>");

greenlake.checkIn(alice, 1);
greenlake.checkIn(hamlet, 2);
$('#checkOut').append(greenlake.toString());

