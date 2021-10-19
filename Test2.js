var five = require("johnny-five");
var wait = require("wait-for-stuff");
var board = new five.Board({port:"COM3"});

board.on("ready", function() {
  var led = new five.Led(11);
  led.on();
  wait.for.time(3);
  led.off();
  wait.for.time(3);
  led.on();
});

/*
var board = new five.Board("COM3");

board.on("ready", function() {
        var led = new five.Led(13);
        led.on();
        
        
        var led2 = new five.Led(11);
        led2.on();
        // wait 5 seconds and turn LED off 
        board.wait(5000, function(){
                led.off();
            });
          
        
});





var five = require("johnny-five");
var readlineSync = require('readline-sync');
var board = new five.Board({port:"COM3",repl:false});

board.on("ready", function() {
        //wait for users response
        var pinNumber = readlineSync.question('Which light? ');

        var led = new five.Led(pinNumber);
        led.on();

});
*/