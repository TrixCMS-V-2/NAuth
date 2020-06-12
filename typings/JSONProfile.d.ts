
declare interface JSONLogin {
    exist: boolean,
    profile: JSONProfile
}

declare interface JSONProfile {
    id: string,
    userName: string,
    userMail: string,
    uuid: string,
    money: number,
    accountBanned: boolean,
    banned_reason: string | null,
    accountConfirmed: boolean,
    "2fa": boolean,
    userRank: string,
    has_avatar: boolean,
    token: string,
    created_at: string,
    updated_at: string
}