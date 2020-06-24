import { JSONProfile } from "../typings/JSONProfile"

export default class Profile {
    /**
     * @private
     */
    private _id: string

    /**
     * @private
     */
    private _uuid: string

    /**
     * @private
     */
    private _username: string

    /**
     * @private
     */
    private _email: string

    /**
     * @private
     */
    private _money: number

    /**
     * @private
     */
    private _hasAvatar: boolean

    /**
     * @private
     */
    private _isBanned: boolean

    /**
     * @private
     */
    private _banReason: string | null

    /**
     * @private
     */
    private _isConfirmed: boolean

    /**
     * @private
     */
    private _hasTwoAuth: boolean

    /**
     * @private
     */
    private _ranks: string[]

    /**
     * @private
     */
    private _token: string

    /**
     * @private
     */
    private _createdAt: Date

    /**
     * @private
     */
    private _updatedAt: Date

    /**
     * @param {JSONProfile} jsonProfile Site API response when retrieving account information
     */
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

    get id (): string {
        return this._id
    }

    get uuid (): string {
        return this._uuid
    }

    get username (): string {
        return this._username
    }

    get email (): string {
        return this._email
    }

    get money (): number {
        return this._money
    }

    get hasAvatar (): boolean {
        return this._hasAvatar
    }

    get isBanned (): boolean {
        return this._isBanned
    }

    get banReason (): string | null {
        return this._banReason
    }

    get isConfirmed (): boolean {
        return this._isConfirmed
    }

    get hasTwoAuth (): boolean {
        return this._hasTwoAuth
    }

    get ranks (): string[] {
        return this._ranks
    }

    get token (): string {
        return this._token
    }

    get createdAt (): Date {
        return this._createdAt
    }

    get updatedAt (): Date {
        return this._updatedAt
    }
}