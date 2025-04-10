const images = [
  "public/pictures/1.jpg",
  "public/pictures/2.jpg",
  "public/pictures/3.jpg",
  "public/pictures/4.jpg",
  "public/pictures/5.jpg",
  "public/pictures/6.jpg",
  "public/pictures/7.jpg",
  "public/pictures/8.jpg",
  "public/pictures/9.jpg"
];

function setFullHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
// 初期設定
setFullHeight();
// ウィンドウリサイズ時にも再設定
window.addEventListener('resize', setFullHeight);


let lastIndex = 0;
let index = 5;
document.addEventListener("DOMContentLoaded", function() {

  // 文字のフェードイン
  const contents = document.querySelectorAll('.content')
  contents.forEach(content => {
    content.classList.add('fade-in')
  })
  
  // 背景画像切り替え
  function changeBackground() {
    const backgroundImg = document.querySelector("#backgroundImg");
    while(lastIndex === index){
      index = Math.floor(Math.random() * images.length);
    }
    lastIndex = index;
    backgroundImg.src = images[index];
    backgroundImg.classList.add('fade-in-image');
  }
  setInterval(changeBackground, 10000);
  changeBackground();

  // 紹介動画
  const movieModal = document.getElementById('movieModal');
  const video = document.getElementById('introVideo');
  movieModal.addEventListener('hide.bs.modal', function () {
      video.pause();
      video.currentTime = 0;
  });
});

document.addEventListener("wheel", function(event) {
  const sections = document.querySelectorAll(".scroll-section");
  let currentIndex = [...sections].findIndex(section => section.getBoundingClientRect().top >= 0);
  if (event.deltaY > 0) {
      currentIndex = Math.min(currentIndex + 1, sections.length - 1);
  } else {
      currentIndex = Math.max(currentIndex - 1, 0);
  }
  sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener("scroll", function() {
  document.querySelectorAll(".content").forEach(content => {
      const rect = content.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.80) {
          content.classList.add("fade-in");
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollDown = document.getElementById("scroll-down");
  const scrollUp = document.getElementById("scroll-up");

  if (scrollDown) {
      scrollDown.addEventListener("click", function () {
          const nextSection = document.querySelectorAll(".scroll-section")[1];
          if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth" });
          }
      });
  }

  if (scrollUp) {
      scrollUp.addEventListener("click", function () {
          const previousSection = document.querySelectorAll(".scroll-section")[0];
          if (previousSection) {
              previousSection.scrollIntoView({ behavior: "smooth" });
          }
      });
  }
});
