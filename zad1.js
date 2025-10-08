const newimg = Array.from(document.getElementsByClassName('asd'))


newimg.forEach(item => {
    item.addEventListener('click',(evn)=>{
        newimg.forEach(el => {
            if (el === evn.target){
                el.classList.toggle('transform1')            
            } else {
            el.classList.toggle('transform2')
            }
        })
    })
})
