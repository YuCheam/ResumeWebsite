const container = document.getElementById('container');
let offsetTop = document.getElementById('nav').offsetTop;

container.addEventListener('scroll', function() {
    stickHeader();
});


/*function parallaxScrolling() {
    let bkg1 = document.getElementById('bkg1');
    window.requestAnimationFrame(function() {
        bkg1.style.transform = 'translate(0, ' + window.pageYOffset * .75 + 'px)';
    });
}*/
function stickHeader() {
    let nav = document.getElementById('nav');

    console.log(container.scrollTop, offsetTop)
    if(container.scrollTop > offsetTop) {
        nav.classList.add('sticky');
        nav.style.top = container.scrollTop + 'px';
    } else {
        nav.classList.remove('sticky');
        nav.style.top = '0';
    }
}
