let isScrolling;
let scrollDisabled = false;
let activeHeight = 0;
let animatedElem = document.querySelectorAll('.animate');
let elementTop = Array.from(animatedElem, x => x.getBoundingClientRect().top);
const container = document.getElementById('container');

window.addEventListener('wheel', function(e) {
    if (!scrollDisabled) {
        clearTimeout(isScrolling);

        isScrolling = setTimeout(function() {
            snapEffect(e);
        }, 66);
    }
});

function snapEffect(event) {
    scrollDisabled = true;
    setTimeout(function () {
        scrollDisabled = false;
    }, 700);

    if (event.deltaY < 0) {
        activeHeight += 100;
        elementTop = elementTop.map(item => {
            return item += window.innerHeight
        });
        console.log('up')
        container.style.transform = `translate3d(0, ${activeHeight}vh, 0)`
    } else {
        activeHeight -= 100;
        elementTop = elementTop.map((item => {
            return item -= window.innerHeight
        }));
        container.style.transform = `translate3d(0, ${activeHeight}vh, 0)`;
    }

    checkPosition()
}

function checkPosition() {
    for (let i = 0; i < elementTop.length; i++) {
        let element = animatedElem[i];
        if( elementTop[i] < window.innerHeight && elementTop[i] >= 0 ) {
            element.className = element.className.replace('animate', 'active');
        } else {
            element.className = element.className.replace('active', 'animate');
        }
    }
}

function initialize() {
    checkPosition()
}


initialize();
