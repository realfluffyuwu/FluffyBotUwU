module.exports = {
    name: 'marco',
    description: 'Marco!',
    needsAdmin: false,

    callback: (client, interaction) => {
        interaction.reply(`Polo!`);

        setTimeout(async () => {
            interaction.deleteReply()
        }, ((5 * 60) * 1000));
    }
}
