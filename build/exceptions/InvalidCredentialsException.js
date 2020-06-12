"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var InvalidCredentialsException = (function (_super) {
    __extends(InvalidCredentialsException, _super);
    function InvalidCredentialsException() {
        var _this = _super.call(this) || this;
        Object.defineProperty(_this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _this.message = "Invalid credentials";
        _this.code = 'INVALID_CREDENTIALS';
        return _this;
    }
    return InvalidCredentialsException;
}(Error));
exports.default = InvalidCredentialsException;
