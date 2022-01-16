// Imports 
const Discord = require("discord.js");
const Client = require("./Client.js");

/**
 * 
 * @params {Discord.Message} message
 * @params {string[]} args
 * @params {Client} client
 * 
 */
function RunFunction(message,args,client) {}

class Command{
    /**
     * @typedef {{name: string, description: string, run: RunFunction}} CommandOptions
     * @param {CommandOptions} options 
     */
    constructor(options){
        this.name = options.name;
        this.description = options.description;
        this.run = options.run;
    }
}

module.exports = Command;