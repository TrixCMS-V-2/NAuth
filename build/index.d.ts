import NodeRSA from 'node-rsa'
import Profile from './profile'
declare const _default: {
    new(url: string, timeout?: number): {
        login (username: string, password: string): Promise<Profile>
        exists (username: string): Promise<boolean>
        readonly url: URL
        readonly timeout: number
    }
}
export = _default
