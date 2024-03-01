module.exports = {
    name: 'right',
    description: 'Sick Burn',
    needsAdmin: false,

    callback: (client, interaction) => {
        interaction.reply(`He's out of line but He's Right.`);
    }
}
