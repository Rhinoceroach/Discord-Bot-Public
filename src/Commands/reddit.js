const Command = require("../Structures/Command.js");
const randomPuppy = require('random-puppy');

module.exports = new Command({
    name: "reddit",
    description: "Random reddit image",

    async run(message, args, client){
        randomPuppy(`${args.slice(1).join(" ")}`)
        .then(url => {
            if (url == null){
                message.channel.send(`${args.slice(1).join(" ")} is not a valid subreddit.`);
            } else{
                message.channel.send(url);
            }
        })
    }
})