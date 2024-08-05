import discord
import random as r
from discord.ext import commands

intents = discord.Intents.default()
intents.message_content = True

client = commands.Bot(command_prefix='/', intents=intents)

def convertMitchTime(num: int = 0):
    measureMent = ["Minutes", "Hours", "Days", "Weeks", "Months", "Years"]
    timeScale = 0

    # random number between 1 and 60
    rNum = r.randint(1, 10000)

    # multiply random number by timeafk
    mitchMinute = num * rNum

    # Turn Mitch Minutes to Hours if over 60
    if mitchMinute > 60:
        mitchMinute /= 60
        timeScale = 1
    
        # Turn Mitch Hours to Days if it's over 24 Hours
        if mitchMinute > 24:
            mitchMinute /= 24
            timeScale = 2
    
            # Turn Mitch Days to Weeks if it's over 7 Days
            if mitchMinute > 7:
                mitchMinute /= 7
                timeScale = 3
    
                # Turn Mitch Days to Months if it's over 3 Weeks
                if mitchMinute > 3:
                    mitchMinute /= 3
                    timeScale = 4
    
                    # Turn Mitch Months to Years if it's over 12 Months
                    if mitchMinute > 12:
                        mitchMinute /= 12
                        timeScale = 5
    return [round(mitchMinute), measureMent[timeScale]]

class mitchminutes(commands.Cog):
    def __init__(self, client):
        self.client = client


    @discord.app_commands.command(name="mitchminutes", description="Converts your Minutes to Mitch Minutes")
    @discord.app_commands.describe(minutes="Number of Minutes to Convert to Mitch Time.")
    async def mitchminutes(self, ctx: discord.Interaction, minutes: int = 0):

        author = ctx.user.display_name

        mitchMinutes = convertMitchTime(minutes)

        await ctx.response.send_message("{author} is going afk for {num} Mitch {time}".format(author=author, num=mitchMinutes[0], time=mitchMinutes[1]))
        print("'{user}' executed '{command}' with parameter '{num}'".format(user=ctx.user, command=self.mitchminutes.qualified_name, num=minutes))

async def setup(client):
    await client.add_cog(mitchminutes(client))
