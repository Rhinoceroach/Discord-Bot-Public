const Command = require("../Structures/Command.js");
const Scraper = require('images-scraper');
const google = new Scraper({
    puppeteer: {
      headless: true,
    },
  });

module.exports = new Command({
    name: "image",
    description: "Gets an image",

    async run(message, args, client){
        const results = await google.scrape(`${args.slice(1).join(" ")}`, 1);
        message.channel.send(results[0].url);
    }
});