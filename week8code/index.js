//REQUIREMENTS
   //menu app that uses at least one array, two classes, and 
   // has options to create, view, and delete elements

/**
 * we need the class to create the object "book" so that we can add the book to the "cart" field later
 */
class Book { 
   constructor (title, author) { 
      this.title = title;
      this.author = author; 
   } 

   /**
    * describe method returns a string of the title and author of this "book", added to cart later
    * @returns string description of book
    */
   describe() {
      return `${this.title} by ${this.author}`
   } 
}

/**
 * second class "Menu" to create the menu the website user will see and interact with. 
 * constructor includes "this.cart" to add/place the books inside the cart
 */
class Menu {
   constructor() {
      this.cart = []; 
   }

   start() {
      let selection = this.showMainMenuOptions(); //"let" is used since the reassignment operator is used again on line 50

      while (selection != 0) { //while loop and switch statement used to list options; add, delete, view
         switch (selection) {
            case "1":
               this.addBookToCart();
               break;
            case "2":
               this.deleteBookFromCart();
               break;
            case "3":
               this.viewBooksInCart();
               break;
            default:
                  selection = 0;
         }
         selection = this.showMainMenuOptions(); // show menu again
      }
      alert("Thanks for checking out our books!"); //exit alert pops up if "0" is entered or nothing is entered
   }

   showMainMenuOptions() {
      return prompt(`
         0) exit
         1) Add book to cart
         2) Delete book from cart
         3) View cart 
         `);
   } //prompt user sees for what they can select

   addBookToCart () {
      const title = prompt("Enter title of book: "); //const since "this book" will stay the same no matter what is entered
      const author = prompt("Enter author of book: ");
      this.cart.push(new Book(title, author)); //puts book in menu cart. 
         //creates new instance of the Book class; everytime the method gets called
   }

   getBooksList() { //method to bring up list of books added to cart. construct string represntation for list of books; does not make the alert
      let cartString ="";
      for (let i=0; i<this.cart.length; i++) {
         cartString += i+") "+this.cart[i].describe()+'\n'; //new line character in string; description of each book on separate line = \n
      }
      return cartString;
   }

   deleteBookFromCart () { //has prompt and enters current list of books through previous method so user can see the options to remove
      let index = prompt("Enter the index of the book you wish to delete from cart:\n" + this.getBooksList());
      if (index>-1 && index < this.cart.length) {
         this.cart.splice(index, 1);
      }
   }

   viewBooksInCart() { //alerts the getBooksList to see books
      alert(this.getBooksList());
   }
}

const menu = new Menu(); //new instance of menu
menu.start(); //calls menu start method 