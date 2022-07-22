// 'use strict'
const navLink=document.querySelectorAll('.nav-link')
const navLinks=document.querySelector('.nav-links')
const nav=document.querySelector('nav')
const imgClick=document.querySelectorAll('.img-click')
const displayImage=document.querySelector('.display-child-div')
const imgDis=document.querySelectorAll('.img-dis')
const sub=document.querySelector('.minus')
const add=document.querySelector('.plus')
let val=document.querySelector('.value')
const order=document.querySelector('.add-cart')
const pCart=document.querySelector('.p-cart')
const cartVal=document.querySelector('.cartval')
const carted=document.querySelector('.head-cart')
const user=document.querySelector('.head-ava')
const divCath=document.querySelector('.div-cath')
const delBtn=document.querySelector('.del-btn')
const delCon=document.querySelector('.imgp-div')
const checkout=document.querySelector('.checkout')
const empty=document.querySelector('.empty')
const deleted=document.querySelector('.delete')
let sumEl=document.querySelector('.sum-el')
let totelEl=document.querySelector('.total')
const menuEl=document.querySelector('.menu-el')
const navEl=document.querySelector('.nav-el')
const divRes=document.querySelector('.div-nav-res')
const container=document.querySelector('.container')
const closed=document.querySelector('.close')
const parDivNav=document.querySelector('.par-div-nav')
const slide=document.querySelector('.slider')
const imgSlide=document.querySelectorAll('.img-slide')
const next=document.querySelector('.next')
const prev=document.querySelector('.prev')

//display image
imgClick.forEach(function (img) {
    img.addEventListener('click', function (e) {
        const clicked=e.target.closest('.img-click')
        console.log(clicked.dataset.img)
        if (clicked) {
          imgDis.forEach(function (dis) {
            dis.classList.add('image-content')
            //document.querySelector(`.image-content--${clicked.dataset.img}`).remove('image-content')
          })
          document.querySelector(`.image-content--${clicked.dataset.img}`).classList.remove('image-content')
        }

    })
})

//number increment and decreement

let sum=0
let price=125


add.addEventListener('click', function (params) {
    console.log('clicked')
    sum++
   val.textContent=sum
   console.log(val)
})
sub.addEventListener('click',function (params) {
  
  if (sum>0) {
    sum--
    val.textContent=sum
  }else{
    val.textContent=0
  }
 
  console.log('clicked')
})

//adding to cart

function emp(params) {
  divCath.classList.add('invisible');
empty.classList.add('invisible')
delCon.classList.remove('invisible')
checkout.classList.remove('invisible')
}


order.addEventListener('click',function name(params) {
  const para=pCart.closest('.add-cart')
console.log(para)
let counts=sum * price
  cartVal.innerHTML=sum
   sumEl.textContent=sum
totelEl.textContent=`$${counts}`

return emp()
})




function remove() {
  divCath.classList.remove('invisible');
}
function include() {
 return  emp()
}

 


 carted.addEventListener('click',remove)
user.addEventListener('click',remove)


delBtn.addEventListener('click', function () {

    
      delCon.classList.add('invisible')
      empty.classList.remove('invisible')

      checkout.classList.add('invisible')
      sum=0
      cartVal.innerHTML=sum
      sumEl.innerHTML=sum
    
  delCon.classList.add('invisible')
  checkout.classList.add('invisible')

    
})

//carted.addEventListener('click',remove)
carted.addEventListener('dblclick',include)
user.addEventListener('dblclick',include)

//responsiveness

menuEl.addEventListener('click',function (params) {
  console.log('click')

  divRes.classList.remove('hidden')
  parDivNav.style.display='block'
  
})

closed.addEventListener('click',function () {
  divRes.classList.add('hidden')
  parDivNav.style.display='none'
  console.log('clch')
})

//Go to slide
//console.log(imgSlide)
let curSlide=0
let maxSlide=imgSlide.length
console.log(maxSlide)
//let maxSlide=
//0,100,200,300


imgSlide.forEach((s,i)=>(
  s.style.transform=`translateY(${100*i}%) `
) )


next.addEventListener('click',function (params) {
  // -100,0,100,200
  if (curSlide===maxSlide-1) {
    curSlide=0
    imgSlide.forEach((s,i)=>s.style.transform=`translateY(${100*(i-curSlide) }%) `
 
    )
  }else{
    curSlide++
    imgSlide.forEach((s,i)=>s.style.transform=`translateY(${100*(i-curSlide) }%) `
  
    
    )
  }
  })

prev.addEventListener('click',function (params) {
  if (curSlide<=0) {
    curSlide=maxSlide-1
    imgSlide.forEach((s,i)=>s.style.transform=`translateY(${100*(curSlide-i) }%) `)
  }else{
    curSlide--
    imgSlide.forEach((s,i)=>s.style.transform=`translateY(${100*(curSlide-i) }%) `)
  }

})
