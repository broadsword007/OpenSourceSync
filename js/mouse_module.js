var connectionModule
var hook
function startIOHookMouseHandlers()
{
    if(hook)
    {
        delete hook
    }
    hook = new require('iohook')
    console.log("Attaching IOHook Mouse")
    hook.on("mousemove", event => {
        connectionModule.sendMouseMovementEventToAllConnected(event)
    });
    hook.start();
}
module.exports = {
    setInitVariables:function(connectionModuleVal){
        connectionModule=connectionModuleVal
    },
    startHandlingMouseEvents:function(){
        startIOHookMouseHandlers()
    },
    stopHandlingMouseEvents:function(){
        if(hook)
        {
            delete hook
        }
    }
}