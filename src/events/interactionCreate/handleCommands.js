const getCommands = require("../../utils/getCommands");

// Handle Time Stamps

// get the current day of the week
const daysOfWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

module.exports = async (client, interaction) => {
    if (!interaction.isChatInputCommand()) return;
    
    const now = new Date();
    const day = daysOfWeek[now.getDay()];
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    const timestamp = `${day} ${hours}:${minutes}`;
    const commands = getCommands();

    // Try Catch to actually get and run the Command
    try {
        const commandObject = commands.find((cmd) => cmd.name === interaction.commandName)
        if (!commandObject) return;

        if (commandObject.needsAdmin) {
            
            // Try catch to see if the User is an Admin before attempting an Admin only action
            try {
                if (interaction.memberPermissions.has("ADMINISTRATOR")) {
                    console.log(`${timestamp}: ${interaction.user.displayName} Executed an Admin Command: ${interaction.commandName}`)
                    commandObject.callback(client, interaction);
                }
            } catch (error) {
                console.log(`${timestamp}: ${interaction.user.displayName} tried to use an Admin Command : ${interaction.commandName}`)
                interaction.reply({
                    content: "You need Admin Permissions for this Command",
                    ephemeral: true
                })
            }

        } else {
            // If we are executing a regular command we Log it here
            console.log(`${timestamp}: ${interaction.user.displayName} used the ${interaction.commandName} command`)
            commandObject.callback(client, interaction);
        }

    } catch (error) {
        // If the Command Failed as a whole we report it here
        console.log(`${timestamp}: Command Failed: ${error}`)
    }
};