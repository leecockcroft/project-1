

const app =(()=>{
  const buttonLeft = document.querySelector('.arrow-left');
  const buttonRight = document.querySelector('.arrow-right');
  const imgWrapper =document.querySelector('.main-img-wrapper');
  const minus =document.querySelector('.minus');
  const plus =document.querySelector('.plus');
  const amountToAdd = document.getElementById('shoppingValue');
    const addToCart = document.getElementById('addToCart');

  let cartInfo = document.querySelector('.cart-active');


let valueOfItems=0;
  let counter=0;
  buttonLeft.style.pointerEvents='none'

  const eventHandler=()=>{

    buttonLeft.addEventListener('click',leftClick)
    buttonRight.addEventListener('click',rightClick)
    plus.addEventListener('click',plusToCart)
minus.addEventListener('click',minusToCart)

    minusToCart
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
