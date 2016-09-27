export interface ISPChangeItem {
 	 ChangeToken?: ISPChangeToken;
	 ChangeType?: number;
	 SiteId?: string;
	 Time?: number;
	 Editor?: string;
	 ItemId?: number;
	 ListId?: string;
	 ServerRelativeUrl?: string;
	 WebId?: string; 
}

export interface ISPChangeToken {
 	 StringValue?: string; 
}

// SP.ChangeType Enumeration: https://msdn.microsoft.com/en-us/library/office/ee554890(v=office.14).aspx
export enum ChangeType {
	Added = 1,
	Updated,
	Deleted,
	Restore = 7
}