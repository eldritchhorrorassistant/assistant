let gameData = copyObject(cards)

let modal = new bootstrap.Modal(document.getElementById('modal'), {})
// modal.show()

document.getElementById('modal').addEventListener('hidden.bs.modal', function (event) {
    
    let modalImg = document.getElementById('modal-img')
    let modalTitle = document.getElementById('modal-title')
    let modalSubtitle = document.getElementById('modal-subtitle')

    modalTitle.innerText = "..."
    modalImg.src = "https://via.placeholder.com/150"
    modalSubtitle.innerText = "..."
})

function copyObject(obj){
    let result = {}
    for(let i in obj){
        result[i] = [...obj[i]]
    }
    return result
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

function filterArray(arr, filter){
    let filtred = []
    if(filter){
        filtred = arr.filter( item => item.subtitle.toLowerCase().includes(filter) )
    }else{
        filtred = arr
    }
    return filtred
}

function getRandomCard(param, filter = []){

    let filtred = shuffleArray(filter)

    if(filter.length < 1){
      filtred = [...gameData[param]]
    }else{
      filtred = [...filter]
    }

    let modalTitle = document.getElementById('modal-title')
    let modalSubtitle = document.getElementById('modal-subtitle')
    let modalImg = document.getElementById('modal-img')
    let modalRepeat = document.getElementById('modal-btn-repeat')
    // console.log(filtred)
    modalRepeat.onclick = function(){ getRandomCard(param, filter) }

    let randomInt = Math.floor(Math.random()*filtred.length)
    let randomItem = filtred.splice(randomInt, 1)[0]

    if(randomItem && randomItem.title){
        modalTitle.innerText = randomItem.title
        if(randomItem.img) modalImg.src = `/imgs/${param}/${randomItem.img}.png`
        if(randomItem.subtitle) modalSubtitle.innerText = randomItem.subtitle
        modal.show()
    }else{
        modalTitle.innerText = 'Ошибка! Файл не найден.'
        modal.show()
    }
}