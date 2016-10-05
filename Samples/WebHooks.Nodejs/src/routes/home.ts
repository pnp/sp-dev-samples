import * as express from "express";
import * as request from 'request';
import * as moment from 'moment';
import * as fs from 'fs';

import TokenHelper from '../helpers/TokenHelper';
import ChangeHelper from '../helpers/ChangeHelper';
import { IConfig } from '../Interfaces/IConfig';

const config: IConfig = require('../../config.json');

export default class HomeRoutes {
    private router = express.Router();
    private tokenHelper: TokenHelper;
    private changeHelper: ChangeHelper;

    constructor() {
        this.tokenHelper = new TokenHelper();
        this.changeHelper = new ChangeHelper(config);
    }

    public routes(): express.Router {
        this.router.get('/', (req: express.Request, res: express.Response) => {
            res.sendfile('/index.html');
        });

        // List all the subscriptions on the list
        this.router.get('/list', (req: express.Request, res: express.Response) => {
            this.tokenHelper.getAppOnlyAccessToken(config).then((token) => {
                request({
                    uri: `${config.webhookConfig.url}/_api/web/lists/getbytitle('${config.webhookConfig.listName}')/subscriptions`,
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Accept': 'application/json;odata=nometadata',
                        'Content-Type': 'application/json'
                    }
                }, (error, resp, body) => {
                    if (error !== null) {
                        console.log('ERROR:', error);
                        res.send(error);
                        res.status(400);
                        return;
                    }

                    console.log('Body:', body);
                    res.send(body);
                    res.status(200);
                });
            });
        });

        // Update a subscription
        this.router.get('/update/:subId', (req: any, res: express.Response) => {
            var subId = req.params.subId;
            if (subId !== null) {
                this.tokenHelper.getAppOnlyAccessToken(config).then((token) => {
                    request({
                        method: 'PATCH',
                        uri: `${config.webhookConfig.url}/_api/web/lists/getbytitle('${config.webhookConfig.listName}')/subscriptions('${subId}')`,
                        headers: {
                            'Authorization': 'Bearer ' + token,
                            'Accept': 'application/json;odata=nometadata',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "expirationDateTime": moment().add(90, 'days')
                        })
                    }, (error, resp, body) => {
                        if (error !== null) {
                            console.log('ERROR:', error);
                            res.send(error);
                            res.status(400);
                            return;
                        }

                        res.sendStatus(200);
                    });
                });
            } else {
                res.sendStatus(400);
            }
        });

        // Delete a subscription
        this.router.get('/delete/:subId', (req: any, res: express.Response) => {
            var subId = req.params.subId;
            if (subId !== null) {
                this.tokenHelper.getAppOnlyAccessToken(config).then((token) => {
                    request({
                        method: 'DELETE',
                        uri: `${config.webhookConfig.url}/_api/web/lists/getbytitle('${config.webhookConfig.listName}')/subscriptions('${subId}')`,
                        headers: {
                            'Authorization': 'Bearer ' + token,
                            'Accept': 'application/json;odata=nometadata',
                            'Content-Type': 'application/json'
                        }
                    }, (error, resp, body) => {
                        if (error !== null) {
                            console.log('ERROR:', error);
                            res.send(error);
                            res.status(400);
                            return;
                        }

                        res.sendStatus(200);
                    });
                });
            } else {
                res.sendStatus(400);
            }
        });

        // Listen route for the webhook
        this.router.post('/listen', (req: any, res: express.Response) => {
            if (req.query && req.query.validationtoken) {
                console.log('Found validation token: ', req.query.validationtoken);
                res.send(req.query.validationtoken);
                res.status(200);
            } else {
                this.changeHelper.check(req.body).then((data) => {
                    console.log(data);
                    
                    /* Write to file */
                    // Write changes to file -> this can be updated to a database or queue mechanism
                    const fileName = __dirname + '/../../public/webhook.txt';
                    fs.exists(fileName, (exists) => {
                        let fileData = "";
                        if (exists) {
                            fileData = fs.readFileSync(fileName, 'utf-8');
                        }
                        let txtFile = "";
                        txtFile += `<b>Retrieved</b>: ${moment().toISOString()}</br>`;
                        txtFile += JSON.stringify(data);
                        fileData = txtFile + '</br></br>' + fileData;
                        fs.writeFileSync(fileName, fileData, 'utf-8');
                    });

                    res.sendStatus(200);
                }).catch((err) => {
                    res.sendStatus(400);
                });
            }
        });

        // Create a new subscription
        this.router.get('/create', (req: express.Request, res: express.Response, next: express.NextFunction) => {
            this.tokenHelper.getAppOnlyAccessToken(config).then((token) => {
                request({
                    method: "POST",
                    uri: `${config.webhookConfig.url}/_api/web/lists/getbytitle('${config.webhookConfig.listName}')/subscriptions`,
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Accept': 'application/json;odata=verbose',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "resource": `${config.webhookConfig.url}/_api/web/lists/getbytitle('${config.webhookConfig.listName}')`,
                        "notificationUrl": config.adalConfig.subscriptionUrl,
                        "expirationDateTime": moment().add(90, 'days'),
                        "clientState": config.webhookConfig.clientState
                    })
                }, (error, resp, body) => {
                    if (error !== null) {
                        console.log('ERROR:', error);
                        res.send(error);
                        res.status(400);
                        return;
                    }

                    console.log('Body:', body);
                    res.send(body);
                    res.status(200);
                });
            });
        });

        return this.router;
    }
}