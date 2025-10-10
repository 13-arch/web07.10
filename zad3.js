const input = Array.from(document.getElementById('form').children)
const button = document.getElementById('add-button')
const info = document.getElementById('info')


button.addEventListener('click', function(){
    input.forEach(element =>{

        info.innerText = info.innerText + ' ' + element.value
    })
})