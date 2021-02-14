//This command will display the ping. Example command usage: '-ping'.

//A variable for the ping:
const ping = Date.now() - message.createdTimestamp

//Sends the ping in chat:
message.reply(`Ping is ${ping}')
