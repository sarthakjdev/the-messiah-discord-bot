module.exports = {
    name: 'getuser',
    exec: async(interaction)=>{
        await interaction.deferReply()
        const guild = await interaction.client.guilds.fetch(process.env.HOME_GUILD_ID)
        console.log("guild ", guild);
        const members = await guild.members.fetch()
        

        await interaction.editReply('Developer command')
    }
}