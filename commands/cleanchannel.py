import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.message_content = True

client = commands.Bot(command_prefix='/', intents=intents)


class cleanchannel(commands.Cog):
    def __init__(self, client):
        self.client = client

    @discord.app_commands.command(name="cleanchannel", description="Cleans the channel")
    async def cleanchannel(self, ctx: discord.Interaction, num: int = 0):

        if ctx.permissions.administrator:
            await ctx.response.send_message("Deleting {num} messages in {channel}".format(num=num, channel=ctx.channel), ephemeral=True)
            print("'{user}' executed '{command}' with parameter '{num}'".format(user=ctx.user, command=self.cleanchannel.qualified_name, num=num))
            async for message in ctx.channel.history(limit=num):
                await message.delete()
        else:
            print("'{user}' tried to run '{command}'".format(user=ctx.user, command=self.cleanchannel.qualified_name))
            await ctx.response.send_message("You do not have permission to use this command.")

async def setup(client):
    await client.add_cog(cleanchannel(client))
