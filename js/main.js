console.log('main.js')

let toTopBtn = document.querySelector('.to-top')

window.onscroll = function () { scrollFunction() }

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        toTopBtn.style.display = "block"
    } else {
        toTopBtn.style.display = "none"
    }
}
function backToTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}
toTopBtn.addEventListener("click", backToTop)


