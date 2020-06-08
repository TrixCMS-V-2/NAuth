export default class Profile {
    private _id: string
    private _uuid: string
    private _username: string
    private _email: string
    private _money: number
    private _hasAvatar: boolean
    private _isBanned: boolean
    private _banReason: string | null
    private _isConfirmed: boolean
    private _hasTwoAuth: boolean
    private _ranks: string[]
    private _token: string
    private _createdAt: Date
    private _updatedAt: Date

    constructor (id: string, uuid: string, username: string, email: string, money: number, hasAvatar: boolean, isBanned: boolean, banReason: string | null, isConfirmed: boolean, hasTwoAuth: boolean, ranks: string[], token: string, createdAt: Date, updatedAt: Date) {
        this._id = id
        this._uuid = uuid
        this._username = username
        this._email = email
        this._money = money
        this._hasAvatar = hasAvatar
        this._isBanned = isBanned
        this._banReason = banReason
        this._isConfirmed = isConfirmed
        this._hasTwoAuth = hasTwoAuth
        this._ranks = ranks
        this._token = token
        this._createdAt = createdAt
        this._updatedAt = updatedAt
    }

    get id () {
        return this._id
    }

    get uuid () {
        return this._uuid
    }

    get username () {
        return this._username
    }

    get email () {
        return this._email
    }

    get money () {
        return this._money
    }

    get hasAvatar () {
        return this._hasAvatar
    }

    get isBanned () {
        return this._isBanned
    }

    get banReason () {
        return this._banReason
    }

    get isConfirmed () {
        return this._isConfirmed
    }

    get hasTwoAuth () {
        return this._hasTwoAuth
    }

    get ranks () {
        return this._ranks
    }

    get token () {
        return this._token
    }

    get createdAt () {
        return this._createdAt
    }

    get updatedAt () {
        return this._updatedAt
    }

}