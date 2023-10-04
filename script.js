

const app =(()=>{
  const burgerMenu = document.querySelector('.nav-burger');
  const mobileNavMenu = document.querySelector('.mobile-nav')
  const buttonLeft = document.querySelector('.arrow-left');
  const buttonRight = document.querySelector('.arrow-right');
  const imgWrapper =document.querySelector('.main-img-wrapper');
  const minus =document.querySelector('.minus');
  const plus =document.querySelector('.plus');
  const close =document.querySelector('.close');
  const amountToAdd = document.getElementById('shoppingValue');
  const addToCart = document.getElementById('addToCart');
  let cartInfo = document.querySelector('.cart-active');
  const main = document.querySelector('main')
  const nav = document.querySelector('nav')
  const addItemToCart = document.getElementById('addItemToCart');

  let thumbs = document.querySelectorAll('.thumb');
  let valueOfItems=0;
  let counter=0;
  buttonLeft.style.pointerEvents='none'

  const eventHandler=()=>{

    buttonLeft.addEventListener('click',leftClick)
    buttonRight.addEventListener('click',rightClick)
    plus.addEventListener('click',plusToCart)
    minus.addEventListener('click',minusToCart)
    burgerMenu.addEventListener('click',displayItem)
    close.addEventListener('click',closeNav)
    thumbs.forEach((item,index)=>{
      item.addEventListener('click',()=>{
        let calc = index * -100;
        imgWrapper.style.transform=`translateX(${calc}%)`;

      })
    })
addItemToCart.addEventListener('click',()=>{

cartInfo.style.display='flex'

})

  }

  const displayItem=()=>{

mobileNavMenu.style.display='block'
main.style.opacity='.2';

  }


const rightClick=()=>{
  buttonLeft.style.pointerEvents='auto'
  counter-=100
  imgWrapper.style.transform=`translateX(${counter}%)`;
  if(counter == -300){
    buttonRight.style.pointerEvents='none'
  }

}


const leftClick=()=>{
  counter+=100
  buttonRight.style.pointerEvents='auto'
  imgWrapper.style.transform=`translateX(${counter}%)`
  if(counter == 0 ){
    buttonLeft.style.pointerEvents='none';

  }

}



const plusToCart = ()=>{

valueOfItems+=1;
  amountToAdd.innerHTML=valueOfItems;
cartInformation(valueOfItems)
}
const minusToCart = ()=>{

valueOfItems-=1;
  amountToAdd.innerHTML=valueOfItems;
  cartInformation(valueOfItems)

}

const cartInformation=(valueOfItems)=>{

let price = 125
addToCart.innerHTML=` ${valueOfItems} <strong> ${eval(price * valueOfItems)}.00</strong>`;
}


const desktopThumbNail=(item,index)=>{
  let calc = index * index;
  console.log(index)
imgWrapper.style.transform=`translatex${calc}rem`

console.log(event.target.src)

}

const closeNav =()=>{
mobileNavMenu.style.display='none';
main.style.opacity='1'
}

return{


init:()=>{


eventHandler()
}
//   left:()=>{
//     leftClick();
//   },
//   right:()=>{
//
//     rightClick();
//   }
// }

}

})()

app.init()
