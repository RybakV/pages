
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
