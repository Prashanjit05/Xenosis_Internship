let ArrProducts=[
  {
    id:1,
    name:"Product 1",
    image:"srt1.webp",
    price:"1000",
    rating:5,
  },
  {
    id:2,
    name:"Product 2",
    image:"wn4.webp",
    price:"900",
    rating:4,
  },
  {
    id:3,
    name:"Product 3",
    image:"srt6.webp",
    price:"1000",
    rating:5,
  },{
    id:4,
    name:"Product 4",
    image:"wn5.webp",
    price:"1100",
    rating:4,
  },
  {
    id:5,
    name:"Product 1",
    image:"srt2.webp",
    price:"800",
    rating:4,
  },
  {
    id:6,
    name:"Product 6",
    image:"wn6.webp",
    price:"700",
    rating:3,
  },

]
const body=document.querySelector("body"),
products=document.querySelector(".products"),
shoppingBasket=document.querySelector(".shoppingBasket"),
closeCart=document.querySelector(".close"),
productList=document.querySelector(".productList"),
quantity=document.querySelector(".quantity");
total=document.querySelector(".total");

let checkOutList=[];

shoppingBasket.onclick = () => {
 body.classList.add("active");
};

closeCart.onclick = () => {
  body.classList.remove("active");
 };

function onInIt(){
 ArrProducts.forEach((item,key)=>{
  let div=document.createElement("div");
  div.classList.add("item");

  let star="";
  for(i=0;i<item.rating;i++){
    star+=`<i class="fa fa-star"></i>`;
  }

  div.innerHTML=`
  <img src="images/${item.image}"/>
  <div class="name">${item.name}</div>
  <div>${star}</div>
   <div class="price"><small>₹</small>${item.price}</div>
   <button onclick="addToCart(${key})"><i class="fa fa-cart-plus"></i>Add to Cart</button>
  `;
  products.appendChild(div);
 });
}

onInIt();

function addToCart(Id){
  if(checkOutList[Id]==null){
    checkOutList[Id]=ArrProducts[Id];
    checkOutList[Id].quantity=1;
  }
  else{
    checkOutList[Id].quantity+=1;
  }
  reloadCart();
}
function reloadCart(){
  productList.innerHTML="";
  let count = 0;
  let totalPrice = 0;

  checkOutList.forEach((item, key) => {
    totalPrice += parseInt(item.price*item.quantity);
    count += item.quantity;
    let li=document.createElement("li");
    li.innerHTML=`
    <img src="images/${item.image}">
    <div>${item.name}</div>
    <div >${item.price}</div>
    <div>
    <button onclick="changeQuantity(${key},${item.quantity-1})">-</button>
    <div class="count">${item.quantity}</div>
     <button onclick="changeQuantity(${key},${item.quantity+1})">+</button>
    </div>
    `;

    productList.appendChild(li);
  });

  total.innerHTML=`<small>Subtotal(${count} items)₹</small>`+totalPrice;
  quantity.innerHTML=count;
}

function changeQuantity(key,quantity){
  if(quantity==0){
    delete checkOutList[key];
  }
  else{
    checkOutList[key].quantity=quantity;
  }
  reloadCart();
}