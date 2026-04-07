const randomButton = document.querySelector('button')

function drawNumber(){
    const min = Math.ceil(document.querySelector('.min-input').value)
    const max = Math.floor(document.querySelector('.max-input').value)

    if (min < max) {
        const result = Math.floor(Math.random() * (max - min + 1)) + min
        alert(result)
    } else {
        alert('O valor do primeiro input precisa ser MENOR que do segundo input')
    }
}

randomButton.addEventListener('click', drawNumber)