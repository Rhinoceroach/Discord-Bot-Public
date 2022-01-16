const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "say",
    description: "Writes a given message",

    async run(message, args, client){
        message.channel.send(args.slice(1).join(" "));
    }
})