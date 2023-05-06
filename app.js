let body = document.querySelector('body')

let container = document.createElement('div')
container.classList.add('container')
body.append(container)

let select = document.createElement('select')
select.classList = 'form-select form-select-lg mb-3'
select.setAttribute('onchange', 'test()')
container.append(select)

let optionAll = document.createElement('option')
select.append(optionAll)
optionAll.innerText = 'Barchasi'

let div = document.createElement('div')
container.append(div)
div.classList.add('all')

let all = [
    // 
    {category:'iphone' , name:'14 pro max'  , title:'14 pro max' , id: 1 , src:'img/iphone.jpg'},
    {category:'iphone' , name:'13 pro max'  , title:'13 pro max' , id: 2 , src:'img/iphone.jpg'},
    {category:'iphone' , name:'12 pro max'  , title:'12 pro max' , id: 3 , src:'img/iphone.jpg'},
    {category:'iphone' , name:'11 pro max'  , title:'11 pro max' , id: 4 , src:'img/iphone.jpg'},
    {category:'samsung' , name:'samsung 8' , title:'samsung 8' , id: 5 , src:'img/samsung.jpg'},
    {category:'samsung' , name:'samsung 9' , title:'samsung 9' , id: 6 , src:'img/samsung.jpg'},
    {category:'samsung' , name:'samsung 10' , title:'samsung 10' , id: 7 , src:'img/samsung.jpg'},
    {category:'samsung' , name:'samsung 11' , title:'samsung 11' , id: 8 , src:'img/samsung.jpg'},
    {category:'redmi' , name:'redmi 1'   , title:'redmi 1' , id: 9 , src:'img/redmi.jpg'},
    {category:'redmi' , name:'redmi 2'   , title:'redmi 2' , id: 10 , src:'img/redmi.jpg'},
    {category:'redmi' , name:'redmi 3'   , title:'redmi 3' , id: 11 , src:'img/redmi.jpg'},
   
       
]

let optionlist = []

function creatImg(i){
    if(!optionlist.includes(all[i].category)){
        optionlist.push(all[i].category)           
    }
    img = document.createElement('img')
    div.append(img)
    img.src = all[i].src
    img.id = all[i].id
    img.name = all[i].name
    img.setAttribute('title', all[i].title)
}

for (let i = 0; i< all.length; i++) {
   creatImg(i)
}

for (let i = 0; i< optionlist.length; i++) {
    option = document.createElement('option')
    select.append(option)
    option.innerHTML = optionlist[i]
    option.value = optionlist[i]
}




function test(){    
    for (let i = 0; i< all.length; i++) {
        if(select.value == all[i].category){
            img = document.createElement('img')
            div.append(img)
            img.src = all[i].src
            img.id = all[i].id
            img.name = all[i].name
            img.setAttribute('title', all[i].title)
        }
        console.log(select.value);
    }
}

























// let optionList = []
// for (i=0 ; i<all.length ; i++){
//   if(!optionList.includes(all[i].category)){
//     optionList.push(all[i].category)   
   
   
//   }
//   select.append(option)
//   option.textContent = optionList[i]
// }

// console.log(optionList);

// let option = document.createElement('option')
// option.value = 1
// option.textContent = 'iphone'
// select.append(option)

