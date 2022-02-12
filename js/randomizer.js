let modal = document.getElementById('modal')
let bsModal = new bootstrap.Modal(modal, {})
let categoryNameCurrent = ''
let categoryCurrent = []

modal.addEventListener('hidden.bs.modal', function (event){
    clearModalContent()
})

function clearModalContent(){
    modal.querySelector('.card-img').src = "/imgs/img-holder.jpg"
    modal.querySelector('.card-title').innerText = '...'
    modal.querySelector('.card-subtitle').innerText = '...' 
    modal.querySelector('.btn-repeat').onclick = undefined
    categoryNameCurrent = ''
}

function shuffleArray(array) {
    if(array.length){
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    return array
}

function getRandomCard(categoryName, filter = ''){

    if(categoryNameCurrent != categoryName || !categoryCurrent.length){
        categoryNameCurrent = categoryName
        if(filter){
            categoryCurrent = gameData[categoryName].filter(item => item.subtitle.toLowerCase().includes(filter))
        }else{
            categoryCurrent = [...gameData[categoryName]]
        }
    }

    let expansions = JSON.parse(localStorage.expansions)
    categoryCurrent = categoryCurrent.filter( item => expansions.includes(item.expansion.toLowerCase().replace(/ /gi, '-')) )
    
    categoryCurrent = shuffleArray(categoryCurrent)

    let randomInt = Math.floor(Math.random()*categoryCurrent.length)
    let randomItem = categoryCurrent.splice(randomInt, 1)[0]
    // console.log(randomItem)
    let modalImg = modal.querySelector('.card-img')
    let modalTitle = modal.querySelector('.card-title')
    let modalSubtitle = modal.querySelector('.card-subtitle')

    let imageURL = `/imgs/cards/${categoryName}/${randomItem.image}`

    fetch(imageURL).then(response => {
        // console.log(response)
        if (response.ok) {
            if(randomItem && randomItem.image) modalImg.src = imageURL
        }else{
            modalImg.src = '/imgs/img-holder.jpg'
        }
    })

    // if(randomItem && randomItem.image) modalImg.src = `/imgs/cards/${categoryName}/${randomItem.image}`
    if(randomItem && randomItem.title) modalTitle.innerText = randomItem.title
    if(randomItem && randomItem.subtitle) modalSubtitle.innerText = randomItem.subtitle
    modal.querySelector('.btn-repeat').onclick = function(){ getRandomCard(categoryName, filter) }
    bsModal.show()
}