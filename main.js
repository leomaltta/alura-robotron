const buttonList = document.querySelectorAll('[data-count]')
const statistics = document.querySelectorAll("[data-status]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
buttonList.forEach(element => {
    element.addEventListener("click", (event) => {
        manipulateData(event.target.dataset.count, event.target.parentNode)
        updateStatus(event.target.dataset.peca)
    })
});


function manipulateData(signal, count) {
    const item = count.querySelector("[data-counter]")
    if(signal === "-") {
        item.value = parseInt(item.value) - 1
    } else {
        item.value = parseInt(item.value) + 1
    }
}

function updateStatus(peca) {
    console.log(pecas[peca])


    statistics.forEach(element => {
        console.log(element.dataset.status)
        element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.status]
    }) 
}