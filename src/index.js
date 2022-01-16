// Define constants
const Client = require("./Structures/Client.js");
const config = require("./Data/config.json");
const Command = require("./Structures/Command.js")
const client = new Client();

client.start(config.token);


