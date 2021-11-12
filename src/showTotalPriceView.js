"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showTotalPriceView = void 0;
var showTotalPriceView = /** @class */ (function () {
    /**
     *
     * @param shapeMod Most recent state of shape model object
     */
    function showTotalPriceView(shapeMod) {
        this.shapeModel = shapeMod;
    }
    /**
     * @returns the model object
     */
    showTotalPriceView.prototype.getModel = function () { return this.shapeModel; };
    /**
     * Creates total from all items in the cart
     * @returns a string representing the total value of cart items
     *
     */
    showTotalPriceView.prototype.getView = function () {
        var total = 0;
        for (var i = 0; i < this.shapeModel.getCart().length; i++) {
            total += this.shapeModel.getCart()[i].getPrice() * this.shapeModel.numberItems[i];
        }
        return "Total: " + total;
    };
    return showTotalPriceView;
}());
exports.showTotalPriceView = showTotalPriceView;
