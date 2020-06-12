"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var utils_1 = __importDefault(require("./utils"));
var profile_1 = __importDefault(require("./profile"));
var InvalidCredentialsException_1 = __importDefault(require("./exceptions/InvalidCredentialsException"));
module.exports = (function () {
    function NAuth(url, timeout) {
        if (timeout === void 0) { timeout = 10000; }
        Object.defineProperty(this, "_url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_timeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_publicKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._url = new URL(url);
        this._timeout = timeout;
    }
    Object.defineProperty(NAuth.prototype, "login", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (username, password) {
            return __awaiter(this, void 0, void 0, function () {
                var responseJSON, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!!this._publicKey) return [3, 2];
                            return [4, this.updatePublicKey()];
                        case 1:
                            _c.sent();
                            _c.label = 2;
                        case 2:
                            this._url.pathname = 'api/auth/v1/get';
                            _b = (_a = JSON).parse;
                            return [4, utils_1.default.postRequest(this._url, this.timeout, this._publicKey, { username: username, password: password })];
                        case 3:
                            responseJSON = _b.apply(_a, [(_c.sent()).body]);
                            if (responseJSON && responseJSON.exist) {
                                return [2, new profile_1.default(responseJSON.profile)];
                            }
                            throw new InvalidCredentialsException_1.default();
                    }
                });
            });
        }
    });
    Object.defineProperty(NAuth.prototype, "exists", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (username) {
            return __awaiter(this, void 0, void 0, function () {
                var responseJSON, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!!this._publicKey) return [3, 2];
                            return [4, this.updatePublicKey()];
                        case 1:
                            _c.sent();
                            _c.label = 2;
                        case 2:
                            this._url.pathname = 'api/auth/v1/check';
                            _b = (_a = JSON).parse;
                            return [4, utils_1.default.postRequest(this._url, this.timeout, this._publicKey, username)];
                        case 3:
                            responseJSON = _b.apply(_a, [(_c.sent()).body]);
                            return [2, !!(responseJSON && responseJSON.exist)];
                    }
                });
            });
        }
    });
    Object.defineProperty(NAuth.prototype, "updatePublicKey", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, utils_1.default.getPublicKey(this.url, this.timeout)];
                        case 1:
                            _a._publicKey = _b.sent();
                            return [2];
                    }
                });
            });
        }
    });
    Object.defineProperty(NAuth.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NAuth.prototype, "timeout", {
        get: function () {
            return this._timeout;
        },
        enumerable: false,
        configurable: true
    });
    return NAuth;
}());
