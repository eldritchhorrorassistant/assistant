// console.log('main.js')
//expansions
function checkExpansion(e){
    let expansions = JSON.parse(localStorage.expansions)
    let checkbox = e.target
    if(checkbox.checked){
        expansions.push(checkbox.value)
        
    }else{
        let index = expansions.indexOf(checkbox.value)
        expansions.splice(index, 1);
    }
    localStorage.expansions = JSON.stringify(expansions)
    // console.log(localStorage.expansions)
    expansionsDisplay()
}

function expansionsDisplay(){
    let exts = document.querySelector('.extensions_')

    if(!localStorage.expansions){
        localStorage.expansions = JSON.stringify(['eldritch-horror'])
    }

    if(exts){
        let storage = localStorage.expansions
        let expansions = JSON.parse(storage)
        
        let classList = Array.from(exts.classList)
        // console.log(classList)
        for(let className of classList){
            if(className.lastIndexOf('ext__', 0) === 0){
                exts.classList.remove(className)
            }
        }
        
        for(let expansion of expansions){
            let className = 'ext__'+expansion
            exts.classList.add(className)
        }
    }
}
expansionsDisplay();

function expansionsMenu(){
    if(!localStorage.expansions){
        localStorage.expansions = JSON.stringify(['eldritch-horror'])
    }

    let expansionsList = document.querySelector('.expansions-list')
    let expansions = JSON.parse(localStorage.expansions)

    expansionsList.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        if(checkbox.value === 'eldritch-horror'){}
        // console.log(checkbox.value, expansions.indexOf(checkbox.value) >= 0)
        if(expansions.indexOf(checkbox.value) >= 0) checkbox.checked = true
    })
    // console.log('asd')
}
expansionsMenu()

let expansionsList = document.querySelector('.expansions-list')
expansionsList.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', e => checkExpansion(e))
})

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






