export interface ISubscription {
    value: ISubscriptionValue[];
}

export interface ISubscriptionValue {
    subscriptionId: string;
    clientState: string;
    expirationDateTime: string;
    resource: string;
    tenantId: string;
    siteUrl: string;
    webId: string;
}