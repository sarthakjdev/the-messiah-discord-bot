const { MessageActionRow, MessageButton , MessageRow } = require('discord.js')
const Util = require('../util/util')

class Components {
    static errorEmbed(message) {
        return Util.embed().setDescription(`:x: **${message}**`)
    }
}

module.exports = Components