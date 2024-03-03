import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.message_content = True

client = commands.Bot(command_prefix='/', intents=intents)

class smallcommands(commands.Cog):
    def __init__(self, client):
        self.client = client

    @discord.app_commands.command(name="hello", description="Says hello!")
    async def hello(self, ctx: discord.Interaction):
        await ctx.response.send_message("Hello!")

    @discord.app_commands.command(name="ping", description="Replies with Pong!")
    async def ping(self, ctx: discord.Interaction):
        await ctx.response.send_message("Pong!")

async def setup(client):
    await client.add_cog(smallcommands(client))

