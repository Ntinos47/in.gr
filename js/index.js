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
        fv.data('fullView').scrollDown();
    });

    $("#select").change(function () {
        // To Scroll to Specfic Section
        fv.data("fullView").scrollTo($(this).val());
    });
});



var section2 = document.getElementById('section2');
var section3 = document.getElementById('section3');
var wrapimgfooter2 = document.getElementById('wrapimgfooter2');
var wraplogo2 = document.getElementById('wraplogo2');
var switch2 = document.getElementById('switch2')
var col1 = document.getElementById('col1');
var col2 = document.getElementById('col2');
var col3 = document.getElementById('col3');


document.getElementById('text1').addEventListener('click', function() {
    section2.style.transform = 'translateX(0)';
    wrapimgfooter2.style.zIndex = '0';
    wraplogo2.style.zIndex = '0';
});

document.getElementById('text2').addEventListener('click', function() {
    section3.style.transform = 'translateX(0)';
});


document.getElementById('switch2').addEventListener('click', function() {
    col1.style.width = '25%';
    col2.style.width = '75%';
    col3.style.width = '0';
    switch2.style.right = '74%';
    switch2.style.transform = 'translate(35%)';


    document.getElementById('switch2').id = 'switch3';
});




function toggleContent() {

    var div = document.getElementById("col1");
    var newDiv = document.getElementById("colReplace1");

    if (div.innerHTML === div.innerHTML) {
        div.innerHTML = newDiv.innerHTML;
    }
    /*if (newDiv.innerHTML === newDiv.innerHTML) {
        newDiv.innerHTML = div.innerHTML;
    }*/

    var div = document.getElementById("col2");
    var newDiv = document.getElementById("colReplace2");

    if (div.innerHTML === div.innerHTML) {
        div.innerHTML = newDiv.innerHTML;
    }
    /*if (newDiv.innerHTML === newDiv.innerHTML) {
        newDiv.innerHTML = div.innerHTML;
    }*/
    
    var div = document.getElementById("col3");
    var newDiv = document.getElementById("Replace");

    if (div.innerHTML === div.innerHTML) {
        div.innerHTML = newDiv.innerHTML;
    }
    /*if (newDiv.innerHTML === newDiv.innerHTML) {
        newDiv.innerHTML = div.innerHTML;
    }*/
}