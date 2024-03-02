import pathlib
import os
import sys
import discord
from dotenv import load_dotenv
from discord.ext import tasks, commands

load_dotenv()
TOKEN = os.getenv('TOKEN')

root_dir = pathlib.Path(__file__).parent
command_dir = root_dir / 'commands'
sys.path.append(str(command_dir))

intents = discord.Intents.default()
intents.message_content = True

client = commands.Bot(command_prefix='/', intents=intents)
#tree = discord.app_commands.CommandTree(client)

bot = client

@client.event
async def on_ready():
    print(f'Startup Log: We have logged in as {client.user}')
    print(f'Startup Log: Listing Servers that {client.user} is Apart of\n')
    for guild in client.guilds:
        print(f'Name: {guild.name} ID: {guild.id}')
    print(f'\nStartup Log: I am running in a total of {len(client.guilds)} Servers')
    
    print("Startup Log: Starting Presence Loop")
    updatePresence.start()
    
    print("Startup Log: Importing Commands")
    cmdCount = 0
    for cmd in command_dir.glob('*.py'):
        cmdName = cmd.name[:-3]
        await client.load_extension(cmdName)
        cmdCount += 1

    #command = await client.load_extension("hello")
    print(f'Startup Log: Loaded {cmdCount} Commands')
    print(f'Startup Log: Syncing Commands')
    synced = await client.tree.sync()
    print(f'Startup Log: Complete')

@client.event
async def on_message(message):
    # if the message belongs to the Bot itself we ignore it.
    if message.author == client.user:
        return

    # if the message starts with 'hello'
    #if message.content.startswith('hello'):
        # we send a message back
        #await message.channel.send('Hello!')

presenceIndex = 0

@tasks.loop(seconds = 10)
async def updatePresence():
    presenceMessages = [
    	"Fuck Javascript",
    	"Fluffy is Cool",
    	"Broken Hand",
    	"Windows Slave Name",
    	"UwU",
    	"Fibbin",
    	"Arch user BTW",
    	"Desk Puncher"
    ]
    
    global presenceIndex
    if presenceIndex > len(presenceMessages) - 1:
        presenceIndex = 0
    await client.change_presence(activity = discord.Game(presenceMessages[presenceIndex]))
    presenceIndex += 1

@tasks.loop(minutes = 1)
async def automaticSync():
    await client.tree.sync()

# Easy way to find out if the Interaction Author is an admin
# if action.permissions.administrator:
#     print("User is Admin")


@client.tree.command(name="hello", description="Replies with Hello!")
async def hello(action: discord.Interaction):
    if action.permissions.administrator:
        print("User is Admin")
    await action.response.send_message('Hello!')

# Run the bot, The error can be disregarded, it's because python doesn't know TOKEN is a string
client.run(TOKEN)
