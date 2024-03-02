import os
import discord
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv('TOKEN')

intents = discord.Intents.default()
intents.message_content = True


client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f'We have logged in as {client.user}\n')
    
    print('Servers I am in:')
    for guild in client.guilds:
        print(guild.name)
    print(f'\nI am running in a total of {len(client.guilds)} Servers')

@client.event
async def on_message(message):
    # if the message belongs to the Bot itself we ignore it.
    if message.author == client.user:
        return

    # if the message starts with 'hello'
    if message.content.startswith('hello'):
        # we send a message back
        await message.channel.send('Hello!')

# Run the bot, The error can be disregarded, it's because python doesn't know TOKEN is a string
client.run(TOKEN)
