
/* clear items on start */
$( ".scene-item.pants, .scene-item.cape, .scene-item.head, .scene-item.left, .scene-item.right" ).removeAttr('id');

$( ".nav>div" ).click(function() {
  var currentClass = $(this).attr("class");
  var iconId = $(this).attr("id");
  var itemId = $(this).attr("id").replace("icon-", "");

  var iconObj = $(this);
  var iconObjs = $(this).attr("class");
  var itemObj = $(".scene-item." + currentClass);


  if (itemObj.attr("id") == itemId) {
      // item id is same - item already equiped - need to unequip item
      itemObj.removeAttr('id');
      iconObj.removeAttr('equiped');
  } else {
      // item id is NOT same - need to equip item
      itemObj.removeAttr('id');
      itemObj.attr('id', itemId );
      $('.' + iconObjs).removeAttr('equiped');
      iconObj.attr('equiped', 'equiped');
  }

});

/* click sound */
var fxClick = new Audio("./media/sfx-equip.mp3");

$('.nav img').mouseup(function() {
    //play the sound:
    fxClick.volume = 0.4;
    fxClick.play();
    //re-cue it to the beginning (so that you can play it again):
    setTimeout(
      function(){
        fxClick.currentTime=0;
      }, 10);
    });
