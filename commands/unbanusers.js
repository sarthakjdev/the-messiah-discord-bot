module.exports = {
    name: 'unbanusers',
    exec: async(interaction)=>{
        await interaction.deferReply()

        const guild = await interaction.client.guilds.fetch(process.env.HOME_GUILD_ID)
        const bannedMembers = await guild.bans.fetch()
        await bannedMembers.each((member)=> guild.bans.remove(member.user.id))

        await interaction.editReply('All bannned members have been unbanned')
    }
}