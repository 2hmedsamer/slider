var imgs = Array.from(document.querySelectorAll('.container img '));
var fixedBox = document.getElementById('fixed-box');
var innerImg = document.getElementById('inner-img');
var closeBtn = document.getElementById('closeBtn');
var leftBtn = document.getElementById('leftBtn');
var rightBtn = document.getElementById('rightBtn');

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function (e) {
        var clickedImg = e.target;
     currentIndex= imgs.indexOf(clickedImg)
     console.log(currentIndex)
        var imgSrc = clickedImg.getAttribute('src');
        innerImg.setAttribute('src', imgSrc)
        fixedBox.classList.replace('d-none', 'd-flex')
    })
}
function closeButn() {
    fixedBox.classList.replace('d-flex', 'd-none')
}
closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeButn();
})
fixedBox.addEventListener('click', function (e) {
    e.stopPropagation();
    closeButn();
})

var currentIndex;
function nextImg() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }
    var nextImg = imgs[currentIndex];
    var imgSrc = nextImg.getAttribute('src');
    innerImg.setAttribute('src', imgSrc);
}
function prevImg() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    var nextImg = imgs[currentIndex]
    var imgSrc = nextImg.getAttribute('src');
    innerImg.setAttribute('src', imgSrc)
}
leftBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    prevImg()
})
rightBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    nextImg()
})
document.addEventListener('keyup', function (e) {
    if (e.key == 'Escape') {
        closeButn();
    } else if (e.key == 'ArrowRight') {
        nextImg();
    } else if (e.key == 'ArrowLeft') {
        prevImg();
    }
})
