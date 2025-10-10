const outPut = document.getElementById('out_put')
const specBut = Array.from(document.getElementById('special_buttons').children)
const numBut = Array.from(document.getElementById('number_buttons').children)
const actBut = Array.from(document.getElementById('action_buttons').children)

for (let i = 0; i < numBut.length; ++i) {
    numBut[i].addEventListener('click', function () {
        let value = numBut[i].textContent
        if (value === '+/-') {
            if (outPut.textContent.startsWith('-')) {
                outPut.textContent = outPut.textContent.slice(1)
            } else {
                outPut.textContent = '-' + outPut.textContent
            }
        } else {
            outPut.textContent += value
        }
    })
}

for (let i = 0; i < actBut.length; ++i) {
    actBut[i].addEventListener('click', function () {
        let value = actBut[i].textContent
        outPut.textContent += value
    })
}

for (let i = 0; i < specBut.length; ++i) {
    specBut[i].addEventListener('click', function () {
        let value = specBut[i].textContent

        if (value === 'AC') {
            outPut.textContent = ''
        } else if (value === '☚') {
            outPut.textContent = outPut.textContent.slice(0, -1)
        } else if (value === '%') {
            outPut.textContent = eval(outPut.textContent) / 100
        } else if (value === '=') {
            outPut.textContent = eval(outPut.textContent)
        }
    })
}
