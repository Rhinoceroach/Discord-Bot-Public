const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "hello",
    description: "Says hello",

    async run(message,args,client){
        message.channel.send(`Hello <@${message.member.user.id}>`);
    }
});