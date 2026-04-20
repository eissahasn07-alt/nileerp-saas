let products = [];
let logged = false;

function login(){
  let email = document.getElementById("email").value;

  if(email){
    logged = true;
    document.getElementById("auth").innerText = "تم الدخول 👌";
  }
}

function addProduct(){
  if(!logged) return alert("سجل دخول الأول");

  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;

  products.push({name,price});
  render();
}

function render(){
  let list = document.getElementById("list");
  list.innerHTML = "";

  products.forEach(p=>{
    list.innerHTML += `<li>${p.name} - ${p.price} جنيه</li>`;
  });
}

function plan(type){
  let prices = {
    basic:50,
    pro:125,
    business:1000
  };

  document.getElementById("sub").innerText =
  "الخطة: " + type + " = " + prices[type] + " جنيه";
}

function askAI(){
  let t = document.getElementById("ai").value;
  let r = "";

  if(t.includes("بيع")) r="تم تجهيز فاتورة 👍";
  else if(t.includes("منتج")) r="تمت الإضافة 😄";
  else r="جاري التحليل 🤖";

  document.getElementById("out").innerText = r;
}
