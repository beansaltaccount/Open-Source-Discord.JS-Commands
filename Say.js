//This command will allow the user to send a message through the bot. Example command usage: '-say #general Hello World!'.

//Variable of the mentioned channel:
const mentionedChannel = message.mentions.channels.first();

//If there is no mentioned channel it will be the current one:
const channel = mentionedChannel || message.channel;

//Deletes the message:
message.delete();

//Checks whether user has the 'sendMessages' permission in the channel:
const hasPermissionInChannel = channel
.permissionsFor(message.member)
.has('SEND_MESSAGES', false);

//If they do not have the permission it tells them that:
if (!hasPermissionInChannel) {
return message.reply("You do not have permission to talk in this channel!")
}

//Makes msg variable:
const msg = mentionedChannel ? args.slice(1).join(' ') : args.join(' ');

//Checks if there was a message supplied:
if (!msg) {
return message.reply('Please input a valid sentence/word.');
}

//Finally, it sends the message:
channel.send(`Message from ${message.author.tag}: ${msg}`);
