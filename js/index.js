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
var switch2 = document.getElementById('switch2');
var switch3 = document.getElementById('switch3');
var col1 = document.getElementById('col1');
var col2 = document.getElementById('col2');
var col3 = document.getElementById('col3');


document.getElementById('text1').addEventListener('click', function() {
    section2.style.transform = 'translateX(0)';
    wrapimgfooter2.style.zIndex = '0';
    wraplogo2.style.zIndex = '0';
});
var counter = 1;
document.getElementById('switch2').addEventListener('click', function() {
    if (counter == 1) {
        col1.style.width = '24%';
        col2.style.width = '76%';
        col3.style.width = '0';
        switch2.style.right = '77%';
        switch2.style.transform = 'translate(40%)';
        section2.style.background = 'rgb(126, 0, 0)';

        counter = 2;
        toggleContent(counter);

    } else if (counter == 2) {
        col1.style.width = '34%';
        col2.style.width = '48%';
        col3.style.width = '18%';
        switch2.style.right = '17%';
        switch2.style.transform = 'translate(30%)';
        
        counter = 1;
        toggleContent(counter);
    }
});

function toggleContent(counter) {

    var div1 = document.getElementById("col1");
    var newDiv1 = document.getElementById("colReplace1");
    var div2 = document.getElementById("col2");
    var newDiv2 = document.getElementById("colReplace2");
    var div3 = document.getElementById("col3");
    var newDiv3 = document.getElementById("colReplace3");

    if (counter == 2) {
        // Store original content temporarily
        var temp1 = div1.innerHTML;
        var temp2 = div2.innerHTML;
        var temp3 = div3.innerHTML;

        // Replace with new content
        div1.innerHTML = newDiv1.innerHTML;
        div2.innerHTML = newDiv2.innerHTML;
        div3.innerHTML = newDiv3.innerHTML;

        // Update replacements with the original content
        newDiv1.innerHTML = temp1;
        newDiv2.innerHTML = temp2;
        newDiv3.innerHTML = temp3;
    } else if (counter == 1) {
        // Store swapped content temporarily
        var temp1 = newDiv1.innerHTML;
        var temp2 = newDiv2.innerHTML;
        var temp3 = newDiv3.innerHTML;

        // Replace with original content
        newDiv1.innerHTML = div1.innerHTML;
        newDiv2.innerHTML = div2.innerHTML;
        newDiv3.innerHTML = div3.innerHTML;

        // Update original divs with swapped content
        div1.innerHTML = temp1;
        div2.innerHTML = temp2;
        div3.innerHTML = temp3;
    }
}

var colu1 = document.getElementById('col1-2');
var colu2 = document.getElementById('col2-2');
var colu3 = document.getElementById('col3-2');

document.getElementById('text2').addEventListener('click', function() {
    section3.style.transform = 'translateX(0)';
    wrapimgfooter2.style.zIndex = '0';
    wraplogo2.style.zIndex = '0';
    switch3.style.left = '17%';
    switch3.style.transform = 'translate(45%)';
});

