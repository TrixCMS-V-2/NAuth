import got from 'got'
import NodeRSA from 'node-rsa'
import { Response } from 'got/dist/source/core'

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
    public static async getPublicKey (url: URL, timeout: number): Promise<NodeRSA> {
        url.pathname = 'api/auth/v1/public/key'
        const response = await this.postRequest(url, timeout)

        return new NodeRSA(response.body, "public", {
            encryptionScheme: 'pkcs1',
        })
    }

    public static async postRequest (url: URL, timeout: number): Promise<Response<string>>
    public static async postRequest (url: URL, timeout: number, publicKey: NodeRSA | undefined, data: NodeRSA.Data): Promise<Response<string>>

    /**
     * Make a request to any website
     * @param {URL} url Any Website URL
     * @param {number} timeout 
     * @param {NodeRSA} publicKey RSA public key
     * @param {NodeRSA.Data} data Encrypted data
     * 
     * @returns {Response<string>}
     */
    public static async postRequest (url: URL, timeout: number, publicKey?: NodeRSA, data?: NodeRSA.Data): Promise<Response<string>> {
        return await got(url.toString(), {
            method: 'POST',
            timeout: timeout,
            json: data && publicKey ? {
                data: publicKey.encrypt(data, 'base64'),
            } : {},
        })
    }
}