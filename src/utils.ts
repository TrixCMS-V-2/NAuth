import got from 'got'
import NodeRSA from 'node-rsa'

export default class Utils {
    /**
     * 
     * @param url TrixCMS API URI
     * @param timeout 
     */
    public static async getPublicKey (url: URL, timeout: number): Promise<any> {
        const response = await got('api/auth/v1/public/key', {
            method: 'POST',
            prefixUrl: url.toString(),
            timeout,
        })

        return new NodeRSA(response.body, "public", {
            encryptionScheme: 'pkcs1',
        })
    }
}