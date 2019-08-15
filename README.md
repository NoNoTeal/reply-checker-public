# Reply checker source code
Created by xTeal#7702
## Instructions
Follow instructions carefully.
### Pre-Process, Downloading what you need.

You need Visual Studio Code and Node.JS

### Process 1, Creating a bot.
Go to https://discordapp.com/developers
Create an application

Create a bot user.

Customize the bot's name and profile picture

Copy the client's ID. Invite it by pasting it in this client_id= section of this URL.

https://discordapp.com/oauth2/authorize?client_id=YOUR ID&scope=bot&permissions=8

Make sure bot is NOT public.

### Process 2, Source code.

Keep dev page open

Get bot's token

Download my code

Paste the token into the empty "" section that has "token": next to it, making sure that the token is in the ""

Get bot's client id and paste it into the "id":"id here" 

#### Process 2.1, Dev mode

In the Discord client go to User Settings

Appearence

Scroll down

Turn developer mode on

### Back to Process 2

In the Discord client, tright click on guild you put bot in and click copy ID and paste it into VSC at "mainguild":"guild id here"

Go to server settings

Get a role that has access to the essential parts of the server.

Copy ID by right clicking on it

Paste ID into "mainrole":""

Right-click a channel to log it into.

Paste it into "log":""

all of this is required.

### Process 3, Hosting.

Do npm i discord.js --save

Upload folder contents to a private github repository, or just host on your PC 24/7 with opening terminal and doing ^C and then typing node . and pressing enter.

Or... Host on site of your own

# Profit.

## Questions can be directed at xTeal#7702
