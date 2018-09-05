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

  var fs = require('fs');
  var sql = require("./sql.js");
  var filebuffer = fs.readFileSync('db.db');
  var db = new sql.Database(filebuffer);
  var contents = db.exec("SELECT * FROM movie");
  var i = 0;
    for(i=0;i<contents[0]["values"]["length"];i++){
      var b = document.createElement("li");
      console.log('onclick="DownloadVideo("' + contents[0]["values"][i][2] + '")');
      b.innerHTML = '<nav class="__video"> <img src="' + contents[0]["values"][i][1] + '" width="231" height="332"/> <h3>' + contents[0]["values"][i][0] + '</h3> <button class="btn btn-success" onclick=\'DownloadVideo("' + contents[0]["values"][i][2] + '")\'>Watch</button> <button class="btn btn-primary">Share</button> <button class="btn btn-danger">Report</button> </nav>';
      document.getElementById("videos").appendChild(b);
    }
