async function getMessage(eventName, id) {
    var channel = await client.channels.cache.get(id);
    var eventMessages = [];
    var eventMessage = undefined;

    await channel.messages.fetch({ limit: 10, cache: false}).then(bulk => {
        bulk.forEach(m => {
            eventMessages.push(m);
        });
    });

    if (eventMessages == undefined) return;
    for (let index = 0; index < eventMessages.length; index++) {
        const egg = eventMessages[index];
        content = egg.content;
        if (content.includes(eventName)) {eventMessage = egg};
    };
};

module.exports = async (client, guildID, outputChannelID) => {

    // Grab the Guilds from the Tangled Web that is Discord
    var guilds = await client.guilds.fetch();
    var guild = await guilds.get(`${guildID}`).fetch();
    // Get the Scheduled Events Manager
    var events = await guild.scheduledEvents.fetch();

    setInterval(async (events, outputChannelID) => {

        //console.log(events);
        console.log(`Looping Through Events!`);
        for (const e of events) {
            var name = e[1].name;
            var status = e[1].status;
            console.log(`Event: ${e[1].name}, Status: ${e[1].status}`);
            //console.log(`Looping, ${name}, ${status}`);
            switch (status) {
                case 1:
                    //console.log(`Event ${name} is Still Scheduled`)
                    break;
    
                case 2:
                    console.log(`Event ${name} is Active`)
                    break;
    
                case 3:
                    console.log(`Event ${name} has Completed`)
                    var message = getMessage(name, outputChannelID)
                    try {
                        message.delete()
                    } catch (error) {
                        console.log(`${error}`)
                    }
                    break;
    
                case 4:
                    //console.log(`Event ${name} was Canceled`)
                    break;
            
                default:
                    break;
            }  
        }
        var events = await guild.scheduledEvents.fetch();
    }, 10000, events, outputChannelID);
};