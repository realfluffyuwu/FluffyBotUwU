async function getChannelMessages(id, client) {
    var eventMessages = [];

    // Grab the Channel
    var outputChannel = await getOutputChannel(id, client);

    // Push all of it's messages to an Array
    await outputChannel.messages.fetch({ limit: 5, cache: false}).then(bulk => {
        bulk.forEach(m => {
            eventMessages.push(m);
        });
    });
    return eventMessages;
};

async function getOutputChannel(id, client) {
    var channel = client.channels.cache.get(id)
    return channel;
};

async function getEventMessage(eventName, id, client) {
    var eventMessages = await getChannelMessages(id, client);
    if (eventMessages == undefined) return;
    for (let index = 0; index < eventMessages.length; index++) {
        const egg = eventMessages[index];
        content = egg.content;
        if (content.includes(eventName)) return egg;
    };
};

module.exports = { 
    deleteEventMessage: async function deleteEventMessage(event, id, client) {  
        var eventMessage = await getEventMessage(event.name, id, client);
    
        // Try to Delete the Message only when the Event Message Exists
        if (eventMessage == undefined) return;
        eventMessage.delete();
    },

    getEventMessage: async function getEventMessage(eventName, id, client) {
        var eventMessages = await getChannelMessages(id, client);
        if (eventMessages == undefined) return;
        for (let index = 0; index < eventMessages.length; index++) {
            const egg = eventMessages[index];
            content = egg.content;
            if (content.includes(eventName)) return egg;
        };
    },
    
    editMessage: async function editMessage(event, user, add, id, client) {
    
        var eventMessage = await getEventMessage(event.name, id);
    
        if (eventMessage == undefined) {
            // Log when the Event Message is Created
            console.log(`Event "${event.name}" Message Doesn't Exist, Creating it Now`);
            
            var outputChannel = await getOutputChannel(id, client);
            await outputChannel.send(`"Event Name: "${event.name}"`);
            eventMessage = await getEventMessage(event.name, id);
        };
    
        var wholeMessage = eventMessage.content.split("\n");
        wholeMessage.splice(0,4);
    
        if (add) {
            if (!(wholeMessage.includes(`<@${user.id}>`))) {
                wholeMessage.push(`<@${user.id}>`);
            };
        } else {
            index = wholeMessage.findIndex((m) => {
                return m.includes(user.id);
            });
    
            if (index >= 0) {
                wholeMessage.splice(index,1);
            } else {
                console.log(`User: "${user}" wasn't Found on the event Message!`);
            };
        };
        var names = "";
        wholeMessage.forEach(name => {
            if (!(name == "")) {
                names += ("\n" + name);
            };
        });
        const eventTime = parseInt(event.scheduledStartAt / 1000);
        //(`Event Date and Time: <t:${eventTime}:f>\nEvent Starts <t:${eventTime}:R>`);
        eventMessage.edit(`Event Name: "${event.name}"\nEvent Date and Time: <t:${eventTime}:f>\nEvent Starts <t:${eventTime}:R>\nSigned Up Players: ${names}`);
        console.log(`Event "${event.name}" Message Edited`);
    },
};