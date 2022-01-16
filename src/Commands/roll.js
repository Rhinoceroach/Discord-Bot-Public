const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "roll",
    description: "Gives a random number given maximum",

    async run(message, args, client){
        var max = parseInt(args.slice(1).join(" "));
        var num = (Math.floor(Math.random() * max) + 1).toString();
        message.channel.send(num);
    }
})