//REQUIREMENTS
   //menu app that uses at least one array, two classes, and 
   // has options to create, view, and delete elements

   //add books to this list to add to cart, buy now
class Book {
   constructor (title, author) {
      this.title = title;
      this.author = author;
   }

   describe() {
      return `${this.title} by ${this.author}`
   }
}

class Cart {
   constructor (book) {
      this.book = book;
      this.cart = [];
   }

   // addBookToCart(book) {
   //    if (book instanceof Book) {
   //       this.cart.push(book);
   //    } else {
   //       throw new Error ("Only add books. Argument is not a book.");
   //    }
   // }
}

   // add books to this list to save for later, buy later
// class List extends Book{
//    constructor(title,author) {
//       super(title, author);
//    }

//    addBookToList(book) {
//       if (book instanceof Book) {
//          this.book.push(list);
//       } else {
//          throw new Error ("Only add books. Argument is not a book.");
//       }
//    }
// }

class Menu {
   constructor() {
      // this.cart = [];
      // this.list = [];
      this.selectedCart = null;
      // this.selectedList = null;
   }

   start() {
      let selection = this.showMainMenuOptions();

      while (selection != 0) {
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
            // case "4":
            //    this.addBookToList();
            //    break;
            // case "5":
            //    this.deleteBookFromList();
            //    break;
            // case "6":
            //    this.viewBooksInList();
            default:
                  selection = 0;
         }
         selection = this.showMainMenuOptions();
      }
      alert("Thanks for checking out our books!");
   }

   showMainMenuOptions() {
      return prompt(`
         0) exit
         1) Add book to cart
         2) Delete book from cart
         3) View cart 
         4) Add book to list
         5) Delete book from list
         6) View list
         `);
   }

   addBooksToCart () {
      // let cartName = prompt ("Enter the name of your book cart:");
      let book = prompt("Enter title of the book you want to add to cart:");
      this.selectedCart.push(new Cart(book));
   }

   deleteBookFromCart () {
      let index = prompt("Enter the index of the book you wish to delete from cart:");
      if (index>-1 && index < this.selectedCart.cart.length) {
         this.selectedCart.cart.splice(index, 1);
      }
   }

   viewBooksInCart() {
      let cartString ="";
      for (let i=0; i<this.cart.length; i++) {
         cartString += i+ ")"+this.cart[i].title+'\n';
      }
      alert(cartString);
   }

   // viewBooksInCart() {
   //    if (index >-1 $$ index <this.cart.length) {
   //       this.selectedCart = this.cart[index];
   //       let description = "Books in Cart: " + this.selectedCart.title + "\n";
   //    }
   // }
}

let menu = new Menu();
menu.start();