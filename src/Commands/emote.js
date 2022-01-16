const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "emote",
    description: "Prints an emote",

    async run(message,args,client){
        //message.reply('A Unicode emoji: \:thumbsup:' + '\nA Discord emoji: :thumbsup:');
        let name = args.slice(1)
        let cid = client.emojis.cache.find(emoji => emoji.name === `${name}`);
        message.channel.send(`${cid}`)
    }
});