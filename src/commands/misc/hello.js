module.exports = {
    name: 'hello',
    description: 'Say Hello to the Bot',
    needsAdmin: false,

    callback: (client, interaction) => {
        interaction.reply(`Hello, ${interaction.user.globalName}`);

        setTimeout(async () => {
            interaction.deleteReply()
        }, ((5 * 60) * 1000));
    }
}
