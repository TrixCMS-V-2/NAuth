export default class InvalidCredentialsException extends Error {
    public code: string

    constructor () {
        super()
        this.message = "Invalid credentials"
        this.code = 'INVALID_CREDENTIALS'
    }
}