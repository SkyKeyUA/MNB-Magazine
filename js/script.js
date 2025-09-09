window.addEventListener('load', windowLoad);
const header = document.querySelector('.header');
const html = document.documentElement;
const bannerPosts = document.querySelector('.posts__banner');
const viewCards = document.querySelector('.view__root');

const heightHeader = (tag) => {
  tag.style.top = `${header.offsetHeight}px`;
};
bannerPosts && heightHeader(bannerPosts);
viewCards && heightHeader(viewCards);

function windowLoad() {
  document.addEventListener('click', documentActions);
  html.classList.add('loaded');
}
function documentActions(e) {
  const targetElement = e.target;
  if (992 >= window.innerWidth) {
    if (targetElement.closest('.icon-menu')) {
      html.classList.toggle('menu-open');
    }
    targetElement.closest('.menu__link') && html.classList.contains('menu-open')
      ? html.classList.remove('menu-open')
      : null;
  }
  if (
    !targetElement.closest('.search-board') &&
    document.querySelector('.search-board').classList.contains('active')
  ) {
    const searchBoard = document.querySelector('.search-board');
    searchBoard.classList.remove('active');
  }
  if (targetElement.closest('.actions__search')) {
    const searchBoard = document.querySelector('.search-board');
    searchBoard.classList.add('active');
    console.log(document.querySelector('.search-board').classList.contains('active'));
  }
}
var swiper = new Swiper('.issue-hero__swiper', {
  navigation: {
    nextEl: '.issue-hero__arrow--next',
    prevEl: '.issue-hero__arrow--prev',
  },
});
