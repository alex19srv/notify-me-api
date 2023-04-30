"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifyMe = void 0;
class NotifyMe {
    static async sendMessage(url, token, message) {
        const data = { token, message };
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "omit",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
        });
        return await response.json();
    }
    static createSender(url, token) {
        return (message) => NotifyMe.sendMessage(url, token, message);
    }
}
exports.NotifyMe = NotifyMe;
