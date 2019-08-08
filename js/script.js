window.addEventListener('scroll', function() {
    let scrollVal = this.scrollY;
    let main = document.getElementById('main');
    let bkg1 = document.getElementById('bkg1');

    window.requestAnimationFrame(function() {
        bkg1.style.transform = `translate(0, ${scrollVal * .75}px)`
    });

    console.log(scrollVal, main.offsetTop);
    if(scrollVal > main.offsetTop) {
        document.getElementById('nav').classList.add('sticky')
    } else {
        document.getElementById('nav').classList.remove('sticky')
    }
});
