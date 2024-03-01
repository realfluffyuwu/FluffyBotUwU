module.exports = {
    name: 'announce-server-is-ready',
    description: 'Does nothing at the moment',
    needsAdmin: true,

    callback: async (client, interaction) => {
        const outPutChannelID = "1151180740566990919";
        const debugChannelID = "1151042892354310145";

        const channel = client.channels.cache.get(outPutChannelID)

        var message = await channel.send(`@everyone\n\nThe Server is up and Ready\nStart joining the Teamspeak and the Server`);
        interaction.reply({
            content: "Server is Ready Announcement Sent!",
            ephemeral: true
        });

        // Get the Server is Ready message and Remove it if it exists
        setTimeout(async () => {
            message.delete()
        }, ((90 * 60) * 1000));
    }
}