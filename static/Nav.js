const nav = document.querySelector(".nav");
const nav_img = document.querySelector(".nav_logo");
const nav_link = document.querySelectorAll(".nav_ul_link");

setInterval(function() {
    if(window.scrollY > 0){
        nav_link[0].style.color = "black";
        nav_link[1].style.color = "black";
        nav_link[2].style.color = "black";
        nav_link[3].style.color = "black";
        nav_img.src = "/static/Media/Logo_Linear.png";
        nav.style.backgroundColor = "#FFFFFF";
        nav.style.boxShadow = "1.5px 1.5px 6px rgb(0,0,0, 0.20)";
    } else {
        nav_link[0].style.color = "white";
        nav_link[1].style.color = "white";
        nav_link[2].style.color = "white";
        nav_link[3].style.color = "white";
        nav_img.src = "/static/Media/Logo.png";
        nav.style.backgroundColor = "";
        nav.style.boxShadow = "";
    }
});