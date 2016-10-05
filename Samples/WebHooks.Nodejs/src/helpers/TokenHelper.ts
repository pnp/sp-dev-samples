import * as fs from 'fs';

import { IConfig } from '../Interfaces/IConfig';

const adal: any = require('adal-node');
const certificate = fs.readFileSync(__dirname + '../../../privatekey.pem', { encoding : 'utf8'});

export default class TokenHelper {
    constructor() {}

    public getAppOnlyAccessToken(config: IConfig): Promise<any> {
        return new Promise((resolve, reject) => {
            const authContext = new adal.AuthenticationContext(config.adalConfig.authority);
            authContext.acquireTokenWithClientCertificate(config.adalConfig.resource, config.adalConfig.clientID, certificate, config.adalConfig.fingerPrint, (err, tokenRes) => {
                if (err) {
                    reject(err);
                }
                var accesstoken = tokenRes.accessToken;
                resolve(accesstoken);
            });
        });
    }
}