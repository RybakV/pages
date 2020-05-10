
/*  mobile menu toggle */
$('.menu-btn').on('click', function(){
  if($(this).parents('body').is('.opened-menu') !== true) {
    $('body').addClass('opened-menu');
    $('.menu').addClass('opened');
  }
  else if($(this).parents('body').is('.opened-menu') === true){
    $('body').removeClass('opened-menu');
    $('.menu').removeClass('opened');
  }
});

 /* Scroll to top */
 $('#scrollTop').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 1000);
});

// Anchor scrolls
$(document).on('click', 'a.anchor', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

/* Floating Box */
/* Common box status - visible */
if (!(localStorage.getItem('popupStatus'))) {
        localStorage.setItem('popupStatus', 'visible');
    }
/* Close click event */
$( document ).ready(function() {
    $("#floating_box_close").on("click", function() {
        console.log("closed!");
        localStorage.setItem('popupStatus', 'closed');
        $('#floating_box').hide();
    });
});
/* Hide box if it was closed previously */
if (localStorage.getItem('popupStatus') === 'closed') {
        $('#floating_box').hide();
    }

/* Show box if it was enabled previously */
if (localStorage.getItem('popupStatus') === 'visible') {
        jQuery('#floating_box').show();
    }
/*uncomment this line to show the box again*/
/*jQuery('#floating_box').show();*/

/* MODAL FORM */
$('.modal-form-toggle').on('click', function(e) {
  e.preventDefault();
  $('.modal').toggleClass('is-visible');
});

/* ACCORDION */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}
