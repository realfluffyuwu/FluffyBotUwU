module.exports = {
    name: 'ping',
    description: 'Pong!',
    needsAdmin: false,

    callback: (client, interaction) => {
        interaction.reply(`Pong!`);
        
        setTimeout(() => {
            interaction.deleteReply()
        }, ((5 * 60) * 1000));
    }
}