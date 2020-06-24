import NodeRSA from 'node-rsa';
import { Response } from 'got/dist/source/core';
/**
 * A simple utility class
 */
export default class Utils {
    /**
     * Request the site to retrieve the RSA key
     * @param {URL} url TrixCMS API URI
     * @param {number} timeout
     *
     * @returns {Promise<NodeRSA>}
     */
    static getPublicKey(url: URL, timeout: number): Promise<NodeRSA>;
    static postRequest(url: URL, timeout: number): Promise<Response<string>>;
    static postRequest(url: URL, timeout: number, publicKey: NodeRSA | undefined, data: NodeRSA.Data): Promise<Response<string>>;
}
