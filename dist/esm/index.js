export class NotifyMe {
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
        const result = await response.json();
        if (!result?.status) {
            console.error("returned object have not valid format. Object:", result);
            throw new RangeError("returned object have not valid format");
        }
        const status = result.status;
        if (status === "OK") {
            return result;
        }
        if (result.message) {
            throw new Error(status + ": " + result.message);
        }
        else {
            throw new Error("" + status);
        }
    }
    static createSender(url, token) {
        return (message) => NotifyMe.sendMessage(url, token, message);
    }
}
