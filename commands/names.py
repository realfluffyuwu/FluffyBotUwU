import os
import discord
import pathlib
import random
from discord.ext import commands

root_dir = pathlib.Path(__file__).parent

# Specific Folder for Sovics Images
sovicImages_dir = root_dir / '../assets/sovicImages'
sovicAlias = ['sovic', 'hunter', 'habibi']

# All the Images for everyone else are here
regularImages_dir = root_dir / '../assets'

intents = discord.Intents.default()
intents.message_content = True

client = commands.Bot(command_prefix='/', intents=intents)

class names(commands.Cog):
    def __init__(self, client):
        self.client = client

    
    # Slash Command for the Fluffy Copypasta
    @discord.app_commands.command(name="fluffy", description="Replies with a Fluffy Copypasta created by Mitch")
    async def fluffycommand(self, ctx: discord.Interaction):

        await ctx.response.send_message("some say he has managed to drag his RGB computer setup into one of the drains beneath the city, hes got a long ass extension cable running up to the ladder across the street to a nearby 711. the two owners were furious to begin with but he offered a blow and go and after a brief discussion of who would get the blow and go, the two men agreed. After the two men gave fluffy a blowjob (they were indian and confused by the request), fluffy made his way to the sewers where to this day he sits on his computer pondering the mysteries of linux")
        print("'{user}' executed '{command}'".format(user=ctx.user, command=self.fluffycommand.qualified_name))

    @commands.Cog.listener()
    async def on_message(self, ctx: discord.message.Message):
        if ctx.author == self.client.user:
            return

        # To lower the whole message
        ctx.content = ctx.content.lower()

        # Fluffy
        if ctx.content.find('fluffy') != -1:
            await ctx.reply(file=discord.File('{regularImages_dir}/fluffy.png'.format(regularImages_dir=regularImages_dir)))

        # Jordan
        if ctx.content.find('jordan') != -1:
            await ctx.reply(file=discord.File('{regularImages_dir}/jordan.png'.format(regularImages_dir=regularImages_dir)))

        # Mitch
        if ctx.content.find('mitch') != -1:
            await ctx.reply(file=discord.File('{regularImages_dir}/mitch.png'.format(regularImages_dir=regularImages_dir)))

        # Quin
        if ctx.content.find('quin') != -1:
            quinnumber = random.randrange(0, 2)
            await ctx.reply(file=discord.File('{regularImages_dir}/quin{quinnumber}.png'.format(regularImages_dir=regularImages_dir,quinnumber=quinnumber)))
        
        # Sovic Images
        for alias in sovicAlias:
            if ctx.content.find(alias) != -1:
                images = os.listdir(sovicImages_dir)
                
                randomImg = random.choice(images)

                await ctx.reply(file=discord.File('{sovicImages_dir}/{img}'.format(sovicImages_dir=sovicImages_dir, img=randomImg)))

async def setup(client):
    await client.add_cog(names(client))
