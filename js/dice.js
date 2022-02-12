function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function oneDice(){
    let diceInput = document.getElementById('dice-input')
    diceInput.value = 1
    diceRender(diceInput.value)
}

function decreaseDice(){
    let diceInput = document.getElementById('dice-input')
    if(+diceInput.value > 1){
        let newValue = +diceInput.value - 1
        diceInput.value = newValue
    }
    diceRender(diceInput.value)
}

function increaseDice(){
    let diceInput = document.getElementById('dice-input')
    let newValue = +diceInput.value + 1
    diceInput.value = newValue
    diceRender(diceInput.value)
}

async function throwDice(){
    let dices = document.querySelector('.dices').querySelectorAll('.dice-placeholder')
    let results = []
    
    dices.forEach(dice => {
        let randomInt = randomInteger(1, 6)
        results.push(randomInt)
        dice.innerHTML = `<div class="spinner-border text-info"></div><i class="bi bi-dice-${randomInt}-fill d-none" style="font-size: 32px"></i>`
    })
    
    setTimeout(function(){
        dices.forEach(dice => {
            dice.querySelector('.spinner-border').classList.add('d-none')
            dice.querySelector('i').classList.remove('d-none')
        })
        diceStatistic(results)
    }, 250);
}

function diceRender(number){
    let dices = document.querySelector('.dices')
    dices.innerHTML = ''
    for (let i = 0; i < number; i++) {
        dices.innerHTML += `<div class="dice-placeholder m-1"><div class="spinner-border text-info"></div></div>`
    }
    throwDice()
}

function diceStatistic(array){
    let element = document.querySelectorAll(`.ststistic-data`)
    element.forEach(item => {
        item.innerHTML = 0
        item.classList.remove('text-white')
        item.classList.remove('bg-dark')
        item.classList.remove('bg-success')
        item.classList.remove('bg-danger')
    })
    
    for(let number of array){
        let element = document.querySelector(`.ststistic-data-${number}`)
        let content = +element.innerText
        element.innerText = content + 1
        element.classList.add('text-white')
        if(number < 3){
            element.classList.add('bg-danger')
        }else if(number > 4){
            element.classList.add('bg-success')
        }else{
            element.classList.add('bg-dark')
        }
    }
}

diceRender(1)