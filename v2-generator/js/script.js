
/* unequip items on start */
//$( ".scene-item.pants, .scene-item.cape, .scene-item.head, .scene-item.left, .scene-item.right" ).removeAttr('id');

$( ".nav>div" ).click(function() {
  var currentClass = $(this).attr("class");
  var iconId = $(this).attr("id");
  var itemId = $(this).attr("id").replace("icon-", "");

  var iconObj = $(this);
  var iconObjs = $(this).attr("class");
  var itemObj = $(".scene-item." + currentClass);

  // item id is same - item already equiped - need to unequip item
  if (itemObj.attr("id") == itemId) {

      // if item has no 'required' class - then unequip it
      if (!itemObj.hasClass("required")) {
        itemObj.removeAttr('id');
        iconObj.removeAttr('equiped');
      }
  } else {
      // item id is NOT same - equipping the item
      itemObj.removeAttr('id');
      itemObj.attr('id', itemId );
      $('.' + iconObjs).removeAttr('equiped');
      iconObj.attr('equiped', 'equiped');
  }
});

/* Icon hover tooltip */
$('.nav>div').mouseover(function(){
  var attrAlt = $(this).children().attr('alt');
  $(this).append('<div class="tooltip"><span class="tool-atk">' + attrAlt + '</span></div>');

});
$('.nav>div').mouseout(function(){
  $(this).children('.tooltip').remove();
});


/* ******* randomizer button ******* */

function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

$( "#randomizer" ).click(function() {
  var allTraitClasses = ['bg', 'body', 'eyewear', 'headwear', 'footwear', 'pants', 'lefthand', 'righthand', 'torso'];

  for (i = 0; i < allTraitClasses.length; i++) {
    //console.log('.nav ' + allTraitClasses[i]);
    oneItemClass = allTraitClasses[i];
    $('.nav .' + oneItemClass).removeAttr('equiped');

    //chose random items
    var $all = $('.nav .' + oneItemClass);
    var iconItem  = $(shuffle($all).slice(0, 1));
    $(iconItem).attr('equiped', 'equiped');
    iconItemId = $(iconItem).attr('id').replace("icon-", "");

    sceneItem = $('.scene-item.' + oneItemClass);
    sceneItem.removeAttr('id');
    sceneItem.attr('id', iconItemId );

  }

});
/* ******* END randomizer button ******* */
