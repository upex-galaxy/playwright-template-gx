export interface BoardsResponse {
    id: string;
    name: string;
    desc: string;
    descData: any; // Use a more specific type if possible
    closed: boolean;
    idOrganization: string;
    idEnterprise: string | null;
    pinned: boolean;
    url: string;
    shortUrl: string;
    prefs: {
        permissionLevel: string;
        hideVotes: boolean;
        voting: string;
        comments: string;
        invitations: string;
        selfJoin: boolean;
        cardCovers: boolean;
        cardCounts: boolean;
        isTemplate: boolean;
        cardAging: string;
        calendarFeedEnabled: boolean;
        hiddenPluginBoardButtons: any[]; // Use a more specific type if possible
        switcherViews: any[]; // Use a more specific type if possible
        background: string;
        backgroundColor: string | null;
        backgroundImage: string;
        backgroundTile: boolean;
        backgroundBrightness: string;
        backgroundImageScaled: any[]; // Use a more specific type if possible
        backgroundBottomColor: string;
        backgroundTopColor: string;
        canBePublic: boolean;
        canBeEnterprise: boolean;
        canBeOrg: boolean;
        canBePrivate: boolean;
        canInvite: boolean;
    };
    labelNames: {
        [key: string]: string; // This allows any string as a key and a string as a value
    };
}