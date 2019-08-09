const parallax  = document.getElementById('parallax');

window.addEventListener('scroll', function() {
    window.requestAnimationFrame(parallaxEffect)
});

function parallaxEffect() {
    parallax.style.transform = `translateY(${1+(window.pageYOffset*.5)}px)`

}
