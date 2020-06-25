import Profile from './profile'
/**
 * TrixCMS authentification manager
 */
declare class NAuth {
    /**
     * @param {URL} url URL of your site where the CMS is hosted
     * @param {number} timeout
     */
    constructor (url: string, timeout?: number)
    /**
     * Retrieve user information with their credentials
     * @param {string} username
     * @param {string} password
     *
     * @returns {Promise<Profile>}
     *
     * @throws {InvalidCredentialsException} Given bad credentials
     */
    login (username: string, password: string): Promise<Profile>
    /**
     * Checks that a user exists with his username
     * @param {string} username
     *
     * @returns {Promise<boolean>}
     */
    exists (username: string): Promise<boolean>
    /**
     * Site URL where TrixCMS is hosted
     */
    get url (): URL
    get timeout (): number
}
export = NAuth
