let opencart=document.querySelector(".cart-box")

function openmodel(){
  opencart.classList.add("cart-box-active")
}
function closemodel(){
    opencart.classList.add("cart-box-close")
  }

  ////onlodefunction////
  document.addEventListener('DOMContentLoaded',loadfood);
  function loadfood(){
    contant();
  }
  
  ////trash remove////
  function contant(){
    let trashbtn=document.querySelectorAll(".deletstrash");
     trashbtn.forEach((btn)=>{
        btn.addEventListener('click',removetrash);
     })

  ////quantity///
 let quanty=document.querySelectorAll(".quantity");
   quanty.forEach((inputs)=>{
    inputs.addEventListener('change',quantitychange)
   })

   
  /////cart add///

  let crtbtn=document.querySelectorAll(".carts");
  crtbtn.forEach((crt)=>{
    crt.addEventListener('click',addcart)
  })

  totalamount();
  }

  function removetrash(){
   if(confirm("Are you sure to remove !!!")){
   
  let storetit=this.parentElement.querySelector(".cartfood-title").innerHTML;


    this.parentElement.remove();
    
    ary=ary.filter(els=>els.title!=storetit)
    contant();
   }
  }
function quantitychange(){
    if(isNaN(this.value) || this.value<1){
        this.value=1
    }
    contant();
}

let ary=[]


function addcart(){
 let totalcatrs=this.parentElement;
let title=totalcatrs.querySelector(".tamilfood").innerHTML;
 let price=totalcatrs.querySelector(".pricelist").innerHTML;
let image=totalcatrs.querySelector(".imgs").src;
let crtelement=cartitams(title,price,image);

//////crtone time store ///
let cartelements={title,price,image}
if(ary.find((el)=>el.title==cartelements.title)){
  alert("product alred add in cart");
  return;
}
else{
  ary.push(cartelements)
}


let element=document.createElement('div');
element.innerHTML=crtelement


let box=document.querySelector(".cartcontant");



box.append(element);
contant();

}

function cartitams(title,price,image){
  return  `
                <div class="box-detial">
                  <img src="${image}" class="images">
                <div class="cartfood-title">${title}</div>
               <div class="price-box">
                  <div class="cart-price">${price}</div>
                  <div class="cart-amt">${price}</div>
                </div>
                <input type="number" value="1" class="quantity">
                <span class="material-symbols-outlined deletstrash">delete </span>
                </div>
  
  `;
}

function totalamount(){
  const totalelements=document.querySelectorAll(".box-detial");
  const totalprice=document.querySelector(".total-price");//its finall total//

  let total=0;

  totalelements.forEach(element=>{
      let crtprice=element.querySelector(".cart-price");
      let prices= parseFloat(crtprice.innerHTML.replace("RS.",""));
    
/////quantity///
    let qty=element.querySelector(".quantity").value;
   total+=(prices*qty)

/////cart-amt////
    element.querySelector(".cart-amt").innerHTML="RS."+(prices*qty);
  })
  
    totalprice.innerHTML="RS."+total;


    ///add cart count ///
    let count=document.querySelector(".cartcount");
    let countotal=ary.length;
    count.innerHTML=countotal;
}
