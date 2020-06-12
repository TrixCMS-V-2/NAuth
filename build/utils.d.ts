import NodeRSA from 'node-rsa';
import { Response } from 'got/dist/source/core';
export default class Utils {
    static getPublicKey(url: URL, timeout: number): Promise<any>;
    static postRequest(url: URL, timeout: number): Promise<Response<string>>;
    static postRequest(url: URL, timeout: number, publicKey: NodeRSA | undefined, data: any): Promise<Response<string>>;
}
