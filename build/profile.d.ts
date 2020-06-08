export default class Profile {
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
