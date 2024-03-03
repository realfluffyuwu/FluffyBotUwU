import discord
import random
from discord.ext import commands

intents = discord.Intents.default()
intents.message_content = True

client = commands.Bot(command_prefix='/', intents=intents)

quotes = [
    [
        "Unknown",
        "How do you defeat an enemy who looks into the barrel of a gun and sees paradise?",
    ],
    [
        "Baltasar Gracian",
        "Never contend with a man who has nothing to lose.",
    ],
    [
        "Kami",
        "Women make the best archeologists because they are always digging shit up from the past.",
    ],
    [
        "Dita Von Teese",
        "You can be the ripest, juiciest peach in the world, and there's still going to be somebody who hates peaches.",
    ],
    [
        "Joseph Stalin",
        "A single death is a Tragedy, A Million deaths are a Statistic.",
    ],
    [
        "Anna Bulanan",
        "Confidence is Silent, Insecurities are loud.",
    ],
    [
        "John Boys",
        "After the game the king and the pawn go into the same box.",
    ],
    [
        "Jim Rohn",
        "You can either experience the pain of discipline or the pain of regret. The choice is yours.",
    ],
    [
        "Herbert Bayard Swope",
        "I can't give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.",
    ],
    [
        "Eleanor Roosevelt",
        "Do what you feel in your heart to be right, for you will be criticized anyway.",
    ],
    [
        "Audrey Hepburn",
        "Nothing is impossible, the word itself says 'I'm possible'!",
    ],
    [
        "Jimi Hendrix",
        "I'm the one that's got to die when it's time for me to die, so let me live my life the way I want to.",
    ],
    [
        "Terry Pratchett",
        "It is said that your life Flashes before your eyes just before you die. Yes, It's called Life",
    ],
    [
        "George Santayana",
        "Only the dead have seen the end of war.",
    ],
    [
        "Napoleon Bonaparte",
        "A soldier will fight long and hard for a bit of colored ribbon.",
    ],
    [
        "Napoleon Bonaparte",
        "He who fears being conquered is sure of defeat.",
    ],
    [
        "Ernest Hemingway",
        "Never think that war, no matter how necessary, nor how justified, is not a crime.",
    ],
    [
        "Abraham Lincoln",
        "There's no honorable way to kill, no gentle way to destroy. There is nothing good in war. Except its ending.",
    ],
    [
        "Winston Churchill",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    ],
    [
        "General Omar Bradley",
        "In war there is no prize for the runner-up.",
    ],
    [
        "Vladimir Makarov",
        "It Doesn't Take The Most Powerful Nations On Earth To Create The Next Global Conflict. Just The Will Of A Single Man.",
    ],
    [
        "General William Tecumseh Sherman",
        "There is many a boy here today who looks on war as all glory, but, boys, it is all hell. You can bear this warning voice to generations yet to come. I look upon war with horror.",
    ],
    [
        "Franklin D. Roosevelt",
        "When you get to the end of your rope, tie a knot and hang on.",
    ],
    [
        "Plato",
        "The measure of a man is what he does with power.",
    ],
    [
        "Hiram W Johnson",
        "In war, truth is the first casualty.",
    ],
    [
        "Herbert George Wells",
        "This is a war to end all wars.",
        " How he described The First World War Aug 14th 1914",
    ],
    [
        "Bertrand Russell",
        "War does not determine who is right, only who is left.",
    ],
    [
        "Andre Gide",
        "It is better to be hated for what you are than to be loved for what you are not.",
    ],
    [
        "Elbert Hubbard",
        "A friend is someone who knows all about you and still loves you.",
    ],
    [
        "Elton John",
        "Live for each second without hesitation.",
    ],
    [
        "Elton John",
        "There's really no point in asking what if? The only question worth asking is, what's next?",
    ],
    [
        "John Price",
        "What the hell kind of name is Soap? How'd a Muppet like you pass Selection, Eh?",
    ],
    [
        "Unknown",
        "Do you listen or just wait to speak?",
    ],
    [
        "John A. Shedd",
        "A Ship in Harbor Is Safe, But that Is Not What Ships Are Built For",
    ],
    [
        "Alexis Carrel",
        "A man cannot remake himself without suffering, for he is both the marble and the sculptor.",
    ],
    [
        "Unknown",
        "Fuck it, We ball",
    ],
    [
        "Unknown",
        "Don't play with shit, if you can't handle the smell!",
    ],
    [
        "Jordan B. Peterson",
        "Compare yourself to who you were yesterday, not who someone else is today.",
    ],
    [
        "Jordan B. Peterson",
        "Have some courage and some Fortitude, Man the barricades and keep the degenerates away from the children",
    ],
    [
        "Mark Twain",
        "The reports of my Death were greatly exaggerated",
    ],
    [
        "Mitchell Parker",
        "I've got a black belt in belting blacks.",
    ],
    [
        "Sovic",
        "I have a friendly VSAT in orbit, calling in the A10 with the hollow tips.",
    ],
    [
        "Gen George S. Patton",
        "The object of war is not to die for your country but to make the other bastard die for his.",
    ],
    [
        "Gen George S. Patton",
        "A Good Plan, Violently Executed Now, Is Better Than a Perfect Plan Next Week.",
    ],
    [
        "Unknown",
        "You don't notice your progress in life because you are always raising the bar.",
    ],
    [
        "Brian Lee Slovin",
        "Don't set yourself on fire to keep others warm.",
    ],
    [
        "Unknown",
        "Let go or be dragged.",
    ],
    [
        "Unknown",
        "Sometimes the most grievous of wounds are those that are self inflicted.",
    ],
    [
        "Jim Rohn",
        "Don't wish it was easier, wish you were better.",
    ],
    [
        "Courtney Peppernell",
        "The tragedy of what could have been is nearly as crippling as what once was but will never be again.",
    ],
    [
        "Bryant McGill",
        "You are not responsible for anyone's happiness.",
    ],
    [
        "Unknown",
        "The More you fuck around the more you find out.",
    ],
    [
        "Unknown",
        "Fuck around and Find out.",
    ],
    [
        "Unknown",
        "The Dildo of consequences rarely comes lubed.",
    ],
    [
        "Edgar Allan Poe",
        "I became insane, with long intervals of horrible sanity.",
    ],
    [
        "George Washington *probably*",
        "Stay Strapped or get Clapped",
    ],
    [
        "Putin *probably* 250BCE",
        "I have yet to see someone outsmart bullet",
    ],
    [
        "Jesus Christ 1AD",
        "I'll be back",
    ],
    [
        "Fluffy",
        "It's better to Cum in the sink than to sink in the Cum",
    ],
    [
        "Carl Panzram",
        "I wish you all had one neck and that I had my hands on it.",
    ],
    [
        "Cecil George Edwards",
        "Gentlemen, this is democracy manifest. Get your hand off my penis! What is the Charge? Eating a Meal? a Succulent Chinese Meal?",
        "'Ah, Yes. I see that you know your judo well.' *Before he is forced into a Police Car* 11th October 1991",
    ],
    [
        "Mike Tyson",
        "Everyone has a plan until they get punched in the mouth.",
    ],
    [
        "A Bomb Defusal Technician",
        "It's not Stressful, I'm either right or it's suddenly not my Problem.",
        "When asked how they deal with the Stress of the Job.",
    ],
    [
        "Unknown",
        "You don't always have to hit the brakes, sometimes just let off the gas.",
    ],
    [
        "Maya Angelou",
        "Do the best you can until you know better then when you know better do better.",
    ],
    [
        "Jesse Jackson",
        "Never look down on someone unless it's to grab their hand, and help them up.",
    ],
    [
        "Lao Tzu",
        "You are your actions not your intentions. Choose wisely what you make your habits.",
    ],
    [
        "Fernando Sabino",
        "Everything works out in the end, and if it's not working out then it's not the end yet.",
    ],
    [
        "Socrates",
        "The only true wisdom is in knowing you know nothing.",
    ],
    [
        "Site Inspection",
        "Do your best and silicone the rest!",
    ],
    [
        "Mike Tyson",
        "I'll fuck you til you love me Faggot!",
    ],
    [
        "Unknown",
        "I have no mouth and I must Meme!",
    ],
    [
        "Unknown",
        "I have no toilet and I must Shit!",
    ],
    [
        "Gary",
        "He is just so easy to hate.",
    ],
]


class quote(commands.Cog):
    def __init__(self, client):
        self.client = client

    # Picks a random quote from the list above and sends it
    @discord.app_commands.command(name="quote", description="Replies with a Random Quote")
    async def quote(self, ctx: discord.Interaction):
        quoteI = random.randrange(0, len(quotes) - 1)
        quote = quotes[quoteI]
        await ctx.response.send_message(f"\"{quote[1]}\" - *{quote[0]}*, Quote {quoteI}/{len(quotes)}");

async def setup(client):
    await client.add_cog(quote(client))

