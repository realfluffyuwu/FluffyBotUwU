var randomWords = [
    "Empty Cans of Pepsi",
    "Used toothbrushes",
    "Used tampons",
    "Broken strawhats",
    "Special bags of lint",
    "Empty bic lighters",
    "Short pieces of hose",
    "Gatorade bottles",
    "Warrant for sovics",
    "Napkins",
    "Bicycle spokes",
    "Spits",
    "Home made geiger counters",
    "Kami Manifesto",
    "Magazines",
	"Betrayals",
	"Kidney Stones",
	"Broken Hands",
    "Half empty magazines",
    "Straws",
    "Moustache combs",
    "Secondhand Semen Bags",
    "Eyebrows",
    "Knuckle Sandwichs",
    "Titty Twisters",
    "Black eyes",
    "Trampolines",
    "Head Kicks",
    "Special Bag of Lint",
    "Broken Strawhats",
    "Broken Hips",
    "Tickets to Taronga Zoo",
    "Mitch Zeus Missions",
    "Fibs",
    "Deflated Basketballs",
    "Monopoly Pieces",
    "Used Condoms",
    "Slaves",
    "Wasnt me",
    "Hospital visits",
    "Broken Pencils",
    "SirHunter Arrest Warrants",
    "Broken Childhood Dreams",
    "Counting Beans",
    "Meters",
    "Rubles",
    "Freedoms",
    "What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little 'clever' comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldnt, you didnt, and now youre paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. Youre fucking dead, kiddo.",
    "Toenails",
    "Shoes",
    "Zimmerman Telegrams",
    "Schooner",
    "Disability Stickers",
    "Assault Charges",
    "Clown College Degrees",
    "Batista Bombs",
    "Atomic Leg Drops",
    "Bowling Pins",
    "Lock Picks",
    "Septims",
    "Linen Wraps",
    "Bone Meals",
    "Glow Sticks",
    "Ancient Nord Swords",
    "Iron Daggers",
    "Disappointments",
    "Dragon Souls",
    "Bags of Broken Doorknobs",
    "Cars on Bricks",
    "Minutes",
    "Degrees",
    "Piles of Shaved Hair",
    "V2 Rockets",
    "Morphines",
    "Epinephrines",
    "Tutorial Stages",
    "Gamer Moments",
    "Cattle Prods",
    "Critical Fails",
    "Stacked Bodies",
    "RKO's",
    "Google Search Pages",
    "Lists",
    "Broken Radiators",
    "Dirty Lamp Shades",
    "Smashed Avocados",
    "Apprehended Violence Orders",
    "UFO Sightings",
    "Gigabytes",
    "Megabytes",
    "Pop Up Adverts",
    "Percent Rent Raise",
    "Tool Cupboards",
    "Stolen Birthday Cards without the money",
    "Wisdom Checks",
    "Strength Checks",
    "Happy Meal Toys",
]

module.exports = {
    name: 'he-was-so-loaded',
    description: 'He was So Loaded!',
    needsAdmin: false,

    callback: (client, interaction) => {
        
        var randomElement1 = randomWords[Math.floor(Math.random() * randomWords.length)]
        var randomElement2 = randomWords[Math.floor(Math.random() * randomWords.length)]
        var randomElement3 = randomWords[Math.floor(Math.random() * randomWords.length)]

        var ranNum1 = Math.max(Math.round(Math.random()*15), 2)
        var ranNum2 = Math.max(Math.round(Math.random()*15), 2)
        var ranNum3 = Math.max(Math.round(Math.random()*15), 2)

        interaction.reply(`He was so Loaded! They had ${ranNum1} ${randomElement1}, ${ranNum2} ${randomElement2} and ${ranNum3} ${randomElement3}.`);
        setTimeout(() => {
            try {
                interaction.deleteReply()
            } catch (error) {
                console.log(`${error}`)
            }
        }, ((5 * 60) * 1000));
    }
}