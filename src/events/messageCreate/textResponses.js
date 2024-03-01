
// Sovic Images
var fs = require("fs");
var sovicFiles = fs.readdirSync("src/assets/sovicImages");
var fileCount = sovicFiles.length

module.exports = ( client, message ) => {
    if (message.author.bot) return;

	const text = message.content.toLowerCase();
	const author = message.author;

    if (text.includes("fluffy")) {
		switch (true) {
			case (text.includes("fluffy is cool")):
				message.reply(`Damn Straight! ${author} is spitting Straight Fire`)
				break;

			case (text.includes("fluffy is gay")):
				message.reply(`Takes one to Know one, Fag Boy`)
				break;

			case (text.includes("fluffy is a fag")):
				message.reply(`Takes one to Know one, Fag Boy`)
				break;

			case (text.includes("fluffy sucks")):
				message.reply(`Well I think ${author} sucks, bitch`)
				break;

			case (text.includes("fluffy")):
				message.reply(`https://tenor.com/view/explaining-gif-22499839`)
				break;

			default:
				break;
		};
	};

	if (text.includes("sovic") || text.includes("hunter") || text.includes("habibi")) {
	
        var randomNumber = Math.floor(Math.random() * fileCount);
        var randImage = sovicFiles[randomNumber];
		message.reply({files: [`src/assets/sovicImages/${randImage}`]});
	}

    
	if (text.includes("nigger") || text.includes("nigg")) {
        message.reply(`https://media.discordapp.net/attachments/194772750957674497/1090295386473762916/attachment-2.gif?ex=65e73934&is=65d4c434&hm=72b0cd721f1e657f755a197dccd9623edf532c95c540c5347027e093a865d58c&`)
    }
};
