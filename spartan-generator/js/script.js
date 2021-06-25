
/* unequip items on start */
$( ".scene-item.pants, .scene-item.cape, .scene-item.head, .scene-item.left, .scene-item.right" ).removeAttr('id');

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

/* Equiped attack and defence counter */
$( ".nav>div" ).click(function() {
  var equipedAttack = 0;
  var iconAttack = 0;
  var equipedDefence = 0;
  var iconDefence = 0;
  var equipedLeadership = 0;
  var iconLeadership = 0;

  /* Calculate attack and defence summ */
  $('[equiped]').each(function() {
    // get attack attribute
    var attrAttack = $(this).attr("attack");
    iconAttack = parseInt(attrAttack);
    //check if icon has any attack
    if ($.isNumeric(attrAttack)) {
      //attrAttack is numeric - adding icon atack to the equiped attack
      equipedAttack = equipedAttack + iconAttack;
    }
    else {
      iconAttack = 0;
    }
    // get Defence attribute
    var attrDefence = $(this).attr("defence");
    iconDefence = parseInt(attrDefence);
    //check if icon has any Defence
    if ($.isNumeric(attrDefence)) {
      //attr Defence is numeric - adding icon atack to the equiped Defence
      equipedDefence = equipedDefence + iconDefence;
    }
    else {
      iconAttack = 0;
    }

    // get Leadership attribute
    var attrLeadership = $(this).attr("leadership");
    iconLeadership = parseInt(attrLeadership);
    //check if icon has any Leadership
    if ($.isNumeric(attrLeadership)) {
      //attr Leadership is numeric - adding icon atack to the equiped Leadership
      equipedLeadership = equipedLeadership + iconLeadership;
    }
    else {
      iconAttack = 0;
    }
  });

  $(".total-attack").text(equipedAttack);
  $(".total-defence").text(equipedDefence);
  $(".total-leadership").text(equipedLeadership);
});

/* Icon hover Stats tooltip */
$('.nav>div').mouseover(function(){
  var attrAttack = $(this).attr('attack');
  var attrDefence = $(this).attr('defence');
  var attrLeadership = $(this).attr('leadership');

  // check if we have attack attribute - then create the tooltip wrap
  if ((typeof attrAttack !== 'undefined' && attrAttack !== false) || (typeof attrDefence !== 'undefined' && attrDefence !== false) || (typeof attrLeadership !== 'undefined' && attrDefence !== false)) {
    $(this).append("<div class='tooltip'></div>");
  }
  if (typeof attrAttack !== 'undefined' && attrAttack !== false) {
    $(this).children('.tooltip').append('<span class="tool-atk">' + $(this).attr('attack') + '</span>');
  }
  if (typeof attrDefence !== 'undefined' && attrDefence !== false) {
    $(this).children('.tooltip').append('<span class="tool-def">' + $(this).attr('defence') + '</span>');
  }
  if (typeof attrLeadership !== 'undefined' && attrLeadership !== false) {
    $(this).children('.tooltip').append('<span class="tool-lead">' + $(this).attr('leadership') + '</span>');
  }


});
$('.nav>div').mouseout(function(){
  $(this).children('.tooltip').remove();
});


/* click sound effect */
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
