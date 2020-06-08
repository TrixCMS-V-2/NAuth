"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Profile = /** @class */ (function () {
    function Profile(jsonProfile) {
        this._id = jsonProfile.id;
        this._uuid = jsonProfile.uuid;
        this._username = jsonProfile.userName;
        this._email = jsonProfile.userMail;
        this._money = jsonProfile.money;
        this._hasAvatar = jsonProfile.has_avatar;
        this._isBanned = jsonProfile.accountBanned;
        this._banReason = jsonProfile.banned_reason;
        this._isConfirmed = jsonProfile.accountConfirmed;
        this._hasTwoAuth = jsonProfile["2fa"];
        this._ranks = jsonProfile.userRank.split(' | ');
        this._token = jsonProfile.token;
        this._createdAt = new Date(jsonProfile.created_at);
        this._updatedAt = new Date(jsonProfile.updated_at);
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
