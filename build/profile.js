"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Profile = /** @class */ (function () {
    function Profile(id, uuid, username, email, money, hasAvatar, isBanned, banReason, isConfirmed, hasTwoAuth, ranks, token, createdAt, updatedAt) {
        this._id = id;
        this._uuid = uuid;
        this._username = username;
        this._email = email;
        this._money = money;
        this._hasAvatar = hasAvatar;
        this._isBanned = isBanned;
        this._banReason = banReason;
        this._isConfirmed = isConfirmed;
        this._hasTwoAuth = hasTwoAuth;
        this._ranks = ranks;
        this._token = token;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }
    Object.defineProperty(Profile.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "uuid", {
        get: function () {
            return this._uuid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "money", {
        get: function () {
            return this._money;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "hasAvatar", {
        get: function () {
            return this._hasAvatar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "isBanned", {
        get: function () {
            return this._isBanned;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "banReason", {
        get: function () {
            return this._banReason;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "isConfirmed", {
        get: function () {
            return this._isConfirmed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "hasTwoAuth", {
        get: function () {
            return this._hasTwoAuth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "ranks", {
        get: function () {
            return this._ranks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "token", {
        get: function () {
            return this._token;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "createdAt", {
        get: function () {
            return this._createdAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "updatedAt", {
        get: function () {
            return this._updatedAt;
        },
        enumerable: false,
        configurable: true
    });
    return Profile;
}());
exports.default = Profile;
