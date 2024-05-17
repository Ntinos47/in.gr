<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>In.gr</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* styles.css */
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

#fullview {
    width: 100%;
    overflow: hidden;
}

.wrap-page {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    transition: transform 0.5s ease;
}

#section2 {
    transform: translateX(-100%);
    background-color: rgb(214, 42, 42);
}
#section3{
    transform: translateX(100%);
    background-color: aqua;
}

.wrap-content {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
}

.wrap-content-items, .wrap-content-items2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.wrap-logo, .wrap-logo2 {
    flex: 1;
}

.wrap-logo img {
    width: 150px;
}

.wrap-text, .wrap-text2 {
    flex: 2;
    text-align: center;
}

.wrap-text .p1, .wrap-text .p2, .wrap-text2 .text1 p, .wrap-text2 .text2 p {
    margin: 10px 0;
}

.p1-wrap {
    font-size: 36px;
    font-weight: bold;
}

.p2-wrap {
    font-size: 24px;
    color: #555;
}

.mouse-img {
    margin-top: 20px;
}

.mouse-icon img {
    width: 30px;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-20px);
    }
    60% {
        transform: translateY(-10px);
    }
}

.wrap-img-footer, .wrap-img-footer2 {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inner-img img, .inner-img2 img {
    width: 100px;
}

.wrap-img {
    display: flex;
    justify-content: space-between;
}

.wrap-img .img1, .wrap-img .img2 {
    width: 48%;
}

.wrap-img .img1 img, .wrap-img .img2 img {
    width: 100%;
    border-radius: 10px;
}

.wrap-text2 .text1 p, .wrap-text2 .text2 p {
    font-size: 24px;
    color: #333;
    margin: 20px 0;
}

.wrap-text2 .button {
    margin: 20px 0;
}

.wrap-text2 .button img {
    width: 50px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .wrap-content {
        width: 90%;
    }
    
    .wrap-content-items, .wrap-content-items2 {
        flex-direction: column;
        align-items: center;
    }

    .wrap-logo, .wrap-logo2, .wrap-img-footer, .wrap-img-footer2 {
        margin-bottom: 20px;
    }

    .wrap-img {
        flex-direction: column;
    }

    .wrap-img .img1, .wrap-img .img2 {
        width: 100%;
        margin-bottom: 20px;
    }
}

    </style>
</head>
<body>
    <div id="fullview">
        <div id="section1" class="wrap-page">
            <div class="wrap-content">
                <div class="wrap-content-items">
                    <div class="wrap-logo">
                        <img src="imgs/In.gr_logo.png" alt="logo">
                    </div>
                    <div class="wrap-text">
                        <div class="text">
                            <div class="p1-wrap">
                                <p class="p1">TOGETHER</p>
                                <p class="p1">WE MAKE</p>
                                <p class="p1">A DIFFERENCE</p>
                            </div>
                            <div class="p2-wrap">
                                <p class="p2">Πόσο μεγάλες είναι οι μικρές αλλαγές;</p>
                                <p class="p2">Πώς μπορούμε όλοι μαζί</p>
                                <p class="p2">να αλλάξοθμε τον κόσμο;</p>
                            </div>
                            <div class="mouse-img">
                                <div class="mouse-icon">
                                    <img src="imgs/mouse.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wrap-img-footer">
                        <div class="inner-img">
                            <img src="imgs/coca-cola.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="wrap-img">
                    <div class="img1">
                        <img src="imgs/plants.jpg" alt="plants" id="img1">
                    </div>
                    <div class="img2">
                        <img src="imgs/woods.jpeg" alt="woods" id="img2">
                    </div>
                </div>
                
            </div>
        </div>
        <div id="section2" class="wrap-page">
            <div class="wrap-content">
                <div class="wrap-content-items2">
                    <div class="wrap-logo2">
                        <img src="imgs/In.gr_logo.png" alt="logo">
                    </div>
                    <div class="wrap-img-footer2">
                        <div class="inner-img2">
                            <img src="imgs/coca-cola.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="wrap-img">
                    <div class="img1">
                        <img src="imgs/plants.jpg" alt="plants">
                    </div>
                    <div class="img2">
                        <img src="imgs/woods.jpeg" alt="woods">
                    </div>
                </div>
                <div class="wrap-text2">
                    <div class="wrap-content2">
                        <div class="text1">
                            <p>Ο "ΧΑΡΤΗΣ" ΜΙΑΣ ΒΙΩΣΙΜΗΣ ΕΛΛΑΔΑΣ</p>
                        </div>
                        <div class="button">
                            <img class="switch_mob" src="imgs/switch.png" alt="">
                        </div>
                        <div class="text2">
                            <p>ΟΙ ΜΕΓΑΛΕΣ "ΜΙΚΡΕΣ" ΜΑΣ ΑΛΛΑΓΕΣ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="section3" class="wrap-page">
            <div class="wrap-content">
                <div class="wrap-content-items2">
                    <div class="wrap-logo2">
                        <img src="imgs/In.gr_logo.png" alt="logo">
                    </div>
                    <div class="wrap-img-footer2">
                        <div class="inner-img2">
                            <img src="imgs/coca-cola.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="wrap-img">
                    <div class="img1">
                        <img src="imgs/plants.jpg" alt="plants">
                    </div>
                    <div class="img2">
                        <img src="imgs/woods.jpeg" alt="woods">
                    </div>
                </div>
                <div class="wrap-text2">
                    <div class="wrap-content2">
                        <div class="text1">
                            <p>Ο "ΧΑΡΤΗΣ" ΜΙΑΣ ΒΙΩΣΙΜΗΣ ΕΛΛΑΔΑΣ</p>
                        </div>
                        <div class="button">
                            <img class="switch_mob" src="imgs/switch.png" alt="">
                        </div>
                        <div class="text2">
                            <p>ΟΙ ΜΕΓΑΛΕΣ "ΜΙΚΡΕΣ" ΜΑΣ ΑΛΛΑΓΕΣ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        var section2 = document.getElementById('section2');
        var section3 = document.getElementById('section3')

        document.getElementById('img1').addEventListener('click', function() {
            section2.style.transform = 'translateX(0)';
        });

        document.getElementById('img2').addEventListener('click', function() {
            section3.style.transform = 'translateX(0)';
        });

    </script>
</body>
</html>
