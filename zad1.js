const newimg = Array.from(document.getElementsByClassName('asd'))


newimg.forEach(item => {
    item.addEventListener('click',(evn)=>{
        newimg.forEach(el => {
            if (el === evn.target){
                el.classList.toggle('transform1')
                const text = Array.from(el.children)
                for (let i =0 ; i<text.length;i++){
                    text[i].classList.toggle('textVisible')
                }         
            } else {
            el.classList.toggle('transform2')
            }
        })
    })
})
