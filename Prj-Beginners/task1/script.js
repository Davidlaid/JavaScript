const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const line = document.getElementById('line');
var index1 = 1;
// length nodeList = 4

next.addEventListener('click', () => {
    index1++;
    if(index1 > circles.length) {
        index1 = circles.length;
    }
    update();
});

prev.addEventListener('click', () => {
    index1--;
    if(index1 < 1 ) {
        index1 = 1;
    }
    update();
});

function update() {
    circles.forEach((item,index) => {
        if(index < index1) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    let actives = document.querySelectorAll('.active');
    console.log(actives.length);
    line.style.width = `${(actives.length - 1) * 33.33 }%`;
    console.log(`${(actives.length - 1) * 33.33 }%`);
};

