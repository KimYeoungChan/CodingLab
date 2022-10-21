// Side Navigation JS Code
// 변수
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");

// 메뉴버튼 함수
menuBtn.onclick = function(){
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  navBar.classList.add("active");
}

// 닫기버튼 함수 
cancelBtn.onclick = function(){
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  navBar.classList.remove("active");
}

// Sticky Naviagation Menu Js Code
let nav = document.querySelector("nav");
let val;

// 스크롤 내리면 배경 채워짐
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
  }else {
    nav.classList.remove("sticky");
  }
}
