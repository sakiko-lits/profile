// mainview 星空の動き
window.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelector("#mainview");

  const createStar = () => {
    const starEl = document.createElement("span");
    starEl.className = "star";
    const minSize = 1;
    const maxSize = 2;
    const size = Math.random() * (maxSize - minSize) + minSize;
    starEl.style.width = `${size}px`;
    starEl.style.height = `${size}px`;
    starEl.style.left = `${Math.random() * 100}%`;
    starEl.style.top = `${Math.random() * 100}%`;
    starEl.style.animationDelay = `${Math.random() * 10}s`;
    stars.appendChild(starEl);
  };

  for (let i = 0; i <= 500; i++) {
    createStar();
  }
});

// タイピングアニメーション
$('#js-target').t({
  speed: 60,
  blink: true
});

// スキルバーのアニメーション
let skillbar = document.querySelectorAll('.skill-bar');
skillbar.forEach(function(fadeIn) {
  let windowHeight = window.innerHeight;
  
  window.addEventListener('scroll', function() {
    let offset = fadeIn.getBoundingClientRect().top;
    let scroll = window.scrollY;
    
    if(scroll > offset - windowHeight + 500){
      fadeIn.classList.add('is-scrollIn');
    }
  })
});

// メニューバーの固定
let nav = document.querySelector('#nav');
let windowHeight = window.innerHeight;
window.addEventListener('scroll', function() {
  let offset = nav.getBoundingClientRect().top;
  let scroll = window.scrollY;
  
  if(scroll > offset - windowHeight +1500){
    nav.classList.add('fixed');
  }else{
    nav.classList.remove('fixed');
  }
});

// ハンバーガーメニューの動き
const btn = document.querySelector('.hamburger-btn');
btn.addEventListener('click', function(){
  const menu = document.querySelector('.hamburger-nav');
  menu.classList.toggle('active');

  const cover = document.querySelector('.hamburger-cover');
  cover.classList.toggle('active');

  const bar = document.querySelectorAll('.hamburger-btn_bar');
  for(let i = 0; i < bar.length; i++) {
    bar[i].classList.toggle('active');
  }
});

document.querySelectorAll('.hamburger-nav a').forEach(function(link){
  link.addEventListener('click',function(){
    const menu = document.querySelector('.hamburger-nav');
    menu.classList.toggle('active');

    const cover = document.querySelector('.hamburger-cover');
    cover.classList.toggle('active');

    const bar = document.querySelectorAll('.hamburger-btn_bar');
    for(let i = 0; i < bar.length; i++) {
      bar[i].classList.toggle('active');
    }
  })
});

// ポートフォリオのアニメーション
let portfolio = document.querySelectorAll('.portfolio-item');
portfolio.forEach(function(portfolioItem) {
  let windowHeight = window.innerHeight;
  
  window.addEventListener('scroll', function() {
    let offset = portfolioItem.getBoundingClientRect().top;
    let scroll = window.scrollY;
    
    if(scroll > offset - windowHeight + 1000){
      portfolioItem.classList.add('is-scrollIn');
    }
  })
});

// モーダル
const modalBtns = document.querySelectorAll(".modal-open");
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  };
});
const closeBtns = document.querySelectorAll(".modal-btn");
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.closest('.modal');
    modal.style.display = "none";
  };
});

window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};

// セクションタイトルのアニメーション
let title = document.querySelectorAll('.title-span');
title.forEach(function(gradation) {
  let windowHeight = window.innerHeight;
  
  window.addEventListener('scroll', function() {
    let offset = gradation.getBoundingClientRect().top;
    let scroll = window.scrollY;
    
    if(scroll > offset - windowHeight + 500){
      gradation.classList.add('is-scrollIn');
    }
  })
});

// サービスのアニメーション
let service = document.querySelectorAll('.service-item');
service.forEach(function(popup) {
  let windowHeight = window.innerHeight;
  
  window.addEventListener('scroll', function() {
    let offset = popup.getBoundingClientRect().top;
    let scroll = window.scrollY;
    
    if(scroll > offset - windowHeight + 2000){
      popup.classList.add('is-scrollIn');
    }
  })
});

let serviceOther = document.querySelector('.service-other');
window.addEventListener('scroll', function() {
  let windowHeight = window.innerHeight;
  let offset = serviceOther.getBoundingClientRect().top;
  let scroll = window.scrollY;
  
  if(scroll > offset - windowHeight + 2000){
    serviceOther.classList.add('is-scrollIn');
  }
})

// スムーススクロール
let scroll = new SmoothScroll('a[href*="#"]', {
  speedAsDuration:true,
  speed:1000,
  easing:'easeInOutQuint'
});