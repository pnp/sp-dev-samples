import * as fs from 'fs';

import { IConfig } from '../Interfaces/IConfig';
import * as path from 'path';

const adal: any = require('adal-node');
const certificate = fs.readFileSync(path.join(__dirname, '..', '..','privatekey.pem'), { encoding : 'utf8'});

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