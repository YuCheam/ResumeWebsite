const parallax  = document.getElementById('parallax');

window.addEventListener('scroll', function() {
    window.requestAnimationFrame(parallaxEffect);
    stickyHeader();
});

function parallaxEffect() {
    parallax.style.transform = `translateY(${1+(window.pageYOffset*.3)}px)`
}

let offsetTop = document.getElementById('nav').offsetTop;

function stickyHeader() {
    if (window.pageYOffset >= offsetTop) {
        document.getElementById('nav').classList.add('sticky')
    } else {
        document.getElementById('nav').classList.remove('sticky')
    }
}
