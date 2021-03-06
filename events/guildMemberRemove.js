const { logChannel } = require('../config.json');
const Discord = require('discord.js');
const logger = require('../util/logger');

module.exports = async (client, member) => {
    const embed = new Discord.RichEmbed()
        .setAuthor('Member Left', member.user.displayAvatarURL)
        .setColor('#963232')
        .setDescription(`<@${member.id}> ${member.user.username}#${member.user.discriminator}`)
        .setFooter(`ID: ${member.id}`);
    await client.channels.get(logChannel).send(embed);
}