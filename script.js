var smallimg = document.getElementById("smallimg");

var website = document.getElementsByClassName("website")[0].addEventListener("click",()=>{
    smallimg.src = "images/img1.png";
});

var mobile = document.getElementsByClassName("mobile")[0].addEventListener("click",()=>{
    smallimg.src = "images/img2.png";
});

var marketing = document.getElementsByClassName("marketing")[0].addEventListener("click",()=>{
    smallimg.src = "images/img3.png";
});

var software = document.getElementsByClassName("software")[0].addEventListener("click",()=>{
    smallimg.src = "images/img4.png";
});


var img_box = document.getElementById("img_box");
var menu_icon = document.getElementById("btn_icon");

function imagesize() {
    if(img_box.className == "small"){
        img_box.className = "full";
        menu_icon.innerHTML =  "&#9776;";
        smallimg.style.height = "100vh";
    }else{
        img_box.className = "small";
        menu_icon.innerHTML =  "&#10006;";
        smallimg.style.height = "100%";
     }
}