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

    constructor (jsonProfile: JSONProfile) {
        this._id = jsonProfile.id
        this._uuid = jsonProfile.uuid
        this._username = jsonProfile.userName
        this._email = jsonProfile.userMail
        this._money = jsonProfile.money
        this._hasAvatar = jsonProfile.has_avatar
        this._isBanned = jsonProfile.accountBanned
        this._banReason = jsonProfile.banned_reason
        this._isConfirmed = jsonProfile.accountConfirmed
        this._hasTwoAuth = jsonProfile["2fa"]
        this._ranks = jsonProfile.userRank.split(' | ')
        this._token = jsonProfile.token
        this._createdAt = new Date(jsonProfile.created_at)
        this._updatedAt = new Date(jsonProfile.updated_at)
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