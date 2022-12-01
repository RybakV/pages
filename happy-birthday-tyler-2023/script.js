// counter
// function timer(){
// let seconds = 0;
// let counter = document.getElementById('seconds-counter');


// function incrementSeconds() {
//     seconds += 1;
//     counter.innerText = "Time " + seconds;
// }
// var cancel = setInterval(incrementSeconds, 20);
// }

// gifts array
let giftsUrls = [
   './cg-gift-1.png',
   './cg-gift-2.png',
   './cg-gift-3.png',
   './cg-gift-4.png',
   './cg-gift-5.png',
   './cg-gift-6.png',
];

// random number function
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
// start game
$('#btn-start').on( "click", function() {
   console.log('start click!');
  $('#start-overlay').hide();
  runGame();
});



function runGame(){
   // move player
   let scene = $('#scene'),
       player = $('#player'),
       maxValue = scene.width() - player.width(),
       keysPressed = {},
       distancePerIteration = 5;

   function calculateNewValue(oldValue, keyCode1, keyCode2) {
       let newValue = parseInt(oldValue, 10)
                      - (keysPressed[keyCode1] ? distancePerIteration : 0)
                      + (keysPressed[keyCode2] ? distancePerIteration : 0);
       return newValue < 0 ? 0 : newValue > maxValue ? maxValue : newValue;
   }

   $(window).keydown(function(event) { keysPressed[event.which] = true; });
   $(window).keyup(function(event) { keysPressed[event.which] = false; });



   setInterval(function() {
       player.css({
           left: function(index ,oldValue) {
               return calculateNewValue(oldValue, 37, 39);
           }
       });
   }, 20);
   
   //falling items
      let item = $('#item');
      let totalPoints = 0;
      item.css('left', randomIntFromInterval(0, 450));

   setInterval(function() {
     
      // if item dropped on the ground
      if ( parseInt(item.css('top'), 10) >= 450 ) {
         clearInterval();
         $('#lose-overlay').show();
      }
      // if catch item
      else if ( parseInt(item.css('top'), 10) >= 420 && (parseInt(player.css('left'), 10) - 33) <= (parseInt(item.css('left'), 10)) && (parseInt(player.css('left'), 10) + 33) >= (parseInt(item.css('left'), 10))) {
         item.css({
           top: -50,
           left: randomIntFromInterval(0, 450),
           background: 'url('+ giftsUrls[randomIntFromInterval(0, 5)] +')'
         });
         totalPoints++;
         $('#points-counter').html(totalPoints);
      }
      // qin condition
      else if (totalPoints >= 10 ){
         clearInterval();
         $('#win-overlay').show();
      }
      // else just fall
      else {
       item.css({
           top: parseInt(item.css('top'), 10) + distancePerIteration
       });
      }
      
      //check char direction
      $(window).keydown(function(evt) {
         if (evt.which == 37) { // ctrl
           player.css('transform', 'scaleX(-1)');
         }
         if (evt.which == 39) { // ctrl
           player.css('transform', 'scaleX(1)');
         }
      });

   }, 20);
}// End runGame func

//restart game
$('#btn-restart').on( "click", function() {
   console.log('restart click!');
  $('#lose-overlay').hide();
  $('#item').css({
      top: -50,
      left: randomIntFromInterval(0, 450)
   });
  runGame();
});