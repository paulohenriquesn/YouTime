var electron = require('electron');
function navigate(url)
{
var window = electron.remote.getCurrentWindow();
window.loadURL(url);
}

const execSync = require('child_process').execSync;
DownloadVideo = (link,title) => {
  title = 'video';
  execSync('ytdl "' + link + '" > videos/' + title + '.mp4');
    navigate('file://' + __dirname + '/player.html');
}
