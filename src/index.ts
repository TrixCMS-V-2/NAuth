import NodeRSA from 'node-rsa'
import Utils from './utils'
import Profile from './profile'
import InvalidCredentialsException from './exceptions/InvalidCredentialsException'
import { JSONLogin } from '../typings/JSONProfile'

/**
 * TrixCMS authentification manager
 */
class NAuth {
    /**
     * Site URL where TrixCMS is hosted
     * @private
     */
    private _url: URL

    /**
     * @private
     */
    private _timeout: number

    /**
     * RSA key used to encrypt data
     * @private
     */
    private _publicKey: NodeRSA | undefined

    /**
     * @param {URL} url URL of your site where the CMS is hosted
     * @param {number} timeout 
     */
    constructor (url: string, timeout = 10000) {
        this._url = new URL(url)
        this._timeout = timeout
    }

    /**
     * Retrieve user information with their credentials
     * @param {string} username 
     * @param {string} password 
     * 
     * @returns {Promise<Profile>}
     * 
     * @throws {InvalidCredentialsException} Given bad credentials
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
     * Checks that a user exists with his username
     * @param {string} username 
     * 
     * @returns {Promise<boolean>}
     */
    public async exists (username: string): Promise<boolean> {
        if (!this._publicKey) {
            await this.updatePublicKey()
        }

        this._url.pathname = 'api/auth/v1/check'
        const responseJSON = JSON.parse((await Utils.postRequest(this._url, this.timeout, this._publicKey, username)).body)

        return !!(responseJSON && responseJSON.exist)
    }

    /**
     * Request the site to retrieve the RSA key
     * @private
     */
    private async updatePublicKey () {
        this._publicKey = await Utils.getPublicKey(this.url, this.timeout)
    }

    /**
     * Site URL where TrixCMS is hosted
     */
    get url (): URL {
        return this._url
    }

    get timeout (): number {
        return this._timeout
    }
}

export = NAuth