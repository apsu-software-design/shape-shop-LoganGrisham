import { ShapeModel } from "./shapeModel";

export class showCartView {
    /**
    * View Doesn't control model
    */

    shapeModel: ShapeModel;

    constructor(sModel: ShapeModel) {
        this.shapeModel = sModel;
    }
    /**
     * @returns the model object
     */
    getShapeModel() { return this.shapeModel; }

    /**
     * @returns A brief summary items in a cart
     */
    getView(): string {
        let cartTextBrick: string = "";

        for (var i = 0; i < this.shapeModel.getCart().length; i++) {
            cartTextBrick += ("");
            cartTextBrick += ("        Name: " + this.shapeModel.cart[i].getName());
            cartTextBrick += ("       Price: " + this.shapeModel.cart[i].getPrice());
            cartTextBrick += (" Description: " + this.shapeModel.cart[i].getDescription());
            cartTextBrick += ("    Quantity: " + this.shapeModel.numberItems[i])
            cartTextBrick += ("\n");
        }

        return cartTextBrick;
    }
}