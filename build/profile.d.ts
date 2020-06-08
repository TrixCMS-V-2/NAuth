export default class Profile {
    private _id;
    private _uuid;
    private _username;
    private _email;
    private _money;
    private _hasAvatar;
    private _isBanned;
    private _banReason;
    private _isConfirmed;
    private _hasTwoAuth;
    private _ranks;
    private _token;
    private _createdAt;
    private _updatedAt;
    constructor(jsonProfile: JSONProfile);
    get id(): string;
    get uuid(): string;
    get username(): string;
    get email(): string;
    get money(): number;
    get hasAvatar(): boolean;
    get isBanned(): boolean;
    get banReason(): string | null;
    get isConfirmed(): boolean;
    get hasTwoAuth(): boolean;
    get ranks(): string[];
    get token(): string;
    get createdAt(): Date;
    get updatedAt(): Date;
}
