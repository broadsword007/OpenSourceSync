const clipboardy = require('clipboardy');
var clipboard_content = ""
var timeoutGenerator
var connectionModule
function handleClipboardChange(latestClipboardContent)
{
    if(!connectionModule)
    {
        throw("handleClipboardChange called but connectionModule is not initialized")
    }
    console.log("ClipBoard change event has occured")
    //-----------clipboardy.write(latestClipboardContent)
    // TODO ask the connection module to send a message to all other connected devices to set their local
    // clipboard to [latestClipboardContent]
}
function listenClipboard()
{
    if(!connectionModule)
    {
        throw("listenClipboard called but connectionModule is not initialized")
    }
    var new_clip = clipboardy.readSync()
    if (new_clip != clipboard_content)
    {
        console.log("Old clipboard: ", clipboard_content, " and new Clipboard: ", new_clip)
        clipboard_content = new_clip
        handleClipboardChange(clipboard_content)
    }
    timeoutGenerator=setTimeout(listenClipboard, 100)
}
module.exports = {
    setInitVariables:function(connectionModuleVal){
        connectionModule=connectionModuleVal
    },
    startHandlingClipboardEvents:function(){
        listenClipboard()
    },
    stopHandlingClipboardEvents:function(){
        if(timeoutGenerator)
        {
            clearTimeout(timeoutGenerator)
        }
    }
}