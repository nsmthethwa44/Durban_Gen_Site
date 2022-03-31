//toggle ment onclick and menu buttons
let menuImg = document.querySelector(".menuImg");
let header = document.querySelector(".header .container .navbar");
menuImg.onclick = () =>{
  menuImg.classList.toggle("closeImg");
  header.classList.toggle("active");
}

//on window scroll remove toggle classes
let scrollTopY = document.querySelector(".goTop");
window.onscroll = () =>{
  menuImg.classList.remove("closeImg");
  header.classList.remove("active");
  if(window.scrollY > 200){
    scrollTopY.style.display ="block";
  }else{
    scrollTopY.style.display ="none";
  }
  
}

//add active link to a clicked and remove it
let links = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(links).forEach((item, index) =>{
item.onclick = (e) =>{
let currntLink = document.querySelector(".header .container .navbar .nav li a.active");
currntLink.classList.remove("active");
e.target.classList.add("active");
}
})