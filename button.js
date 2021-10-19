var five = require("johnny-five");

var board = new five.Board({port:"COM3"});

board.on("ready", function() {

  //Create a new button
  var myButton = new five.Button(2);

  myButton.on("hold", function() {
    console.log( "Button held" );
  });

  myButton.on("press", function() {
    console.log( "Button pressed" );
  });

  //myButton.on("release", function() {
    //console.log( "Button released" );
  //});
});
