import discord
import pathlib
from discord.ext import commands

root_dir = pathlib.Path(__file__).parent

intents = discord.Intents.default()
intents.message_content = True

client = commands.Bot(command_prefix='/', intents=intents)

class fluffy(commands.Cog):
    def __init__(self, client):
        self.client = client

    
    @discord.app_commands.command(name="fluffy", description="Replies with a Fluffy Copypasta created by Mitch")
    async def fluffy(self, ctx: discord.Interaction, num: int = 0):

        if ctx.permissions.administrator:
            await ctx.response.send_message("some say he has managed to drag his RGB computer setup into one of the drains beneath the city, hes got a long ass extension cable running up to the ladder across the street to a nearby 711. the two owners were furious to begin with but he offered a blow and go and after a brief discussion of who would get the blow and go, the two men agreed. After the two men gave fluffy a blowjob (they were indian and confused by the request), fluffy made his way to the sewers where to this day he sits on his computer pondering the mysteries of linux")
            print("'{user}' executed '{command}' with parameter '{num}'".format(user=ctx.user, command=self.fluffy.qualified_name, num=num))

    @commands.Cog.listener()
    async def on_message(self, ctx: discord.message.Message):
        if ctx.author == self.client.user:
            return

        # To lower the whole message
        ctx.content = ctx.content.lower()

        if ctx.content.find('fluffy') != -1:
            await ctx.reply(file=discord.File('{root_dir}/../assets/fluffy.png'.format(root_dir=root_dir)))


async def setup(client):
    await client.add_cog(fluffy(client))
