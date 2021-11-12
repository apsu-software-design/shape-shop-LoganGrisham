"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showCartView = void 0;
var showCartView = /** @class */ (function () {
    function showCartView(sModel) {
        this.shapeModel = sModel;
    }
    /**
     * @returns the model object
     */
    showCartView.prototype.getShapeModel = function () { return this.shapeModel; };
    /**
     * @returns A brief summary items in a cart
     */
    showCartView.prototype.getView = function () {
        var cartTextBrick = "";
        for (var i = 0; i < this.shapeModel.getCart().length; i++) {
            cartTextBrick += ("");
            cartTextBrick += ("        Name: " + this.shapeModel.cart[i].getName());
            cartTextBrick += ("       Price: " + this.shapeModel.cart[i].getPrice());
            cartTextBrick += (" Description: " + this.shapeModel.cart[i].getDescription());
            cartTextBrick += ("    Quantity: " + this.shapeModel.numberItems[i]);
            cartTextBrick += ("\n");
        }
        return cartTextBrick;
    };
    return showCartView;
}());
exports.showCartView = showCartView;
