var ourInput = document.getElementById('ourinput');

ourInput.onfocus = function() {
    
    "use strict";
    
    if (this.placeholder === "Type Your Name") {
        
        this.placeholder = '';
    }
};

ourInput.onblur = function() {
    
    "use strict";
    
    if (this.placeholder === "") {
        
        this.placeholder = "Type Your Name";
    }      
};