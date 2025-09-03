window.addEventListener('load', windowLoad);
const header = document.querySelector('.header');
const html = document.documentElement;
const bannerPosts = document.querySelector('.posts__banner');

const heightHeader = (tag) => {
  tag.style.top = `${header.offsetHeight}px`;
};
bannerPosts && heightHeader(bannerPosts);

function windowLoad() {
  if (992 >= window.innerWidth) {
    document.addEventListener('click', documentActions);
  }
  html.classList.add('loaded');
}
function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest('.icon-menu')) {
    html.classList.toggle('menu-open');
  }
  targetElement.closest('.menu__link') && html.classList.contains('menu-open')
    ? html.classList.remove('menu-open')
    : null;
}
var swiper = new Swiper('.issue-hero__swiper', {
  navigation: {
    nextEl: '.issue-hero__arrow--next',
    prevEl: '.issue-hero__arrow--prev',
  },
});
