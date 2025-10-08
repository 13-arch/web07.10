const outPut = document.getElementById('out_put')
const specBut = document.getElementById('special_buttons')
const numBut = document.getElementById('number_buttons')
const actcBut = document.getElementById('action_buttons')
const input_1 = document.getElementById("input1")
const input_2 = document.getElementById("input2")
const add = document.getElementById("plus")
const minus = document.getElementById("minus")
const div = document.getElementById("division")
const mult = document.getElementById("multi")
const result = document.getElementById("ravno")

add.addEventListener('click',motion_1 )
minus.addEventListener('click',motion_2 )
div.addEventListener('click',motion_3 )
mult.addEventListener('click',motion_4 )

function motion_1(){
    const value_1 = input_1.value
    const value_2 = input_2.value
    console.log(Number(value_1) + Number(value_2))
}

function motion_2(){
    const value_1 = input_1.value
    const value_2 = input_2.value
    console.log(Number(value_1) - Number(value_2))
}

function motion_3(){
    const value_1 = input_1.value
    const value_2 = input_2.value
    console.log(Number(value_1) / Number(value_2))
}

function motion_4(){
    const value_1 = input_1.value
    const value_2 = input_2.value
    console.log(Number(value_1) * Number(value_2))
}
// const newnumBut = Array.from(numBut.children)
// console.log(newnumBut)
// const text = newnumBut.innerText
// for (let i = 0; i <= newnumBut.length; i++){
//     const text = newnumBut[i].innerText
//     console.log(text)
// }