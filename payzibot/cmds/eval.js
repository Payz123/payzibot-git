exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    if(message.author.id === "439079453650321409") {
        const bot = client,
              msg = message;
        let evalm = new Discord.MessageEmbed()
       .setColor('#064f3b')
       .setAuthor(`Выполнил: ${message.author.username}`, message.author.avatarURL({ dynamic: true }));
       let code = args.slice(0).join(' '),
           out; 
       try {
           out = eval(code)//.require("util").inspect
           if(out == bot.token) out = `Токен был скрыт`
           evalm.addField(`Ответ`, '```js\np```'.replace('p', out))
       } catch(e) {
           out = `${e.name}: ${e.message}`
           evalm.addField(`Ошибка`, '```js\np```'.replace('p', out))
       } 
       message.channel.send(evalm)
    }
}
exports.help = {
    name: "eval",
    aliases: ['e'],
    info: "owner",
    usage: "eval (код)",
    perm: "Developer",
    description: "Выполняет код напрямую из Discord"
}
