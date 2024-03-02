import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.message_content = True

client = commands.Bot(command_prefix='/', intents=intents)


@commands.hybrid_command(name="hellotest", description="Replies with Hello!")
async def hellotest(ctx):
    await ctx.send(f'Hello {ctx.author.display_name}.')


async def setup(client):
    print("WAAAAH")
    client.add_command(hellotest)

