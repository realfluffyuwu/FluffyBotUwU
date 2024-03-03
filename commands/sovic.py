import os
import discord
import pathlib
import random
from discord.ext import commands

root_dir = pathlib.Path(__file__).parent
sovicImages_dir = root_dir / '../assets/sovicImages'

intents = discord.Intents.default()
intents.message_content = True

client = commands.Bot(command_prefix='/', intents=intents)

sovicAlias = ['sovic', 'hunter', 'habibi']

class sovic(commands.Cog):
    def __init__(self, client):
        self.client = client

    @commands.Cog.listener()
    async def on_message(self, ctx: discord.message.Message):
        if ctx.author == self.client.user:
            return

        # To lower the whole message
        ctx.content = ctx.content.lower()

        for alias in sovicAlias:
            if ctx.content.find(alias) != -1:
                images = os.listdir(sovicImages_dir)
                
                randomImg = random.choice(images)

                await ctx.reply(file=discord.File('{sovicImages_dir}/{img}'.format(sovicImages_dir=sovicImages_dir, img=randomImg)))

async def setup(client):
    await client.add_cog(sovic(client))
