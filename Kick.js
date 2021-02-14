//This command will kick a specified user, an example usage of this command would be: '-kick @Joe'.

//Checks whether bot and user has permissions to kick:
if (!message.guild.me.hasPermission(`KICK_MEMBERS`)) return message.reply('I do not have the correct permissions!'); 
if (!message.member.hasPermission(`KICK_MEMBERS`)) return message.reply('You do not have the correct permissions!'); 

//Variable of the member who will be kicked:
let kickedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])

//Chekcs if a member was mentioned:
if(!kickedMember) return message.reply('Please mention a user to kick.')
 
 //Checks if bot can kick the member:
 if(!kickedMember.kickable) return message.reply("I am unable to kick this member.")
 
 //Variable for reason:
let reason = args.slice(1).join(" ")
 
 //Checks if there was a reason supplied, and if not changes it to 'no reason supplied':
 if(!reason) reason = "No reason supplied."
 
 //DMs the member who will be kicked and then kicks them:
kickMember.send(`You have been kicked from "${message.guild.name}" for reason: "${reason}".`).then(() => 
kickMember.kick()).catch(err => console.log(err))

//Sends a message saying how they were kicked and deletes in 7.5 seconds:
message.channel.send(`**${kickMember.user.tag}** has been kicked!`).then(m => m.delete( { timeout: 7500 } ))
