//User Interface for The Shopping Cart 
//@author James Church

import readlineSync = require('readline-sync'); //for easier repeated prompts
import { Product } from './products';
import { ShapeModel } from './shapeModel';
import { showCartView } from './showCartView';
import { showTotalPriceView } from './showTotalPriceView';
import { showRemoveView } from './showRemoveView';

/**
 * Function to run the UI
 */
export function start() {
  showMainMenu();
}
let shapeModel = new ShapeModel;
/**
 * The main menu. Will show until the user exits
 */
function showMainMenu() {
  while(true){ //run until we exit
    console.log(`Welcome to the Shape Store! We offer the best shapes! Pick an option:
  1. Add an item to the cart.
  2. Remove an item to the cart.
  3. View the items in the cart.
  4. View the price of all items.
  5. Quit.`);

    let response = readlineSync.question('> ')
    if(response === '5' || response.slice(0,2).toLowerCase() === ':q'){
      break; //stop looping, thus leaving method
    }

    switch(response) { //handle each response
      case '1': addItemToCart(); break;
      case '2': removeItemFromCart(); break;
      case '3': viewItemsInCart(); break;
      case '4': viewCartTotal(); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
  }
}

function addItemToCart() {
    letUserSelectItem();
    letUserSelectQuantity();
}

function letUserSelectItem() {
    console.log(`Here you can select your shape. Pick an option:
  1. Buy a Triangle!
  2. Buy a Square!
  3. Buy a Pentagon!
  4. Go back. Don't buy anything.`);

    
    let response = readlineSync.question('> ')

    switch (response) { //handle each response
        case '1': shapeModel.addProduct(new Product("Triangle", 3.5, "It's got three sides!")); break;
        case '2': shapeModel.addProduct(new Product("Square", 4.5, "It's got four sides!")); break;
        case '3': shapeModel.addProduct(new Product("Pentagon", 5.5, "It's got five sides!")); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
}

function letUserSelectQuantity() {

    console.log(`How many of this shape would you like to purchase?`);
    let response = readlineSync.question('> ')

    shapeModel.addQuantity(parseInt(response));

    console.log(''); //extra empty line for revisiting
}

function removeItemFromCart() {
    console.log(`Select an item to be removed from the cart.`);
    console.log(new showRemoveView(shapeModel).getView());

    let response = readlineSync.question('> ')
    let toRemove = parseInt(response);

    shapeModel.removeProduct(toRemove);
    console.log(''); //extra empty line for revisiting
}

function viewItemsInCart() {
    console.log(new showCartView(shapeModel).getView());
}

function viewCartTotal() {
    console.log(new showTotalPriceView(shapeModel).getView());
}
