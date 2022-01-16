// Define constants
const Client = require("./Structures/Client.js");
const config = require("./Data/config.json");
const Command = require("./Structures/Command.js")
const client = new Client();

const port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);

client.start(config.token);


