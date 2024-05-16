<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>In.gr</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet">


    <script  src="https://code.jquery.com/jquery-3.5.1.min.js"  crossorigin="anonymous"></script>
    <script type="text/javascript" src="./js/fullview.js"></script>


    <style>
        body, html {
    margin: 0;
    padding: 0;
    height: 100%;
}
html {
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    overflow-y: hidden;
    height: 100%;
}


.wrap-page {
    display: flex;
    width: 100%;
    height: 100vh;
}

.wrap-img {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
}

.img1, .img2 {
    width: 50%;
    height: 100%;
    overflow: hidden;
}

.img1 img, .img2 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.wrap-logo {
    position: absolute;
    top: 3%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}
.wrap-logo img {
    max-width: 90px;
    height: auto;
}

.wrap-text {
    position: absolute;
    top: 25vh;
    left: 50%;
    transform: translate(-50%);
    z-index: 1;
    color: white;
}
.p1-wrap, .p2-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.p1-wrap {
    margin-bottom: 40px;
}
.p2-wrap {
    margin-bottom: 20px;
}
.p1 {
    font-size: 35px;
    margin-bottom: -30px;
    font-family: 'Manrope';
    letter-spacing: 0.5cap;
}
.p2 {
    margin-bottom: -10px;
    font-size: 18px;
    font-family: 'Manrope';
    display: flex;
}

.mouse-img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}
.mouse-icon img {
    max-width: 80px;
    height: auto;
}

.wrap-img-footer {
    position: absolute;
    top: 85vh;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}
.inner-img img {
    max-width: 300px;
    height: auto;
}

/*****************************************/

.wrap-logo2 {
    position: absolute;
    top: 52vh;
    left: 50%;
    transform: translate(-50%);
    z-index: 1;
}
.wrap-logo2 img {
    max-width: 90px;
    height: auto;
}
.wrap-img-footer2 {
    position: absolute;
    top: 185vh;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}
.inner-img2 img {
    max-width: 300px;
    height: auto;
}



.wrap-text2 {
    position: absolute;
    top: 140vh;
    left: 50%;
    transform: translate(-50%);
    z-index: 1;
    color: white;
}
.wrap-content2 {
    width: 1100px;
    display: flex;
    justify-content: space-between;
}
.text1, .text2 {
    max-width: 200px;
    font-family: "Manrope";
    letter-spacing: 0.2cap;
    text-align: center;
    font-size: 20px;
}
.switch_mob {
    width: 100px;
    height: auto;
}
.button {
    height: 150px;
    width: 100px;
}


#fv-dots {
    position: fixed;
    top: 50%;
    left: 96%;
    transform: translate(-50%, -50%);
}

#fv-dots ul {
    display: block;
    list-style: none;
}

#fv-dots ul li {
    padding: 10px;
}

#fv-dots ul li a {
    display: block;
    margin: auto;
    width: 10px;
    height: 10px;
    text-align: center;
}

#fv-dots ul li a span {
    display: block;
    z-index: 1;
    cursor: pointer;
    text-decoration: none;
    background-color: #888888;
    border-radius: 50%;
    margin: 0 auto;
    width: 7px;
    height: 7px;
    transition: 0.1s ease all;
}


#fv-dots ul a.active span {
    width: 9px;
    height: 9px;
    background-color: #bdbdbd;
}

#fv-dots ul a:hover span {
    width: 9px;
    height: 9px;
}




@media (max-width: 1100px) {
    .wrap-content2 {
        width: 800px;
    }
}
@media (max-width: 800px) {
    .wrap-content2 {
        width: 600px;
    }
}
@media (max-width: 600px) {
    .wrap-content2 {
        width: 400px;
    }
}

    </style>
</head>
<body>
    <div id="fullview">
        <div id="section2" class="wrap-page">
            <div class="wrap-content">
                
                <div class="wrap-content-items2">
                    <div class="wrap-logo2">
                        <div class="wrap-logo2">
                            <img src="imgs/In.gr_logo.png" alt="logo">
                        </div>
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
</body>
</html>
