

var c = document.getElementById('canvas')
var vid = document.getElementById("vid");

function partyvid(message) {
    vid.play();
    document.getElementById("vid").muted = false;
    setTimeout(function(){
      vid.pause();
      vid.currentTime = 0;
    }, 11900) //seconds until video stops playing--currently at 11.9s
}

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
    if( command === "partay" &&
        ( !rewardId || flags.broadcaster || flags.mod ) ) {
        partyvid( message );
    }
    if( flags.customReward && extra.customRewardId === rewardId ) {
        partyvid( message );
    }
};
ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    if( flags.customReward && extra.customRewardId === "YOUR CUSTOM REWARD ID" ) {
        partyvid( message );
    }
};
ComfyJS.Init( "YOURCHANNELID" );
