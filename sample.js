var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var sampleObj = {
    name: "Ashwin",
    age: 20
};
var A = /** @class */ (function () {
    function A() {
        this.name = 'first name';
        this.age = 50;
    }
    A.prototype.getName = function () {
        console.log("this is the get name method");
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.getAge = function () {
        console.log("this is the get age from child class");
    };
    return B;
}(A));
var newObject = new B();
newObject.name = "Ashwin";
newObject.age = 20;
newObject.getName();
newObject.getAge();
var firstName = "something";
console.log(firstName);
