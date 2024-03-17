import discord
import pathlib
from discord.ext import commands

root_dir = pathlib.Path(__file__).parent

intents = discord.Intents.default()
intents.message_content = True

client = commands.Bot(command_prefix='/', intents=intents)

class mitch(commands.Cog):
    def __init__(self, client):
        self.client = client

    @commands.Cog.listener()
    async def on_message(self, ctx: discord.message.Message):
        if ctx.author == self.client.user:
            return

        # To lower the whole message
        ctx.content = ctx.content.lower()

        if ctx.content.find('mitch') != -1:
            await ctx.reply(file=discord.File('{root_dir}/../assets/mitch.png'.format(root_dir=root_dir)))


async def setup(client):
    await client.add_cog(mitch(client))
