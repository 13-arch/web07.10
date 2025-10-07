const img = document.getElementsByTagName("img")
const newimg = Array.from(img)
newimg.forEach(item =>{
    item.addEventListener('click',()=>{
        item.classList.toggle('asdasd')
    })
})
