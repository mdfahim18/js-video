const preloader = document.querySelector('.preloader');

const video = document.querySelector('.video-container');
const btn = document.querySelector('.switch-btn');

btn.addEventListener('click', function () {
  if (!btn.classList.contains('slide')) {
    btn.classList.add('slide');
    video.pause();
  } else {
    btn.classList.remove('slide');
    video.play();
  }
});
window.addEventListener('DOMContentLoaded', function () {
  preloader.classList.add('hide-preloader');
});
