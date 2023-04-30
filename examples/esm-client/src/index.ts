/*
 * Copyright 2023 Alex Syrnikov <alex.syrnikov19@gmail.com>
 * SPDX-License-Identifier: Apache-2.0
 */

import { NotifyMe } from "notify-me-api";

const url = "https://notify-me.service.ru/send-message"
const token = "KA10Djm...QkKZrMCiVM";

// this will send message via notify-me service
NotifyMe.sendMessage( url, token, "Message from sendMessage" )
    .catch(); // async function

// this will create sender, which can be used to send messages
const sender = NotifyMe.createSender( url, token);
sender("Message from sender").catch();
sender("Second message from sender").catch();
