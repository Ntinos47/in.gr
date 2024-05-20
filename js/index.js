$(document).ready(function () {
  var fv = $("#fullview").fullView({
    //Navigation
    dots: true,
    dotsPosition: "right",
    dotsTooltips: true,

    //Scrolling
    easing: "swing",
    backToTop: true,

    // Accessibility
    keyboardScrolling: true,

    // Callback
    onScrollEnd: function (currentView, preView) {
      console.log("Current", currentView);
      console.log("Previus", preView);
    }
  });

  $("#down").click(function () {
    // To Scroll Down 1 Section
    fv.data("fullView").scrollDown();

    // To Scroll Up 1 Section
    // fv.data('fullView').scrollDown();
  });

  $("#select").change(function () {
    // To Scroll to Specfic Section
    fv.data("fullView").scrollTo($(this).val());
  });
});



var section2 = document.getElementById('section2');
var section3 = document.getElementById('section3')

document.getElementById('text1').addEventListener('click', function() {
    section2.style.transform = 'translateX(0)';
});

document.getElementById('text2').addEventListener('click', function() {
    section3.style.transform = 'translateX(0)';
});