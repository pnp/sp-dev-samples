import * as request from 'request';
import * as moment from 'moment';

import TokenHelper from '../helpers/TokenHelper';

import { IConfig } from '../Interfaces/IConfig';
import { ISubscription, ISubscriptionValue } from '../Interfaces/ISubscription';
import { ISPChangeItem, ISPChangeToken, ChangeType } from '../Interfaces/ISPChangeItem';

export default class ChangeHelper {
    private config: IConfig;
    private changeToken: string[];
    private tokenHelper: TokenHelper;

    constructor(config: IConfig) {
        this.config = config;
        this.tokenHelper = new TokenHelper();
        this.changeToken = [];
    }

    public check(body: ISubscription): Promise<any> {
        return new Promise((resolve, reject) => {
            if (typeof body.value !== "undefined" && body.value !== null) {
                let subVals = body.value;
                // Check if it contains any values
                if (subVals.length > 0) {
                    this.tokenHelper.getAppOnlyAccessToken(this.config).then((token) => {
                        let proms = [];
                        subVals.forEach((subVal) => {
                            proms.push(this.getListChanges(subVal, token));
                        });
                        // Run all tasks and wait for the Promise
                        Promise.all(proms).then((data) => {
                            resolve(data);
                        });
                    }).catch((err) => {
                        resolve(null);
                    });
                }
            }
        });
    }

    private getListChanges(subVal: ISubscriptionValue, token: string): Promise<any> {
        return new Promise((resolve, reject) => {
            /*
             * Get the absolute web URL
             *  INFO: 
             *  You do not have to do this call if you store the information in a database. 
             *  This is a sample if you do not know where the webhook is coming from.
             */
            this.getAbsWebUrl(subVal, token).then((data) => {
                if (data !== null) {
                    // Check if the change token is null
                    if (this.changeToken.length === 0) {
                        // Check if there is already a token for the current resource
                        if (typeof this.changeToken[subVal.resource] === "undefined") {
                            this.changeToken[subVal.resource] = `1;3;${subVal.resource};${this.toTicks(moment().subtract(1, 'hours'))};-1`
                            // More information about the change token: https://blogs.technet.microsoft.com/stefan_gossner/2009/12/04/content-deployment-the-complete-guide-part-7-change-token-basics/
                        }
                    }
                    console.log('ChangeToken:', this.changeToken);
                    // Do the changeQuery
                    request({
                        method: "POST",
                        uri: `${data.Url}/_api/web/lists(guid'${subVal.resource}')/getchanges`,
                        headers: {
                            'Authorization': 'Bearer ' + token,
                            'Accept': 'application/json;odata=nometadata',
                            'Content-Type': 'application/json'
                        },
                        // SP.ChangeQuery Properties: https://msdn.microsoft.com/en-us/library/office/ee550385(v=office.14).aspx
                        body: JSON.stringify({
                            "query": {
                                "Item": true,
                                "Add": true,
                                "Update": true,
                                "DeleteObject": true,
                                "Restore": true,
                                "ChangeTokenStart": {
                                    "StringValue": this.changeToken[subVal.resource]
                                }
                            }
                        }) // https://msdn.microsoft.com/en-us/library/office/ee550385(v=office.14).aspx
                    }, (error, res, body) => {
                        if (error) {
                            // Something went wrong
                            console.log(res.statusCode, JSON.parse(body));
                            resolve(null);
                        }

                        let changes = [];

                        // Check if there is no error in the body
                        if (body.indexOf('odata.error') === -1) {
                            let result = JSON.parse(body);
                            if (result.value.length > 0) {
                                result.value.forEach((resVal: ISPChangeItem) => {
                                    let change = {
                                        "ItemId": resVal.ItemId,
                                        "WebUrl": data.Url,
                                        "ListId": resVal.ListId,
                                        "ChangeType": ChangeType[resVal.ChangeType]
                                    }
                                    changes.push(change);

                                    // Temp store the change token
                                    this.changeToken[subVal.resource] = resVal.ChangeToken.StringValue;
                                });
                            }
                        }
                        resolve(changes);
                    });
                } else {
                    resolve(null);
                }
            }).catch((err) => {
                // Something went wrong retrieving the absolute web URL
                console.log(err);
                resolve(null);
            })
        });
    }

    private getAbsWebUrl(subVal: ISubscriptionValue, token: string): Promise<any> {
        return new Promise((resolve, reject) => {
            // Get site url
            let siteUrl = this.config.webhookConfig.url;

            // Get the absolute web url
            request({
                uri: `${siteUrl}/_api/site/openWebById('${subVal.webId}')`,
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json;odata=nometadata',
                    'Content-Type': 'application/json'
                }
            }, (error, resp, body) => {
                if (error) {
                    // Do something with the error
                    reject(error);
                }

                let result = JSON.parse(body);
                if (typeof result.Id !== "undefined" && result.Id === subVal.webId) {
                    // Retrieved value sample: '{"value":[{"Url":"https://..."}]}'
                    resolve({ Url: result.Url });
                } else {
                    resolve(null);
                }
            });
        });
    }

    private toTicks(date: moment.Moment): number {
        return (date.valueOf() * 10000) + 621355968000000000;
    }
}