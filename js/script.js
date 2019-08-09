let isScrolling;
let scrollDisabled = false;
let activeHeight = 0;
let coverImage = document.getElementById('coverImage');

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
        coverImage.classList.remove('active');
    }, 700);

    const container = document.getElementById('container');
    const screenHeight = window.innerHeight;

    if (event.deltaY < 0 ) {
        activeHeight += screenHeight;
        container.style.transform = `translate3d(0, ${activeHeight}px, 0)`
    } else {
        activeHeight -= screenHeight;
        container.style.transform = `translate3d(0, ${activeHeight}px, 0)`
    }

}
