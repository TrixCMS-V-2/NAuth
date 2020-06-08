import got from 'got'
import NodeRSA from 'node-rsa'

export default class Utils {

    public static async getPublicKey (url: string, timeout: number): Promise<any> {
        const response = await got(url, {
            method: 'POST',
            timeout
        })

        return new NodeRSA(response.body, "public", {
            encryptionScheme: 'pkcs1'
        })
    }

}