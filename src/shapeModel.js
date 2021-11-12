"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeModel = void 0;
var ShapeModel = /** @class */ (function () {
    function ShapeModel() {
        this.cart = [];
        this.numberItems = [];
    }
    ShapeModel.prototype.getCart = function () { return this.cart; };
    ShapeModel.prototype.getNumber = function () { return this.numberItems; };
    ShapeModel.prototype.addProduct = function (newProduct) { this.getCart().push(newProduct); };
    ShapeModel.prototype.addQuantity = function (newQuan) { this.getNumber().push(newQuan); };
    ShapeModel.prototype.removeProduct = function (userChoice) {
        this.getCart().splice(userChoice, 1);
        this.getNumber().splice(userChoice, 1);
    };
    return ShapeModel;
}());
exports.ShapeModel = ShapeModel;
