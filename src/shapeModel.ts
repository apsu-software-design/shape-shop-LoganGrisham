import { Product } from "./products";

export class ShapeModel {

    cart: Product[];
    numberItems: number[];


    constructor() {
        this.cart = [];
        this.numberItems = [];
    }

    getCart() { return this.cart; }
    getNumber() { return this.numberItems; }

    addProduct(newProduct: Product) { this.getCart().push(newProduct); }
    addQuantity(newQuan: number) { this.getNumber().push(newQuan); }

    removeProduct(userChoice: number) {
        this.getCart().splice(userChoice, 1);
        this.getNumber().splice(userChoice, 1);
    }
}