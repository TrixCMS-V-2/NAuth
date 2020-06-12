import NodeRSA from 'node-rsa'
import Utils from './utils'
import got from 'got'
import Profile from './profile'
import InvalidCredentials from './exceptions/InvalidCredentials'

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

        const response = await got('api/auth/v1/get', {
            method: 'POST',
            timeout: this._timeout,
            prefixUrl: this._url.toString(),
            json: {
                data: this._publicKey?.encrypt({ username, password }, 'base64'),
            },
        })

        const json: JSONLogin = JSON.parse(response.body)

        if (json && json.exist) {
            return new Profile(json.profile)
        }

        throw new InvalidCredentials()
    }

    /**
     * Check if a username exists
     * @param username 
     */
    public async exists (username: string): Promise<boolean> {
        if (!this._publicKey) {
            await this.updatePublicKey()
        }

        const response = await got('api/auth/v1/check', {
            method: 'POST',
            timeout: this._timeout,
            prefixUrl: this._url.toString(),
            json: {
                data: this._publicKey?.encrypt(username, 'base64'),
            },
        })

        const json = JSON.parse(response.body)

        return !!(json && json.exist)
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