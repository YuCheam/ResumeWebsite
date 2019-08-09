let isScrolling;
let scrollDisabled = false;

window.addEventListener('wheel', function(e) {
    if (!scrollDisabled) {
        clearTimeout(isScrolling);

        isScrolling = setTimeout(function() {
            snapEffect(e)
        }, 66);
    }
});

function snapEffect(event) {
    scrollDisabled = true;
    setTimeout(function() {
        scrollDisabled = false;
    }, 600);

    const container = document.getElementById('container');
    const screenHeight = window.innerHeight;

    if (event.deltaY < 0 ) {
        container.style.transform = `translate3d(0, ${container.getBoundingClientRect().y + screenHeight}px, 0)`
    } else {
        container.style.transform = `translate3d(0, ${container.getBoundingClientRect().y - screenHeight}px, 0)`
    }

}
