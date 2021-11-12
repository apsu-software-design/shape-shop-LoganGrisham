import { ShapeModel } from "./shapeModel";

export class showRemoveView {
    /**
    * View Doesn't control model
    */

    shapeModel: ShapeModel;

    constructor(shapeMod: ShapeModel) {
        this.shapeModel = shapeMod;
    }

    getModel() { return this.shapeModel; }

    /**
     * @returns a list of items for a user to select an item to remove.
     * */
    getView() :string {
        let itemsList: string = "";

        for (let i = 0; i < this.shapeModel.getCart().length; i++) {
            itemsList += (i + ": " + this.shapeModel.getCart()[i].getName() + "\n");
        }
        return itemsList;
    }

}