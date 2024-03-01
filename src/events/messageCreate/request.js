var responses = [
    "Request this dick",
    "How About, No?",
    "Would you like a pink hand bag with it too?",
    "I'm flattered by your offer, but no thank you.",
    "I'm not comfortable doing that task. Is there anything else I can help you with?",
    "Now isn't a good time for me. I'll let you know if my schedule frees up.",
    "Sorry, I have already committed to something else. I hope you understand.",
    "No, I won't be able to fit that into my schedule this week.",
    "I'm not taking on any other work right now. Maybe check with another department?",
    "I would love to join you, but I'm feeling a little overwhelmed with work right now.",

];

module.exports = ( client, message ) => {
    if (message.author.bot) return;

    const text = message.content.toLowerCase();

    if (text.includes("request")) {
        var response = responses[Math.floor(Math.random() * responses.length)]
        message.reply(response)
    }
};