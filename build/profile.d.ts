import { JSONProfile } from "../typings/JSONProfile";
export default class Profile {
    /**
     * @private
     */
    private _id;
    /**
     * @private
     */
    private _uuid;
    /**
     * @private
     */
    private _username;
    /**
     * @private
     */
    private _email;
    /**
     * @private
     */
    private _money;
    /**
     * @private
     */
    private _hasAvatar;
    /**
     * @private
     */
    private _isBanned;
    /**
     * @private
     */
    private _banReason;
    /**
     * @private
     */
    private _isConfirmed;
    /**
     * @private
     */
    private _hasTwoAuth;
    /**
     * @private
     */
    private _ranks;
    /**
     * @private
     */
    private _token;
    /**
     * @private
     */
    private _createdAt;
    /**
     * @private
     */
    private _updatedAt;
    /**
     * @param {JSONProfile} jsonProfile Site API response when retrieving account information
     */
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
