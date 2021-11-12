"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showRemoveView = void 0;
var showRemoveView = /** @class */ (function () {
    function showRemoveView(shapeMod) {
        this.shapeModel = shapeMod;
    }
    showRemoveView.prototype.getModel = function () { return this.shapeModel; };
    /**
     * @returns a list of items for a user to select an item to remove.
     * */
    showRemoveView.prototype.getView = function () {
        var itemsList = "";
        for (var i = 0; i < this.shapeModel.getCart().length; i++) {
            itemsList += (i + ": " + this.shapeModel.getCart()[i].getName() + "\n");
        }
        return itemsList;
    };
    return showRemoveView;
}());
exports.showRemoveView = showRemoveView;
