var seconds  = 10, //Number Of Seconds
    
    countDiv = document.getElementById('countdown'),
    
    secondPass,
    
    countDown = setInterval(function () {
        
        "use strict";
        
        secondPass();
        
    }, 1000);

function secondPass() {
    
    "use strict";
    
    var minutes = Math.floor(seconds / 60),
        
        remSeconds = seconds % 60;
    
    if (seconds < 10) {
        
        remSeconds = "0" + remSeconds
    }
    
    countDiv.innerHTML = minutes + ":" + remSeconds;
    
    if (seconds > 0) {
        seconds = seconds - 1 // Decrease One Second Every 1000 Millsecond
        
    } else {
        clearInterval(countDown) // Stop Countdown Timer
        
        countDiv.innerHTML = "Done";
    }
}