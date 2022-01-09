console.log('main.js')

//modal options
let modalOptions = document.getElementById('modal-options')
let bsModalOptions = new bootstrap.Modal(modalOptions, {})

//scroll on top
let toTopBtn = document.querySelector('.to-top')

if(toTopBtn){
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
}




