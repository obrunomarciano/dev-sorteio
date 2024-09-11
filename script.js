const buttonGenerate = document.querySelector(".button-generate")

function generateNumber() {

    const min = Math.ceil(document.querySelector("input-min"))
    const max = Math.floor(document.querySelector("input-max"))

    const result = Math.floor(Math.random() * (max - min) + min);

    alert(result)
}

buttonGenerate.addEventListener("click", generateNumber)