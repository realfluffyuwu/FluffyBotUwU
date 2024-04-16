import pathlib
import os
import discord
from dotenv import load_dotenv
from discord.ext import tasks, commands
load_dotenv()
TOKEN = os.getenv('TOKEN')

root_dir = pathlib.Path(__file__).parent
command_dir = root_dir / 'commands'

intents = discord.Intents.default()
intents.message_content = True

client = commands.Bot(command_prefix='/', intents=intents)

@client.event
async def on_ready():
    print(f'Startup Log: We have logged in as {client.user}')
    print(f'Startup Log: Listing Servers that {client.user} is Apart of\n')
    for guild in client.guilds:
        print(f'Name: {guild.name} ID: {guild.id}')
    print(f'\nStartup Log: I am running in a total of {len(client.guilds)} Servers')
    
    print("Startup Log: Starting Presence Task")
    updatePresence.start()
    print("Startup Log: Starting Automatic Sync Task")
    automaticSync.start()

    print("Startup Log: Importing Commands")
    cmdCount = 0
    for cmd in command_dir.glob('*.py'):
        cmdName = cmd.name[:-3]
        await client.load_extension('commands.{cmdName}'.format(cmdName=cmdName))
        cmdCount += 1
    print(f'Startup Log: Loaded {cmdCount} Command Bundles')
    print(f'Startup Log: Syncing Commands')
    print(f'Startup Log: Complete')


# Index for Presence
presenceIndex = 0
# Update Presence every 10 seconds
@tasks.loop(seconds = 10)
async def updatePresence():
    presenceMessages = [
    	"in {n} Servers".format(n=len(client.guilds)),
        "Fuck Javascript",
        "Sweeping Patio",
    	"Fluffy is Cool",
    	"Broken Hand",
    	"Windows Slave Name",
    	"UwU",
    	"in {n} Servers".format(n=len(client.guilds)),
    	"Fibbin",
    	"Arch user BTW",
    	"Desk Puncher"
    ]
    
    global presenceIndex
    if presenceIndex > len(presenceMessages) - 1:
        presenceIndex = 0
    await client.change_presence(activity = discord.Game(presenceMessages[presenceIndex]))
    presenceIndex += 1

@tasks.loop(minutes = 30)
async def automaticSync():
    await client.tree.sync()

# Easy way to find out if the Interaction Author is an admin
# if action.permissions.administrator:
#     print("User is Admin")

# Run the client, The error can be disregarded, it's because python doesn't know TOKEN is a string
client.run(str(TOKEN))
