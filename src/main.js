// To Set up the config
const dotenv = require("dotenv");
dotenv.config()

// Grab Discord nonsense
const {Client, GatewayIntentBits, Guild} = require("discord.js");
const eventHandler = require("./events/eventHandler");
const eventChecker = require("./events/eventChecker");
//const { getEventMessage, deleteEventMessage, editMessage } = require("./utils/mainFunctions");

// Create the client
const client = new Client({ intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildPresences
]});


// Environment Variables
const TOKEN = process.env.TOKEN;

// Channel ID to Post Event Lineups
const outPutChannelID = "1151180740566990919";

// Start up Client
client.login(TOKEN);

console.log(`Startup Log: Begin Startup Log`);

// Call Event Handler
eventHandler(client);
//eventChecker(client, process.env.GUILD, outPutChannelID);

// Events
client.on("guildScheduledEventUserRemove", async (event, user) => {
    editMessage(event, user, false, outPutChannelID, client);
    console.log(`${user.globalName} Unsubscribed to Event "${event.name}"`);
});

client.on("guildScheduledEventUserAdd", async (event, user) => {
    editMessage(event, user, true, outPutChannelID, client);
    console.log(`${user.globalName} Subscribed to Event "${event.name}"`);
});

client.on("guildScheduledEventDelete", async (event) => {
    console.log(`"Event: ${event.name}" Cancelled`);
    deleteEventMessage(event, outPutChannelID, client);
})

client.on("guildScheduledEventUpdate", async (eventOld, eventNew) => {
    console.log(`"${eventOld.name}" changed Name to "${eventNew.name}"`);

    
    const eventMessage = await getEventMessage(eventOld.name, outPutChannelID);
    if (eventMessage == undefined) return;
    
    // If the Event has Ended Remove the Message
    if (eventNew.status == 3) {
        eventMessage.delete();
        return;
    }

    var wholeMessage = eventMessage.content.split("\n");
    wholeMessage.splice(0,4);

    var names = "";
    wholeMessage.forEach(name => {
        if (!(name == "")) {
            names += ("\n" + name);
        };
    });

    const eventTime = parseInt(eventNew.scheduledStartAt / 1000);
    eventMessage.edit(`Event Name: "${eventNew.name}"\nEvent Date and Time: <t:${eventTime}:f>\nEvent Starts <t:${eventTime}:R>\nSigned Up Players: ${names}`);
    console.log(`Event "${eventNew.name}" Message Edited`);
})

// Functions
async function getChannelMessages(id) {
    var eventMessages = [];

    // Grab the Channel
    var outputChannel = await getOutputChannel(id);

    // Push all of it's messages to an Array
    await outputChannel.messages.fetch({ limit: 5, cache: false}).then(bulk => {
        bulk.forEach(m => {
            eventMessages.push(m);
        });
    });
    return eventMessages;
};

async function getEventMessage(eventName, id) {
    var eventMessages = await getChannelMessages(id);
    if (eventMessages == undefined) return;
    for (let index = 0; index < eventMessages.length; index++) {
        const egg = eventMessages[index];
        var content = egg.content;
        if (content.includes(eventName)) return egg;
    };
};

async function getOutputChannel(id) {
    var channel = client.channels.cache.get(id)
    return channel;
};

async function deleteEventMessage(event, id) {  
    var eventMessage = await getEventMessage(event.name, id);

    // Try to Delete the Message only when the Event Message Exists
    if (eventMessage == undefined) return;
    eventMessage.delete();
};

async function editMessage(event, user, add, id) {

    var eventMessage = await getEventMessage(event.name, id);
    var subscribers = {};
    var fresh = false;

    if (eventMessage == undefined) {
        // Log when the Event Message is Created
        console.log(`Event "${event.name}" Message Doesn't Exist, Creating it Now`);
        fresh = true;
        var outputChannel = await getOutputChannel(id);
        await outputChannel.send(`"Event Name: "${event.name}"`);
        eventMessage = await getEventMessage(event.name, id);
        subscribers = await event.fetchSubscribers();
        
    };

    var wholeMessage = eventMessage.content.split("\n");
    wholeMessage.splice(0,4);

    if (fresh) {
        subscribers.map(user => {
            wholeMessage.push(`<@${user.user.id}>`);
        });
    };

    if (add) {
        if (!(wholeMessage.includes(`<@${user.id}>`))) {
            wholeMessage.push(`<@${user.id}>`);
        };
    } else {
        var index = wholeMessage.findIndex((m) => {
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
};
