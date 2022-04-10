
let ourDivItem = document.getElementsByClassName('item')
let iconOpen = document.getElementsByClassName('iconOpen')
let iconClose = document.getElementsByClassName('iconClose')

// console.log(ourDivItem);

for (let i = 0; i < ourDivItem.length; i++) {

    iconClose[i].style.display = 'none'

    ourDivItem[i].addEventListener('click',()=>{
      const result =  ourDivItem[i].classList.toggle('active')

      if(result){
          iconClose[i].style.display = 'block'
          iconOpen[i].style.display = 'none'
    } else{
        iconClose[i].style.display = 'none'
        iconOpen[i].style.display = 'block'


        
      }
    })

    iconClose[i].addEventListener('click', ()=>{
      ourDivItem[i].classList.toggle('reverse')
   
   })

   iconOpen[i].addEventListener('click', ()=>{
    ourDivItem[i].classList.remove('reverse')
  
  })
    
}


// for (let r = 0; r < ourDivItem.length; r++) {
// iconClose[r].addEventListener('click', ()=>{
//    ourDivItem[r].classList.toggle('reverse')

// })
// iconOpen[r].addEventListener('click', ()=>{
//   ourDivItem[r].classList.remove('reverse')

// })

// }























    // let hiddeBox = document.querySelector('.hidden-box')
    // let icon = document.querySelector('.icon')
    // let icon2 = document.querySelector('.icon2')

    // icon.addEventListener('click',()=>{
    //     hiddeBox.style.display = 'block'
    //     icon.style.display = 'none'
    //     icon2.style.display = 'block'
    // })
    // icon2.addEventListener('click',()=>{
    //     hiddeBox.style.display = 'none'
    //     icon2.style.display = 'none'
    //     icon.style.display = 'block'

    // })
