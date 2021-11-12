import { ShapeModel } from "./shapeModel";

export class showTotalPriceView {
    /**
     * View Doesn't control model
     */

    shapeModel: ShapeModel;

    /**
     *
     * @param shapeMod Most recent state of shape model object
     */
    constructor(shapeMod: ShapeModel) {
        this.shapeModel = shapeMod;
    }
    /**
     * @returns the model object
     */
    getModel() { return this.shapeModel; }


    /**
     * Creates total from all items in the cart
     * @returns a string representing the total value of cart items
     * 
     */
    getView(): string {
        let total: number = 0;

        for (let i = 0; i < this.shapeModel.getCart().length; i++) {
            total += this.shapeModel.getCart()[i].getPrice() * this.shapeModel.numberItems[i];
        }

        return "Total: " + total;
    }
}