requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "main2": "../app/main2",
      "jquery" : "jquery",
      "game" : "game",
      "clock" : "clock",
      "bindingUtil" : "bindingUtil",
      "eventDispatcher" : "eventDispatcher"
    }
    
});

// Load the main app module to start the app
require(["main2"]);