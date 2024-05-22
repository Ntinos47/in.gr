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
    col1.style.width = '30%';
    col2.style.width = '70%';
    col3.style.width = '0';
});


function toggleContent1() {

    var div = document.getElementById("col1");
    var newDiv = document.getElementById("colReplace1");


    // Check if myDiv currently displays original content
    if (div.innerHTML === div) {
        // Change the content of myDiv to newContent's content
        div.innerHTML = newDiv.innerHTML;
    } else {
        // Change the content of myDiv back to original content
        div.innerHTML = newDiv;
    }
}
function toggleContent2() {

    var div = document.getElementById("col2");
    var newDiv = document.getElementById("colReplace2");


    // Check if myDiv currently displays original content
    if (div.innerHTML === div) {
        // Change the content of myDiv to newContent's content
        div.innerHTML = newDiv.innerHTML;
    } else {
        // Change the content of myDiv back to original content
        div.innerHTML = newDiv;
    }
}
function toggleContent3() {

    var div = document.getElementById("col3");
    var newDiv = document.getElementById("colReplace3");


    // Check if myDiv currently displays original content
    if (div.innerHTML === div) {
        // Change the content of myDiv to newContent's content
        div.innerHTML = newDiv.innerHTML;
    } else {
        // Change the content of myDiv back to original content
        div.innerHTML = newDiv;
    }
}