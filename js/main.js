const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// set 1st image opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  // reset opacity
  imgs.forEach(img => (img.style.opacity = 1));

  // change current image
  current.src = e.target.src;

  // add fade-in class
  current.classList.add('fade-in');

  // remove/reset fade-in class after 5 sec
  setTimeout(() => current.classList.remove('fade-in'), 500);

  //change opacity to opacity var
  e.target.style.opacity = opacity;
}
