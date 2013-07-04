requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "main": "../app/main",
      "jquery" : "jquery",
      "game" : "game",
      "clock" : "clock",
      "bindingUtil" : "bindingUtil",
      "eventDispatcher" : "eventDispatcher"
    }
    
});

// Load the main app module to start the app
require(["main"]);