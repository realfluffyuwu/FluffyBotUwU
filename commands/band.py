import os
import discord
import pathlib
import random
from discord.ext import commands

root_dir = pathlib.Path(__file__).parent
bandImages_dir = root_dir / '../assets/bands'

images = os.listdir(bandImages_dir)

intents = discord.Intents.default()
intents.message_content = True

client = commands.Bot(command_prefix='/', intents=intents)

class band(commands.Cog):
    def __init__(self, client):
        self.client = client

    @discord.app_commands.command(name="band4band", description="Replies with a random image of the band or bandless")
    async def band(self, ctx: discord.Interaction):
        
        # We are deferring instead since Interactions only last 3 seconds
        # and since some of the Images are quite Large this can take longer leading to a crash
        await ctx.response.defer()

        randomImg = random.choice(images)
        print("'{user}' executed '{command}' with result '{img}'".format(user=ctx.user, command=self.band.qualified_name, img=randomImg))

        # we use the Follow up method to send the image
        await ctx.followup.send(file=discord.File('{bandImages_dir}/{img}'.format(bandImages_dir=bandImages_dir, img=randomImg)))

async def setup(client):
    await client.add_cog(band(client))
