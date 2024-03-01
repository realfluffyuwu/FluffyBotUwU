require('dotenv').config();
const { REST, Routes} = require('discord.js');
const getCommands = require('../../utils/getCommands');

module.exports = () => {
    const localCommands = getCommands();
    
    const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

    (async () => {
        try {
            //console.log(`Registering Commands`)
            Routes.applicationGuildCommands()
            await rest.put(
                Routes.applicationGuildCommands(process.env.ID, process.env.GUILD),
                { body: localCommands }
            )
                
        } catch (error) {
            console.log(`There was an Error: ${error}`);
        }
    })();

    console.log(`Startup Log: Commands Registered`)
    console.log(`Startup Log: End Startup Log`)
    
}