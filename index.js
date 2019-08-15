const Discord = require('discord.js');
const Key = require('./configuration.json');
const orange = require('./colors.json');
const client = new Discord.Client({
    disableEveryone: true,
});
client.login(Key.token);

client.on("error", error => {
    let doe = new Date();
    console.log(`Error @
    DATE : ${doe} 

    ${error}`)
})

client.on("connect", connect => {
    let doc = new Date();
    console.log(`Connected @
    DATE : ${doc} 

    ${connect}`)
})

client.on("disconnect", disconnect => {
    let dod = new Date();
    console.log(`Disconnected @ 
    DATE : ${dod} 

    ${disconnect}`)
})

client.on("warn", warn => {
    let dow = new Date();
    console.log(`Warning @ 
    DATE : ${dow} 

    ${warn}`)
})

client.on("ready", async () => {
    console.log(`${client.user.username} is online.`)
    
    client.user.setStatus(`online`)
    setTimeout(async () => {
    client.user.setStatus(`idle`)
    client.user.setActivity('myself load.', { type: 'WATCHING' })
    }, 5000);
    setTimeout(async () => {
    client.user.setStatus(`dnd`)
    client.user.setActivity('to your phrase.', { type: 'LISTENING' })
    }, 10000);

    /** @isabel is the best */
});

client.on("message", async (msg) => {
    if(msg.channel instanceof Discord.DMChannel) {
    if(msg.content !== 'end of the rules') return
    else

    var mg = client.guilds.get(Key.mainguild)
    var me = mg.members.get(msg.author.id)
    var mr = mg.roles.get(Key.mainrole)
    var log = mg.channels.get(Key.log)

    if(!me.roles.find(r => r.id === Key.mainrole)) {
        me.addRole(mr.id, `Role.`)
        var color = orange[Math.floor(Math.random() * orange.length)]
        var newJoin = new Discord.RichEmbed()
        .setTitle(`New user has found the phrase.`)
        .setAuthor(msg.author.username, msg.author.avatarURL)
        .addField(`Added to the group`, `<@&${mr.id}>`)
        .addField(`User added`, `<@${msg.author.id}>`)
        .setColor(color)
        .setTimestamp(Date.now())

        log.send(newJoin)
    } else {
       msg.channel.send(`You already have this role`)
    }
}})

client.on("guildCreate", async (joinedguild) => {
    if(client.guilds.size > 1) {
        joinedguild.leave()
    }
})