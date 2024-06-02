function change(x){
    x.classList.toggle("change");

    const words = document.getElementsByClassName('words')
    
    words[0].classList.toggle("active")
    words[1].classList.toggle("active")
    words[2].classList.toggle("active")
    words[3].classList.toggle("active")

    const header = document.getElementsByClassName('header')[0]
    header.classList.toggle("active")
}

const sliders = {
    crs: document.querySelector(".crs"),
    arabsat: document.querySelector(".arabsat"),
    starlink: document.querySelector(".starlink"),
    sxm: document.querySelector(".sxm"),
};

const buttons = {
    prev: document.querySelector(".prev"),
    next: document.querySelector(".next"),
};

buttons.next.addEventListener("click", () => swapImages("right"));
buttons.prev.addEventListener("click", () => swapImages("left"));


var idx = 0;

var circles = document.querySelectorAll(".circle");

var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");
var scroll = document.getElementById("scroll");

text1.style.color="white";
circles[2].style.backgroundColor="white";

text1.addEventListener("click", () => swapSlides("crs"));
text2.addEventListener("click", () => swapSlides("arabsat"));
text3.addEventListener("click", () => swapSlides("starlink"));
text4.addEventListener("click", () => swapSlides("sxm"));

var now = 2;

function swapSlides(slide){
    var slide = slide;

    now=2;
    circles[0].style.backgroundColor="black";
    circles[1].style.backgroundColor="black";
    circles[2].style.backgroundColor="white";
    circles[3].style.backgroundColor="black";
    circles[4].style.backgroundColor="black";

    if(slide == "crs"){
        idx=0;

        text1.style.color="white";
        text2.style.color="gray";
        text3.style.color="gray";
        text4.style.color="gray";

        sliders.crs.style.transform="translateX(0vw)";
        sliders.arabsat.style.transform="translateX(102vw)";
        sliders.starlink.style.transform="translateX(204vw)";
        sliders.sxm.style.transform="translateX(306vw)";
    }
    else if(slide == "arabsat"){
        idx=1;

        text1.style.color="gray";
        text2.style.color="white";
        text3.style.color="gray";
        text4.style.color="gray";

        sliders.crs.style.transform="translateX(-102vw)";
        sliders.arabsat.style.transform="translateX(-102vw)";
        sliders.starlink.style.transform="translateX(-102vw)";
        sliders.sxm.style.transform="translateX(-102vw)";
    }
    else if(slide == "starlink"){
        idx=2;

        text1.style.color="gray";
        text2.style.color="gray";
        text3.style.color="white";
        text4.style.color="gray";

        sliders.crs.style.transform="translateX(-204vw)";
        sliders.arabsat.style.transform="translateX(-204vw)";
        sliders.starlink.style.transform="translateX(-204vw)";
        sliders.sxm.style.transform="translateX(-204vw)";
    }
    else if(slide == "sxm"){
        idx=3;

        text1.style.color="gray";
        text2.style.color="gray";
        text3.style.color="gray";
        text4.style.color="white";

        sliders.crs.style.transform="translateX(-306vw)";
        sliders.arabsat.style.transform="translateX(-306vw)";
        sliders.starlink.style.transform="translateX(-306vw)";
        sliders.sxm.style.transform="translateX(-306vw)";
    }
}


function swapImages(direction){
    var direction = direction;
    var img1 = document.querySelectorAll(".image1");
    var img2 = document.querySelectorAll(".image2");
    var img3 = document.querySelectorAll(".image3");
    var img4 = document.querySelectorAll(".image4");
    var img5 = document.querySelectorAll(".image5");



    if(direction == "right"){
        var tempsrc = img1[idx].src;
        img1[idx].src = img2[idx].src;
        img2[idx].src = img3[idx].src;
        img3[idx].src = img4[idx].src;
        img4[idx].src = img5[idx].src;
        img5[idx].src = tempsrc;

        circles[now].style.backgroundColor="black";
        now+=1;
        if(now>=circles.length) now=0;
        circles[now].style.backgroundColor="white";
    }

    if(direction == "left"){
        var tempsrc = img1[idx].src;
        img1[idx].src = img5[idx].src;
        img5[idx].src = img4[idx].src;
        img4[idx].src = img3[idx].src;
        img3[idx].src = img2[idx].src;
        img2[idx].src = tempsrc;

        circles[now].style.backgroundColor="black";
        now-=1;
        if(now<0) now=4;
        circles[now].style.backgroundColor="white";
    }
}

