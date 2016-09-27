export interface IConfig {
    adalConfig: IAdalConfig;
    webhookConfig: IWebhookConfig;
}

export interface IAdalConfig {
    authority: string;
    clientID: string;
    subscriptionUrl: string;
    resource: string;
    fingerPrint: string;
}

export interface IWebhookConfig {
    url: string;
    listName: string;
    clientState: string;
}