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
        section2.style.background = ' rgb(195, 0, 0)';

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
    var div2 = document.getElementById("col2");
    var div3 = document.getElementById("col3");
    var newDiv1 = document.getElementById("colReplace1");
    var newDiv2 = document.getElementById("colReplace2");
    var newDiv3 = document.getElementById("colReplace3");

    if (counter == 2) {
        var temp1 = div1.innerHTML;
        var temp2 = div2.innerHTML;
        var temp3 = div3.innerHTML;

        div1.innerHTML = newDiv1.innerHTML;
        div2.innerHTML = newDiv2.innerHTML;
        div3.innerHTML = newDiv3.innerHTML;

        newDiv1.innerHTML = temp1;
        newDiv2.innerHTML = temp2;
        newDiv3.innerHTML = temp3;
    } else if (counter == 1) {
        var temp1 = newDiv1.innerHTML;
        var temp2 = newDiv2.innerHTML;
        var temp3 = newDiv3.innerHTML;

        newDiv1.innerHTML = div1.innerHTML;
        newDiv2.innerHTML = div2.innerHTML;
        newDiv3.innerHTML = div3.innerHTML;

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
});
var count = 1;
document.getElementById('switch3').addEventListener('click', function() {
    if (count == 1) {
        colu1.style.width = '34%';
        colu2.style.width = '48%';
        colu3.style.width = '18%';
        switch3.style.right = '17%';
        switch3.style.transform = 'translate(30%)';

        count = 2;
        toggleContent1(count);
        
    } else if (count == 2) {
        colu1.style.width = '24%';
        colu2.style.width = '76%';
        colu3.style.width = '0';
        switch3.style.right = '75%';
        switch3.style.transform = 'translate(30%)';

        count = 1;
        toggleContent1(count);
    }
});

function toggleContent1(count) {

    var Div1 = document.getElementById("col1-2");
    var Div2 = document.getElementById("col2-2");
    var Div3 = document.getElementById("col3-2");
    var newDiv1 = document.getElementById("recol-1");
    var newDiv2 = document.getElementById("recol-2");
    var newDiv3 = document.getElementById("recol-3");

    if (count == 2) {
        var temp1 = Div1.innerHTML;
        var temp2 = Div2.innerHTML;
        var temp3 = Div3.innerHTML;

        Div1.innerHTML = newDiv1.innerHTML;
        Div2.innerHTML = newDiv2.innerHTML;
        Div3.innerHTML = newDiv3.innerHTML;

        newDiv1.innerHTML = temp1;
        newDiv2.innerHTML = temp2;
        newDiv3.innerHTML = temp3;
    } else if (count == 1) {
        var temp1 = newDiv1.innerHTML;
        var temp2 = newDiv2.innerHTML;
        var temp3 = newDiv3.innerHTML;

        newDiv1.innerHTML = Div1.innerHTML;
        newDiv2.innerHTML = Div2.innerHTML;
        newDiv3.innerHTML = Div3.innerHTML;

        Div1.innerHTML = temp1;
        Div2.innerHTML = temp2;
        Div3.innerHTML = temp3;
    }
}

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }
        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });
    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }
    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }
    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);