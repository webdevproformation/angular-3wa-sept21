"use strict";
exports.__esModule = true;
var Salutation = /** @class */ (function () {
    function Salutation() {
        this.data = ["Bonjour", "Hello", "Buenos dias", "باح الخير"];
    }
    Salutation.prototype.random = function () {
        var randomNumber = Math.random() * (this.data.length - 1);
        var randomIndex = randomNumber.toFixed(0);
        return this.data[randomIndex];
    };
    return Salutation;
}());
exports["default"] = Salutation;
