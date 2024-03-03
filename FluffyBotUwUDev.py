import pathlib
import os
import discord
from dotenv import load_dotenv
from discord.ext import tasks, commands
load_dotenv()
TOKEN = os.getenv('TOKEN')

root_dir = pathlib.Path(__file__).parent
command_dir = root_dir / 'commands'
#sovicImages_dir = root_dir / 'assets/sovicImages'

intents = discord.Intents.default()
intents.message_content = True

client = commands.Bot(command_prefix='/', intents=intents)

@client.event
async def on_ready():
    print(root_dir)
    print(command_dir)
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
        print('commands.{cmdName}'.format(cmdName=cmdName))
        await client.load_extension('commands.{cmdName}'.format(cmdName=cmdName))
        cmdCount += 1
    print(f'Startup Log: Loaded {cmdCount} Commands')
    print(f'Startup Log: Syncing Commands')
    synced = await client.tree.sync()
    print(f'Startup Log: Complete')


# Main message event handler
@client.event
async def on_message(message: discord.message.Message):
    pass   

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

# Run the client, The error can be disregarded, it's because python doesn't know TOKEN is a string
client.run(str(TOKEN))
