require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || '', 
  prefix: process.env.PREFIX || '.', 
  ownerID: process.env.OWNERID?.split(',') || ['916234683312926731','965503342249914408'], 
  SpotifyID: process.env.SPOTIFYID || '57a78aaaebbd4a9487099d96368f1c21', 
  SpotifySecret: process.env.SPOTIFYSECRET || '50e64a77e17748af8c92c3507ca1fb00', 
  mongourl: process.env.MONGO_URI || '', 
  embedColor: process.env.COlOR || '#DDBD86', // 
  logs: process.env.LOGS || '', 
  links: {
    support: process.env.SUPPORT || 'https://discord.gg/puwdGUaata',
    invite: process.env.INVITE || 'https://discord.gg/puwdGUaata',
    vote: process.env.VOTE || 'https://discord.gg/puwdGUaata',
    bg: process.env.BG || 'https://media.discordapp.net/attachments/966675680907657256/967789748699668480/flat-landscape-lake-sunset-deer-wallpaper-preview.jpg'
  },

  nodes: [
    {
      url: process.env.NODE_URL || 'lava-v3.ajieblogs.eu.org:80',
      name: process.env.NODE_NAME || 'Main',
      auth: process.env.NODE_AUTH || 'https://dsc.gg/ajidevserver',
      secure: parseBoolean(process.env.NODE_SECURE || 'false'),
    },
  ],
};

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
