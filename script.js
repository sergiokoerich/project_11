//VARIÁVEIS

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//eventos

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

//funcao callback
function handleTryClick(event) {
    event.preventDefault() //faz com que nao envie o formulario, como de costume do btn em form.

    const inputNumber = document.querySelector("#inputNumber")

    if (Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document.querySelector(".screen2 h2").innerText =  //innertext adcionar texto
        `You got it right in ${xAttempts} tries!`
    }

    inputNumber.value = ""
    xAttempts++
}


function handleResetClick() {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    xAttempts = 1
    location.reload()
}

