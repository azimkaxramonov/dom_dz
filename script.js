let body = document.body

let container = document.createElement('div')
container.classList.add('container')

for( let item of ['one','two','three', 'four', 'five' , 'six', 'seven']){
    let cont = document.createElement('div')
    let top_div = document.createElement('div')
    let img = document.createElement('img')
    let bottom_div = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')
    let button = document.createElement('button')
    let box = document.createElement('div')
    let elem_one = document.createElement('div')
    let elem_two = document.createElement('div')
    let elem_three = document.createElement('div')
    let img_elem_one = document.createElement('img')
    let img_elem_two = document.createElement('img')
    let img_elem_three = document.createElement('img')
    let p_elem_one = document.createElement('p')
    let p_elem_two = document.createElement('p')
    let p_elem_three = document.createElement('p')
    
    
    
    cont.classList.add('cont')
    top_div.classList.add('top_div')
    bottom_div.classList.add('bottom_div')
    h1.classList.add('h1')
    p.classList.add('p')
    button.classList.add('button')
    img.classList.add('image')
    box.classList.add('box')
    elem_one.classList.add('elem_one')
    elem_two.classList.add('elem_two')
    elem_three.classList.add('elem_three')
  
    img.src = "img/81fPKd-2AYL 1.png"
    img_elem_one.src = "img/Group 7.png"
    img_elem_two.src = "img/Group 10.png"
    img_elem_three.src =  "img/Group 9.png"
    
    
    p_elem_one.innerHTML = '109'
    p_elem_two.innerHTML = '3,9'
    p_elem_three.innerHTML = '120'
    button.innerHTML = 'В избранное'
    
    h1.innerHTML = 'MEN’S CLOTHING (120)'
    p.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'
    body.prepend(container)
    
    container.append(cont)
    cont.append(top_div, bottom_div)
    top_div.append(img)
    box.append(elem_one,elem_two,elem_three )
    bottom_div.append(h1,p,box ,button)
    box.append(elem_one,elem_two,elem_three)
    
    elem_one.append(img_elem_one, p_elem_one)
    elem_two.append(img_elem_two, p_elem_two)
    elem_three.append(img_elem_three , p_elem_three)
    
  button.onclick = () => {
    if (button.className === 'button') {
        button.classList.add('active')
        button.classList.remove('hide')
        button.innerHTML = 'Добавлено'
        
    }
    else {
        button.classList.remove('active')
        button.classList.add('hide')
        button.innerHTML = 'В избранное'
    }
   
}


}
      
        
    







   


