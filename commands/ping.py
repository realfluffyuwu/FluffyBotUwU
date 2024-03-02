import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.message_content = True

client = commands.Bot(command_prefix='/', intents=intents)


@commands.hybrid_command(name="ping", description="Ping!")
async def ping(ctx):
    await ctx.send(f'Pong!')


async def setup(client):
    client.add_command(ping)

