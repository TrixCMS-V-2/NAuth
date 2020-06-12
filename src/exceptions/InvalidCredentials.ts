export default class InvalidCredentials extends Error {
    public code: string

    constructor () {
        super()
        this.message = "Invalid credentials"
        this.code = 'INVALID_CREDENTIALS'
    }
}