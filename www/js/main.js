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

function deletar(valor)
  {
    db.run("DELETE FROM movie WHERE name = ?",[valor]);
    var data = db.export();
    var buffer = new Buffer(data);
    fs.writeFileSync("db.db", buffer);
    db.close();
    navigate('file://' + __dirname + '/index.html');
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
    b.innerHTML = '<nav class="__video"> <img src="' + contents[0]["values"][i][1] + '" width="231" height="332"/> <h3>' + contents[0]["values"][i][0] + '</h3> <button class="btn btn-success" onclick=\'DownloadVideo("' + contents[0]["values"][i][2] + '")\'>Watch</button><button class="btn btn-danger" onclick=\'deletar("' + contents[0]["values"][i][0] + '")\'>Delete</button> </nav>';
    document.getElementById("videos").appendChild(b);
  }

function create(url,name,image){
  db.run("INSERT INTO movie VALUES (?,?,?)",[name,image,url]);
  var data = db.export();
  var buffer = new Buffer(data);
  fs.writeFileSync("db.db", buffer);
  db.close();
  //navigate('file://' + __dirname + '/index.html');
}
