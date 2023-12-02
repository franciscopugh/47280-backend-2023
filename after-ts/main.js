//Declaracion de tipos en las variables
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
var numero = 5; //Multiples tipos de datos
var mensaje = "Hola!";
var isTrue = true;
numero = NaN;
//Funciones
var sumar = function (num1, num2) {
    return num1 + num2;
};
console.log(sumar(10, 5));
var Mamifero = /** @class */ (function () {
    function Mamifero(nombre) {
        this.nombre = nombre;
    }
    Mamifero.prototype.moverse = function (velocidad) {
        console.log("Me muevo a ".concat(velocidad));
    };
    return Mamifero;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre, raza) {
        var _this = _super.call(this, nombre) || this;
        _this.raza = raza;
        return _this;
    }
    return Perro;
}(Mamifero));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nombre) {
        return _super.call(this, nombre) || this;
    }
    return Gato;
}(Mamifero));
