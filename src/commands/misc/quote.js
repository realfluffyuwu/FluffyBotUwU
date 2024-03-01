var quotes = [
    {
        author:"Unknown",
        quote:"How do you defeat an enemy who looks into the barrel of a gun and sees paradise?",
    },
    {
        author:"Baltasar Gracian",
        quote:"Never contend with a man who has nothing to lose.",
    },
    {
        author:"Kami",
        quote:"Women make the best archeologists because they are always digging shit up from the past.",
    },
    {
        author:"Dita Von Teese",
        quote:"You can be the ripest, juiciest peach in the world, and there's still going to be somebody who hates peaches.",
    },
    {
        author:"Joseph Stalin",
        quote:"A single death is a Tragedy, A Million deaths are a Statistic.",
    },
    {
        author:"Anna Bulanan",
        quote:"Confidence is Silent, Insecurities are loud.",
    },
    {
        author:"John Boys",
        quote:"After the game the king and the pawn go into the same box.",
    },
    {
        author:"Jim Rohn",
        quote:"You can either experience the pain of discipline or the pain of regret. The choice is yours.",
    },
    {
        author:"Herbert Bayard Swope",
        quote:"I can't give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.",
    },
    {
        author:"Eleanor Roosevelt",
        quote:"Do what you feel in your heart to be right, for you will be criticized anyway.",
    },
    {
        author:"Audrey Hepburn",
        quote:"Nothing is impossible, the word itself says 'I'm possible'!",
    },
    {
        author:"Jimi Hendrix",
        quote:"I'm the one that's got to die when it's time for me to die, so let me live my life the way I want to.",
    },
    {
        author:"Terry Pratchett",
        quote:"It is said that your life Flashes before your eyes just before you die. Yes, It's called Life",
    },
    {
        author:"George Santayana",
        quote:"Only the dead have seen the end of war.",
    },
    {
        author:"Napoleon Bonaparte",
        quote:"A soldier will fight long and hard for a bit of colored ribbon.",
    },
    {
        author:"Napoleon Bonaparte",
        quote:"He who fears being conquered is sure of defeat.",
    },
    {
        author:"Ernest Hemingway",
        quote:"Never think that war, no matter how necessary, nor how justified, is not a crime.",
    },
    {
        author:"Abraham Lincoln",
        quote:"There's no honorable way to kill, no gentle way to destroy. There is nothing good in war. Except its ending.",
    },
    {
        author:"Winston Churchill",
        quote:"Success is not final, failure is not fatal: it is the courage to continue that counts.",
    },
    {
        author:"General Omar Bradley",
        quote:"In war there is no prize for the runner-up.",
    },
    {
        author:"Vladimir Makarov",
        quote:"It Doesn't Take The Most Powerful Nations On Earth To Create The Next Global Conflict. Just The Will Of A Single Man.",
    },
    {
        author:"General William Tecumseh Sherman",
        quote:"There is many a boy here today who looks on war as all glory, but, boys, it is all hell. You can bear this warning voice to generations yet to come. I look upon war with horror.",
    },
    {
        author:"Franklin D. Roosevelt",
        quote:"When you get to the end of your rope, tie a knot and hang on.",
    },
    {
        author:"Plato",
        quote:"The measure of a man is what he does with power.",
    },
    {
        author:"Hiram W Johnson",
        quote:"In war, truth is the first casualty.",
    },
    {
        author:"Herbert George Wells",
        quote:"This is a war to end all wars.",
        additional:" How he described The First World War Aug 14th 1914",
    },
    {
        author:"Bertrand Russell",
        quote:"War does not determine who is right, only who is left.",
    },
    {
        author:"Andre Gide",
        quote:"It is better to be hated for what you are than to be loved for what you are not.",
    },
    {
        author:"Elbert Hubbard",
        quote:"A friend is someone who knows all about you and still loves you.",
    },
    {
        author:"Elton John",
        quote:"Live for each second without hesitation.",
    },
    {
        author:"Elton John",
        quote:"There's really no point in asking what if? The only question worth asking is, what's next?",
    },
    {
        author:"John Price",
        quote:"What the hell kind of name is Soap? How'd a Muppet like you pass Selection, Eh?",
    },
    {
        author:"Unknown",
        quote:"Do you listen or just wait to speak?",
    },
    {
        author:"John A. Shedd",
        quote:"A Ship in Harbor Is Safe, But that Is Not What Ships Are Built For",
    },
    {
        author:"Alexis Carrel",
        quote:"A man cannot remake himself without suffering, for he is both the marble and the sculptor.",
    },
    {
        author:"Unknown",
        quote:"Fuck it, We ball",
    },
    {
        author:"Unknown",
        quote:"Don't play with shit, if you can't handle the smell!",
    },
    {
        author:"Jordan B. Peterson",
        quote:"Compare yourself to who you were yesterday, not who someone else is today.",
    },
    {
        author:"Jordan B. Peterson",
        quote:"Have some courage and some Fortitude, Man the barricades and keep the degenerates away from the children",
    },
    {
        author:"Mark Twain",
        quote:"The reports of my Death were greatly exaggerated",
    },
    {
        author:"Mitchell Parker",
        quote:"I've got a black belt in belting blacks.",
    },
    {
        author:"Sovic",
        quote:"I have a friendly VSAT in orbit, calling in the A10 with the hollow tips.",
    },
    {
        author:"Gen George S. Patton",
        quote:"The object of war is not to die for your country but to make the other bastard die for his.",
    },
    {
        author:"Gen George S. Patton",
        quote:"A Good Plan, Violently Executed Now, Is Better Than a Perfect Plan Next Week.",
    },
    {
        author:"Unknown",
        quote:"You don't notice your progress in life because you are always raising the bar.",
    },
    {
        author:"Brian Lee Slovin",
        quote:"Don't set yourself on fire to keep others warm.",
    },
    {
        author:"Unknown",
        quote:"Let go or be dragged.",
    },
    {
        author:"Unknown",
        quote:"Sometimes the most grievous of wounds are those that are self inflicted.",
    },
    {
        author:"Jim Rohn",
        quote:"Don't wish it was easier, wish you were better.",
    },
    {
        author:"Courtney Peppernell",
        quote:"The tragedy of what could have been is nearly as crippling as what once was but will never be again.",
    },
    {
        author:"Bryant McGill",
        quote:"You are not responsible for anyone's happiness.",
    },
    {
        author:"Unknown",
        quote:"The More you fuck around the more you find out.",
    },
    {
        author:"Unknown",
        quote:"Fuck around and Find out.",
    },
    {
        author:"Unknown",
        quote:"The Dildo of consequences rarely comes lubed.",
    },
    {
        author:"Edgar Allan Poe",
        quote:"I became insane, with long intervals of horrible sanity.",
    },
    {
        author:"George Washington *probably*",
        quote:"Stay Strapped or get Clapped",
    },
    {
        author:"Putin *probably* 250BCE",
        quote:"I have yet to see someone outsmart bullet",
    },
    {
        author:"Jesus Christ 1AD",
        quote:"I'll be back",
    },
    {
        author:"Fluffy",
        quote:"It's better to Cum in the sink than to sink in the Cum",
    },
    {
        author:"Carl Panzram",
        quote:"I wish you all had one neck and that I had my hands on it.",
    },
    {
        author:"Cecil George Edwards",
        quote:"Gentlemen, this is democracy manifest. Get your hand off my penis! What is the Charge? Eating a Meal? a Succulent Chinese Meal?",
        additional:"'Ah, Yes. I see that you know your judo well.' *Before he is forced into a Police Car* 11th October 1991",
    },
    {
        author:"Mike Tyson",
        quote:"Everyone has a plan until they get punched in the mouth.",
    },
    {
        author:"A Bomb Defusal Technician",
        quote:"It's not Stressful, I'm either right or it's suddenly not my Problem.",
        additional:"When asked how they deal with the Stress of the Job.",
    },
    {
        author:"Unknown",
        quote:"You don't always have to hit the brakes, sometimes just let off the gas.",
    },
    {
        author:"Maya Angelou",
        quote:"Do the best you can until you know better then when you know better do better.",
    },
    {
        author:"Jesse Jackson",
        quote:"Never look down on someone unless it's to grab their hand, and help them up.",
    },
    {
        author:"Lao Tzu",
        quote:"You are your actions not your intentions. Choose wisely what you make your habits.",
    },
    {
        author:"Fernando Sabino",
        quote:"Everything works out in the end, and if it's not working out then it's not the end yet.",
    },
    {
        author:"Socrates",
        quote:"The only true wisdom is in knowing you know nothing.",
    },
    {
        author:"Site Inspection",
        quote:"Do your best and silicone the rest!",
    },
    {
        author:"Mike Tyson",
        quote:"I'll fuck you til you love me Faggot!",
    },
    {
        author:"Unknown",
        quote:"I have no mouth and I must Meme!",
    },
    {
        author:"Unknown",
        quote:"I have no toilet and I must Shit!",
    },
    {
        author:"Gary",
        quote:"He is just so easy to hate.",
    },
]

module.exports = {
    name: 'random-quote',
    description: 'Random Quote',
    needsAdmin: false,

    callback: (client, interaction) => {
        
        var randomNumber = Math.floor(Math.random() * quotes.length);
        //randomQuote is an Object that has 2-3 properties, Author, Quote and Additional
        var randomQuote = quotes[randomNumber];
        var quoteCount = quotes.length;


        // If we don't have an Additional Note to Add
        if (!randomQuote.hasOwnProperty('additional')) {
            interaction.reply(`"${randomQuote.quote}" - *${randomQuote.author}*, Quote ${randomNumber}/${quoteCount}`);
        } else {
            interaction.reply(`"${randomQuote.quote}" - *${randomQuote.author}*, ${randomQuote.additional}, Quote ${randomNumber}/${quoteCount}`);
        }

        setTimeout(() => {
            try {
                interaction.deleteReply()
            } catch (error) {
                console.log(`${error}`)
            }
        }, ((2.5 * 60) * 1000));
    }
}
