const Discord = require("discord.js");
const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "help",
    description: "Lists all commands",

    async run(message,args,client){
        const embed = new Discord.MessageEmbed();
        // Set fields in help section
        embed.setTitle("Help section")
            .addFields(
                {name: 'hello', value: 'Says hello'},
                {name: 'ping', value: 'Gives ping of bot'},
                {name: 'say <text>', value: 'Make the bot say something'},
                {name: 'roll <number>', value: 'Give a random number from 1 to number'},
                {name: 'reddit <subreddit>', value: 'Get a random picture from a subreddit'},
                {name: 'emote <emote_name>', value: 'Prints out an emote'}
            )
            .setColor("BLURPLE");
        message.channel.send({embeds:[embed]});


        // client.commands.find(cmd => cmd.name == args[0]);
        // const directories = [
        //     ...new Set(client.commands.map(cmd => cmd.directory)),
        // ];
        // console.log(directories[0]);
    }
});