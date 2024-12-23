import { Client, LocalAuth } from 'npm:whatsapp-web.js';
import qrEvent from "./events/qr.event.ts";
import readyEvent from "./events/ready.event.ts";
import disconnectedEvent from "./events/disconnetc.event.ts";

const WAClient = new Client({
  puppeteer: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-gpu',
    ],
  },
  authStrategy: new LocalAuth(),
});

// Events
WAClient.once('ready', readyEvent);
WAClient.on('qr', qrEvent);
WAClient.on('disconnected', disconnectedEvent);

WAClient.initialize();

export default WAClient;