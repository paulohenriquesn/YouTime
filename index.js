const execSync = require('child_process').execSync;

const {
  app,
  BrowserWindow,
  Menu
} = require('electron');

const menu = Menu;
windowApp = null;

app.on('ready',()=>{

  windowApp = new BrowserWindow({
    width:1024,
    height:728,
    title:"YouTime"
  });

  const menuTemplate = [

    {
      label:"Exit",
      click: () => {
        windowApp.close();
      }
    },

    {
      label:"My Playlist",
      click: () => {

      }
    }

  ];
  menu.setApplicationMenu(menu.buildFromTemplate(menuTemplate));
  windowApp.loadURL('file://' + __dirname + "/www/index.html");
});

// function to download video of youtube
DownloadVideo = (link,title) => {
  execSync('ytdl "' + link + '" > videos/' + title + '.mp4');
}
