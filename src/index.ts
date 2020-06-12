import NodeRSA from 'node-rsa'
import Utils from './utils'
import Profile from './profile'
import InvalidCredentialsException from './exceptions/InvalidCredentialsException'
import { JSONLogin } from '../typings/JSONProfile'

export = class NAuth {
    private _url: URL

    private _timeout: number

    private _publicKey: NodeRSA | undefined

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
        if (!this._publicKey) {
            await this.updatePublicKey()
        }

        this._url.pathname = 'api/auth/v1/get'
        const responseJSON: JSONLogin = JSON.parse((await Utils.postRequest(this._url, this.timeout, this._publicKey, { username, password })).body)

        if (responseJSON && responseJSON.exist) {
            return new Profile(responseJSON.profile)
        }

        throw new InvalidCredentialsException()
    }

    /**
     * Check if a username exists
     * @param username 
     */
    public async exists (username: string): Promise<boolean> {
        if (!this._publicKey) {
            await this.updatePublicKey()
        }

        this._url.pathname = 'api/auth/v1/check'
        const responseJSON = JSON.parse((await Utils.postRequest(this._url, this.timeout, this._publicKey, username)).body)

        return !!(responseJSON && responseJSON.exist)
    }

    private async updatePublicKey () {
        this._publicKey = await Utils.getPublicKey(this.url, this.timeout)
    }

    get url () {
        return this._url
    }

    get timeout () {
        return this._timeout
    }
}