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
        print("'{user}' executed '{command}'".format(user=ctx.user, command=self.ping.qualified_name))
        await ctx.response.send_message("Hello!")

    @discord.app_commands.command(name="ping", description="Replies with Pong!")
    async def ping(self, ctx: discord.Interaction):
        print("'{user}' executed '{command}'".format(user=ctx.user, command=self.ping.qualified_name))
        await ctx.response.send_message("Pong!")

    @discord.app_commands.command(name="sync", description="Syncs Commands")
    async def sync(self, ctx: discord.Interaction):
        if ctx.permissions.administrator:
            print("'{user}' executed '{command}'".format(user=ctx.user, command=self.sync.qualified_name))
            self.client.tree.clear_commands(guild=ctx.guild)
            await self.client.tree.sync(guild=ctx.guild)
            await ctx.response.send_message("Synced Commands", ephemeral=True)
        else:
            print("'{user}' tried to run '{command}'".format(user=ctx.user, command=self.sync.qualified_name))
            await ctx.response.send_message("You do not have permission to use this command.", ephemeral=True)

async def setup(client):
    await client.add_cog(smallcommands(client))

