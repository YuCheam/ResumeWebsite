let isScrolling;
let scrollDisabled = false;
let activeHeight = 0;
let hiddenElem = document.querySelectorAll('.hidden');
const container = document.getElementById('container');


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
    }, 700);

    const screenHeight = window.innerHeight;

    if (event.deltaY < 0 ) {
        activeHeight += screenHeight;
        console.log('up');
        container.style.transform = `translate3d(0, ${activeHeight}px, 0)`
    } else {
        activeHeight -= screenHeight;
        container.style.transform = `translate3d(0, ${activeHeight}px, 0)`
    }

    setTimeout(checkPosition, 700)
}

function checkPosition() {
    let rangeBottom = container.getBoundingClientRect().top +activeHeight;
    let rangeTop = rangeBottom + window.innerHeight;
    console.log(rangeBottom, rangeTop)
    for (x of hiddenElem) {
        let offset = x.getBoundingClientRect().top;
        if( offset <= rangeTop && offset >= rangeBottom ) {
            switch ( x.id ) {
                case 'subName':
                    x.className = x.className.replace('hidden', 'subName-fade-in');
                    break;
                case 'name':
                    x.className = x.className.replace('hidden', 'name-fade-in');
                    break;
            }
        } else {
            switch (x.id) {
                case 'subName':
                    x.className = x.className.replace('subName-fade-in', 'hidden');
                    break;
                case 'name':
                    x.className = x.className.replace('name-fade-in', 'hidden');
            }
        }
    }
}

function initialize() {
    checkPosition()
}


initialize();
