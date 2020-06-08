export default class Profile {
    constructor (id: string, uuid: string, username: string, email: string, money: number, hasAvatar: boolean, isBanned: boolean, banReason: string | null, isConfirmed: boolean, hasTwoAuth: boolean, ranks: string[], token: string, createdAt: Date, updatedAt: Date)
    get id (): string
    get uuid (): string
    get username (): string
    get email (): string
    get money (): number
    get hasAvatar (): boolean
    get isBanned (): boolean
    get banReason (): string | null
    get isConfirmed (): boolean
    get hasTwoAuth (): boolean
    get ranks (): string[]
    get token (): string
    get createdAt (): Date
    get updatedAt (): Date
}
