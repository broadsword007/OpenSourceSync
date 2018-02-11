var connectionModule
var hook
function startIOHookKeyboardHandlers()
{
    if(hook)
    {
        delete hook
    }
    hook = new require('iohook')
    console.log("Attaching IOHook Keyboard")
    /*hook.on("keboardevent", event => {
        connectionModule.sendKeyboardEventToAllConnected(event)
    });*/
    // TODO detect keyboard events and ask the connection_module to pass them on the other systems
    hook.start();
}
module.exports = {
    setInitVariables:function(connectionModuleVal){
        connectionModule=connectionModuleVal
    },
    startHandlingKeyboardEvents:function(){
        startIOHookKeyboardHandlers()
    },
    stopHandlingKeyboardEvents:function(){
        if(hook)
        {
            delete hook
        }
    }
}