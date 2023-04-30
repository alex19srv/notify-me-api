export declare class NotifyMe {
    static sendMessage(url: string, token: string, message: string): Promise<QueryResult>;
    static createSender(url: string, token: string): (message: string) => Promise<QueryResult>;
}
export interface QueryResult {
    status: string;
    message?: string;
}
