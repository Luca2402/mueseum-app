function submitComment(){
    const inputField = document.getElementById('name')
    console.log(inputField)
    const name = inputField.value 
    console.log(name)
    const textArea = document.getElementById('msg')
    console.log(textArea)
    const msg = textArea.value
    console.log(msg)
    const comment = document.createElement('section')
    const h3 = document.getElementById('h3')
    const p = document.getElementById('p')
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
    
}
