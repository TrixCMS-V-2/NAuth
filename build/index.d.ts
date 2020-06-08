import NodeRSA from 'node-rsa';
import Profile from './profile';
declare const _default: {
    new (url: string, timeout?: number): {
        _url: URL;
        _timeout: number;
        publicKey: NodeRSA | undefined;
        /**
         * Login a user with his password
         * @param username
         * @param password
         */
        login(username: string, password: string): Promise<Profile>;
        /**
         * Check if a username exists
         * @param username
         */
        exists(username: string): Promise<boolean>;
        updatePublicKey(): Promise<void>;
        readonly url: URL;
        readonly timeout: number;
    };
};
export = _default;
