import NodeRSA from 'node-rsa'
import Utils from './utils'
// import path from 'path'
import got from 'got'
import Profile from './profile'
import InvalidCredentials from './exceptions/InvalidCredentials'

declare interface JSONProfile {
    exist: boolean,
    profile: {
        id: string,
        userName: string,
        userMail: string,
        uuid: string,
        money: number,
        accountBanned: boolean,
        banned_reason: string | null,
        accountConfirmed: boolean,
        "2fa": boolean,
        userRank: string,
        has_avatar: boolean,
        token: string,
        created_at: string,
        updated_at: string
    }
}

export = class NAuth {

    private _url: URL

    private _timeout: number

    private publicKey: NodeRSA | undefined

    /**
     * 
     * @param url Website url
     * @param timeout
     */
    constructor (url: string, timeout: number = 10000) {
        this._url = new URL(url)
        this._timeout = timeout
    }

    /**
     * Login a user with his password
     * @param username 
     * @param password 
     */
    public async login (username: string, password: string): Promise<Profile> {
        if (!this.publicKey) {
            await this.updatePublicKey()
        }

        this._url.pathname = '/api/auth/v1/get'
        const response = await got(this._url.toString(), {
            method: 'POST',
            timeout: this._timeout,
            json: {
                data: this.publicKey?.encrypt({
                    username: username, password: password
                }, 'base64')
            }
        })

        const json: JSONProfile = JSON.parse(response.body)

        if (json && json.exist) {
            return new Profile(json.profile.id,
                json.profile.uuid,
                json.profile.userName,
                json.profile.userMail,
                json.profile.money,
                json.profile.has_avatar,
                json.profile.accountBanned,
                json.profile.banned_reason,
                json.profile.accountConfirmed,
                json.profile["2fa"],
                json.profile.userRank.split(' | '),
                json.profile.token,
                new Date(json.profile.created_at),
                new Date(json.profile.updated_at)
            )
        }

        throw new InvalidCredentials()
    }

    /**
     * Check if a username exists
     * @param username 
     */
    public async exists (username: string): Promise<boolean> {
        if (!this.publicKey) {
            await this.updatePublicKey()
        }

        this._url.pathname = '/api/auth/v1/check'
        const response = await got(this._url.toString(), {
            method: 'POST',
            timeout: this._timeout,
            json: {
                data: this.publicKey?.encrypt(username, 'base64')
            }
        })

        const json = JSON.parse(response.body)

        return !!(json && json.exist)
    }

    private async updatePublicKey () {
        this.url.pathname = '/api/auth/v1/public/key'
        this.publicKey = await Utils.getPublicKey(this.url.toString(), this.timeout)
    }

    get url () {
        return this._url
    }

    get timeout () {
        return this._timeout
    }

}