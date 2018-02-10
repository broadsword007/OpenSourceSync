const electron = require('electron')
var conn = require('./js/test')
var $ = jQuery = require('./jquery.min.js')

/*const hook = require('iohook')
const path = require('path')
const url = require('url')
const os = require('os')
const net = require('net')
var PORT = 12345;
var bonjour = require('bonjour')()

var connectedPCs = []
var listOfActiveOSSHosts = []
var server*/
conn.initialize()

// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let splashWindow

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#0A2435',
    show: false
  })

  splashWindow = new BrowserWindow({
    parent: mainWindow,
    width: 370,
    height: 450,
    frame: false,
    backgroundColor: '#313131'
  })

  splashWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'Splash.html'),
    protocol: 'file:',
    slashes: true
  }))

  splashWindow.show()

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'Homescreen.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.once('ready-to-show', () => {
    mainWindow.maximize()
    mainWindow.show()
    setTimeout(function () { splashWindow.close() }, 1000);
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
  
  // var id = setInterval(function() {
  //   if(1)
  //   {
  //     splashWindow.close()
  //     clearImmediate(id)
  //   }
  // }, 1000);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.on('ready', () => {
  if (process.env.NODE_ENV !== 'production') {
    require('vue-devtools').install()
    //onAddAPCButton()
  }
})

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


// function onAddAPCButton() {
  
//   //bonjour.service.stop();
//   console.log('BONJOUR STOPPED');
//   server.close();
//   console.log('CONN SERVER STOPPED');
//   // When user clicks on 'Add a PC' on the main machine it searches for all hosts having type 'OSSActiveHost'
//   // at port 5867 it adds it to the listOfActiveOSSHosts

//   //app.selectList = [];

//   listOfActiveOSSHosts = []
//   // When user clicks on 'Add a PC' on the main machine it searches for all hosts having type 'OSSActiveHost'
//   // at port 5867 it adds it to the listOfActiveOSSHosts
//   var flag = true
//   bonjour.find({ type: 'OSSActiveHost' }, function (service) {
//     //console.log('Found an active OSS host on :', service.addresses[0]);
//     if(service.host != os.hostname()) {
//         listOfActiveOSSHosts.push({name: service.host, ip:service.referer.address});
//         //app.selectList.push({name: service.host, ip:service.referer.address})
//         if(flag)
//         {
//           console.log("Trying to connect")
//           onSearchListEntry(service.referer.address, service.host)
//           //flag = false
//         }          
//     }
//     else {
//         console.log("You are running an OSSActiveHost service yourself");
//     }
//     //console.log(app.selectList);
//     console.log(listOfActiveOSSHosts)
//   })

// }
// function onSearchListEntry(ipAddress, hostname) {
//     var client = new net.Socket();
//     console.log("connectiong to : ", ipAddress)
//     client.connect(PORT, ipAddress, function() {
//         connectedPCs.push({sockObj: client, name: hostname,ip:ipAddress});
//         //app.connectedList.push({name: hostname,ip:ipAddress})
//         //app.connectedList.push({name: hostname,ip: ipAddress});
//         //client.write('Hello Server!');

//     });

//     // Add a 'data' event handler for the client socket
//     // data is what the server sent to this socket
//     client.on('data', function(data) {
        
//         //console.log('DATA: ' + data);
        
//         // Close the client socket completely
        
//     });

//     // Add a 'close' event handler for the client socket
//     client.on('close', function() {
//         console.log('Connection closed');
//     });
// }

// function initialize()
// {
//     var address, ifaces = require('os').networkInterfaces();
//     for (var dev in ifaces) {
//         ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? address = details.address: undefined);
//     }
//     var IP = address;
//     console.log('HOST NAME : ' + os.hostname());
//     //------------------------------------------------

//     // When application starts we start a server on port 5867 that shows its type is 'OSSActiveHost'
//     // Somebody else(from another host) asks this machine at port 5867 about its type and it returns 'OSSActiveHost'
//     bonjour.publish({ name: 'OSS Web Server 1', type: 'OSSActiveHost', host: os.hostname(), port: 5867 })
//     console.log('BONJOUR STARTED');
//     //----------------------------------------Zubair
//     server = net.createServer().listen(PORT, IP);
//     console.log('CONN SERVER STARTED');
//     //---------------------------------------
//     hook.on("mousemove", event => {
//     for(var i=0; i<connectedPCs.length; i++)
//     {
//       //console.log("writing to client", client)
//       //connectedPCs[i].write(JSON.stringify(event))
//       /*if(event.x%2==0 && event.y%2==0)
//       {
//         connectedPCs[i].write(JSON.stringify(event))
//       }*/
//       //connectedPCs[i].sockObj.write(event.x.toString()+","+event.y.toString()+',')
//       connectedPCs[i].sockObj.write(event.x.toString()+","+event.y.toString()+',')
//     }
//     /*You get object like this
//       {
//         type: 'mousemove',
//         x: 700,
//         y: 400
//       }*/
      
//   });
//   hook.start();
// }