// tablet-header nav
// 여는 아이콘 선택자
const menuOpenEl = document.getElementById('btn-open')
// 닫는 아이콘 선택자
const menuCloseEl = document.getElementById('btn-close')
// 사이드 네비게이션 선택자
const sideMenuEl = document.getElementById('side-menu')
// 여는 아이콘에 클릭 이벤트가 발생하면,
menuOpenEl.addEventListener("click", function() {
    // 여는 아이콘을 보이지 않게 처리하고,
    menuOpenEl.style.display = 'none'
    // 닫는 아이콘은 보이게 처리합니다
    menuCloseEl.style.display = 'block'
    // 사이드 메뉴를 보이게 합니다 
    sideMenuEl.style.transform = 'translateX(0%)'
})
// 닫는 아이콘에 클릭 이벤트가 발생하면,
menuCloseEl.addEventListener("click", function() {
    // 여는 아이콘을 보이게 처리하고,
    menuOpenEl.style.display = 'block'
    // 닫는 아이콘은 보이지 않게 처리합니다
    menuCloseEl.style.display = 'none'
    // 사이드 메뉴를 원상태로 숨깁니다
    sideMenuEl.style.transform = 'translateX(-100%)'
})

// mobile-header nav
// 여는 아이콘 선택자
const menuOpenEl2 = document.getElementById('btn--open')
// 닫는 아이콘 선택자
const menuCloseEl2 = document.getElementById('btn--close')
// 사이드 네비게이션 선택자
const sideMenuEl2 = document.getElementById('side--menu')
// 여는 아이콘에 클릭 이벤트가 발생하면,
menuOpenEl2.addEventListener("click", function() {
    // 여는 아이콘을 보이지 않게 처리하고,
    menuOpenEl2.style.display = 'none'
    // 닫는 아이콘은 보이게 처리합니다
    menuCloseEl2.style.display = 'block'
    // 사이드 메뉴를 보이게 합니다 
    sideMenuEl2.style.transform = 'translateX(0%)'
})
// 닫는 아이콘에 클릭 이벤트가 발생하면,
menuCloseEl2.addEventListener("click", function() {
    // 여는 아이콘을 보이게 처리하고,
    menuOpenEl2.style.display = 'block'
    // 닫는 아이콘은 보이지 않게 처리합니다
    menuCloseEl2.style.display = 'none'
    // 사이드 메뉴를 원상태로 숨깁니다
    sideMenuEl2.style.transform = 'translateX(-100%)'
})

// SCROLL TO TOP
const scrollToTop = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
}

// scroll to top 버튼 선택자
const scrollToTopBtn = document.querySelector('.btn-scrollToTop')

// 윈도우에 스크롤 이벤트가 발생할 시 작동하는 익명의 함수
window.addEventListener("scroll", function() {
    // 만약 스크롤이 발생하면,
    // scroll to top 버튼을 보이게 하고,
    // 아니라면 버튼을 보이지 않게 함
    window.scrollY > 0
    ? scrollToTopBtn.style.display = 'block'
    : scrollToTopBtn.style.display = 'none'
})
// popAlert
const popAlert = () => {
    alert('확진 판정을 받은 후 의료기관이나 생활치료센터 등에 격리되어 치료를 받고 있는 환자')
}
// popAlert2
const popAlert2 = () => {
  alert('발생률 : 지역별 인구 출처-행정안전부, 주민등록인구 현황(20.1월 기준)')
}

// 슬라이드 이미지들 선택자
const $slides = document.querySelectorAll(".slide");
// 점들 선택자
const $dots = document.querySelectorAll(".dot");

// 현재 보이는 슬라이드 index값
let current = 0;

// 자동 슬라이드 기능
window.addEventListener("load", function () {
  setInterval(autoSlide, 3000);
});

const reset = () => {
  $slides.forEach((slide) => {
    slide.style.display = "none";
  });
  $dots.forEach((dot) => {
    dot.style.background = "#F6F5F0";
    dot.style.width = "8px";
  });
};

const autoSlide = () => {
  reset();
  if (current === $slides.length - 1) {
    current = -1;
  }
  current++;
  $slides[current].style.display = "block";
  $dots[current].style.background = "#1107ff";
  $dots[current].style.width = "30px";
};
// 수동 슬라이드 기능: 화살표
// 왼쪽 화살표
const $arrowLeft = document.querySelector(".arrow-left");
// 오른쪽 화살표
const $arrowRight = document.querySelector(".arrow-right");

const slideToRight = () => {
  reset();
  if (current === $slides.length - 1) {
    current = -1;
  }
  current++;
  $slides[current].style.display = "block";
  $dots[current].style.background = "#1107ff";
  $dots[current].style.width = "30px";
};

$arrowRight.addEventListener("click", slideToRight);

const slideToLeft = () => {
  reset();
  if (current === 0) {
    current = $slides.length;
  }
  current--;
  $slides[current].style.display = "block";
  $dots[current].style.background = "#1107ff";
  $dots[current].style.width = "30px";
};

$arrowLeft.addEventListener("click", slideToLeft);
// 수동 슬라이드 기능: 점들
$dots.forEach((dot, idx) => {
    dot.addEventListener("click", function () {
      reset();
      current = idx;
      $slides[current].style.display = "block";
      dot.style.background = "#1107ff";
      dot.style.width = "30px";
    });
  });
