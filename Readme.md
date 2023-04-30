## Notify me
Notify me - service to send telegram notifications to yourself
via HTTP using frontend JS/TS code or NodeJS code. To use it
You need connect to telegram bot (/start), get token from
it and make POST requests to https:// URL with this token and
required message text. Bot will send this message to token
owner in telegram. If You use this library (not direct POST'ing
from your code) - I can change HTTP API and even switch to using
WebSockets without changing library interface (so You will not
need to change your code in future).

### How to use
To use notify-me service You need service URL and bot address.
You cat use this lib as npm dependency (cjm or esm module) or
directly from HTML file in `<script src="...">`.

Library exports class `NotifyMe` with two static functions
```JS
class NotifyMe {
    static async sendMessage(url: string, token: string, message: string): Promise<QueryResult> 
    { // ... 
    }

    static createSender(url: string, token: string): (message: string) => Promise<QueryResult> 
    { // ...
    }
}
```
Usage example:
```JS
// this will send message via notify-me service
await NotifyMe.sendMessage(
    "https://notify-me.site.ru",
    "KA1...CiVM",
    "Message to send to telegram" );
// this will create sender, which can be used to send messages
const sender = NotifyMe.createSender(
    "https://notify-me.site.ru",
    "KA1...CiVM");
await sender("Message text");
// for HTML page
<script src="https://notify-me.service.ru/scripts/notify-me.js"></script>
<script>
    NotifyMe.sendMessage(
        "https://notify-me.service.ru/send-message"
        ,"KA10D...rMCiVM"
        ,"from browser");

    const sender = NotifyMe.createSender(
        "https://notify-me.service.ru/send-message"
        ,"KA10D...kKZrMCiVM");
    sender("Message text from sender").catch();
    sender("Message text from sender (one more)").catch();
</script>
```

### Examples
```
examples/
├── cjs-client    // how to use as cjm module example
├── esm-client    // how to use as esm module example
└── html-client   // how to use from html code
```
Examples folder contains examples (with valid `packages.json` and `tsconfig.json`).
To run examples get token from bot, add it to example sources, fix url, then run in example/cjm-client dir (or esm-client):
```shell
npm install
npm run build
node dist/index.js
```

### License
Apache-2.0
