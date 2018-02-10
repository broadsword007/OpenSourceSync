/*const hook = require('iohook')
const path = require('path')
const url = require('url')
const os = require('os')
const net = require('net')
var PORT = 12345;
var bonjour = require('bonjour')()

var connectedPCs = []
var listOfActiveOSSHosts = []*/

var nex = require('./js/test')

function initialize() {
    nex.foo;
}

var app = new Vue({
    el: '#app',
    data: {
        selectingP: false,
        loading: false,
        homeP: true,
        connectP: false,
        bindingsP: false,
        securityP: false,
        pcCount: 2,
        sslState: 'disabled',
        selectList: [],
        bindingList: [{
                action: 'Copy',
                binding: 'Ctrl + C'
            },
            {
                action: 'Paste',
                binding: 'Ctrl + V'
            }
        ],
        connectedList: []
    },
    methods: {
        homeClick: function () {
            this.homeP = true;
            this.connectP = false;
            this.selectingP = false;
            this.bindingsP = false;
            this.securityP = false;
        },
        connectClick: function () {
            this.homeP = false;
            this.selectingP = false;
            this.connectP = true;
            this.bindingsP = false;
            this.securityP = false;
        },
        bindingsClick: function () {
            this.selectingP = false;
            this.homeP = false;
            this.connectP = false;
            this.bindingsP = true;
            this.securityP = false;
        },
        securityClick: function () {
            this.homeP = false;
            this.connectP = false;
            this.bindingsP = false;
            this.securityP = true;
            this.selectingP = false;
        },
        toggleSSL: function () {
            if (this.sslState == 'disabled') {
                this.sslState = 'enabled';
            } else {
                this.sslState = 'disabled';
            }
        },
        searchDevices: function () {
            this.connectP = false;
            this.selectingP = true;
            nex.onAddAPCButton();
            nex.attachIOHook();
        },
        addSelected: function (item) {
            nex.onSearchListEntry(item.ip, item.name);
            /*this.connectedList.push({
                name: item.name,
                ip: item.ip
            });*/
        }
    }
});

/*function onAddAPCButton() {
  
  //bonjour.service.stop();
  console.log('BONJOUR STOPPED');
  server.close();
  console.log('CONN SERVER STOPPED');
  // When user clicks on 'Add a PC' on the main machine it searches for all hosts having type 'OSSActiveHost'
  // at port 5867 it adds it to the listOfActiveOSSHosts
  app.selectList = [];
  // When user clicks on 'Add a PC' on the main machine it searches for all hosts having type 'OSSActiveHost'
  // at port 5867 it adds it to the listOfActiveOSSHosts
  var flag = true
  bonjour.find({ type: 'OSSActiveHost' }, function (service) {
    //console.log('Found an active OSS host on :', service.addresses[0]);
    if(service.host != os.hostname()) {
        //listOfActiveOSSHosts.push(service.referer.address);
        //listOfActiveOSSHosts.push({name: service.host, ip:service.referer.address});
        app.selectList.push({name: service.host, ip:service.referer.address})
        if(flag)
        {
          console.log("Trying to connect")
          //onAPCEntryClicked(service.referer.address, service.host)
          //flag = false
        }          
    }
    else {
        console.log("You are running an OSSActiveHost service yourself");
    }
    console.log(app.selectList);
  })

}
function onSearchListEntry(ipAddress, hostname) {
    var client = new net.Socket();
    console.log("connectiong to : ", ipAddress)
    client.connect(PORT, ipAddress, function() {
        connectedPCs.push({sockObj: client, name: hostname,ip:ipAddress});
        app.connectedList.push({name: hostname,ip:ipAddress})
        //app.connectedList.push({name: hostname,ip: ipAddress});
        //client.write('Hello Server!');

    });

    // Add a 'data' event handler for the client socket
    // data is what the server sent to this socket
    client.on('data', function(data) {
        
        //console.log('DATA: ' + data);
        
        // Close the client socket completely
        
    });

    // Add a 'close' event handler for the client socket
    client.on('close', function() {
        console.log('Connection closed');
    });
}
*/

// function initialize()
// {
//     // var address, ifaces = require('os').networkInterfaces();
//     // for (var dev in ifaces) {
//     //     ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? address = details.address: undefined);
//     // }
//     // var IP = address;
//     // console.log('HOST NAME : ' + os.hostname());
//     // //------------------------------------------------

//     // // When application starts we start a server on port 5867 that shows its type is 'OSSActiveHost'
//     // // Somebody else(from another host) asks this machine at port 5867 about its type and it returns 'OSSActiveHost'
//     // bonjour.publish({ name: 'OSS Web Server 1', type: 'OSSActiveHost', host: os.hostname(), port: 5867 })
//     // console.log('BONJOUR STARTED');
//     // //----------------------------------------Zubair
//     // var server = net.createServer().listen(PORT, IP);
//     // console.log('CONN SERVER STARTED');
//     // //---------------------------------------

//     // onAddAPCButton();
//     console.log("asdasd");
// }