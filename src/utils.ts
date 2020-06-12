import got from 'got'
import NodeRSA from 'node-rsa'
import { Response } from 'got/dist/source/core'

export default class Utils {
    /**
     * 
     * @param url TrixCMS API URI
     * @param timeout 
     */
    public static async getPublicKey (url: URL, timeout: number): Promise<any> {
        url.pathname = 'api/auth/v1/public/key'
        const response = await this.postRequest(url, timeout)

        return new NodeRSA(response.body, "public", {
            encryptionScheme: 'pkcs1',
        })
    }

    public static async postRequest (url: URL, timeout: number): Promise<Response<string>>
    public static async postRequest (url: URL, timeout: number, publicKey: NodeRSA | undefined, data: any): Promise<Response<string>>

    public static async postRequest (url: URL, timeout: number, publicKey?: NodeRSA, data?: any) {
        return await got(url.toString(), {
            method: 'POST',
            timeout: timeout,
            json: data && publicKey ? {
                data: publicKey.encrypt(data, 'base64'),
            } : {},
        })
    }
}