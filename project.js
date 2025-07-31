

var kurcard = document.getElementById("kurcard");


// var dem=document.getElementById(dem);
const singleImageView = document.getElementById("singleImageView");

const cardsection = document.getElementById("cardsection");
const modecard = document.getElementById("modecard");

fetch("demo.json")
  .then((res) => res.json())
  .then((item) => {
    item.dem.map((e) => {
      // console.log(e);

      cardsection.innerHTML +=
        ` 
   <section class="card-container">
    <div class="card">
      <img src="${e.img}" alt="Saree 1" />
      <div class="card-body">
        <p>${e.name}</p>
        <h2>${e.price}</h2>
        <button class="btn" onclick="addtocart(${e.id})" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">Add to cart</button>
      </div>
    </div>
    </section>`;
    });
  });

fetch("kurtis.json")
  .then((res) => res.json())
  .then((item) => {
    item.kur.map((e) => {
    
      if (kurcard) {
        kurcard.innerHTML +=
             ` 
   <section class="card-container">
    <div class="card">
      <img src="${e.img}" alt="Saree 1"  />
      <div class="card-body">
        <p>${e.name}</p>
        <h2>${e.price}</h2>
        <button class="btn btn-danger" onclick="addstocart(${e.id})" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">Add to cart</button>
      </div>
    </div>
    </section>`;
      }
    });
  });

fetch("modn.json")
  .then((res) => res.json())
  .then((item) => {
    // console.log(item);

    item.mod.map((e) => {
      // console.log(e);
      if (modecard) {
        modecard.innerHTML +=
              ` 
   <section class="card-container">
    <div class="card">
      <img src="${e.img}" alt="Saree 1" />
      <div class="card-body">
        <p>${e.name}</p>
        <h2>${e.price}</h2>
        <button class="btn" onclick="addsstocart(${e.id})" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">Add to cart</button>
      </div>
    </div>
    </section>`;
      }



    });
  });


var cartdata = document.getElementById("sare");


function addtocart(id) {

  fetch("demo.json")
    .then((res) => res.json())
    .then((data) => {
      data.dem.map((f) => {
        if (f.id == id) {
        
          sare.innerHTML = ` <div class="col"><img src="${f.img}" alt=""  class="suma"></div>
       <div class="col">
        <p>${f.name}</p>
        <p id="sareepriceamount">${f.price}</p>
        <input type="number" name="" id="sareetotalamount" value="1" min="1">
          <button class="btn btn-primary " onclick="gettotalamount('${f.price}')">Total amount</button>
          <p id="displaytotal"></p>
         `
        }
      })
    })

}




function gettotalamount(price) {

  var displaytotal = document.getElementById("displaytotal")

  var sareetotalamount = document.getElementById("sareetotalamount");
  var sum = price;
  var sums = Number(sareetotalamount.value);
  var total = sum * sums;
  console.log(total);
  if (displaytotal) {
    displaytotal.innerHTML = total;
  }


  // let value = totalamount.value
  // let sum = price * value
  // console.log(sum);

  // var sum=priceamount.innerText;
  // displaytotal.innerHTML=displaytotal.eval(price*totalamount.value);
  // console.log(displaytotal);


}


var cartdata = document.getElementById("kurtydata");

function addstocart(id) {
  fetch("kurtis.json")
    .then((res) => res.json())
    .then((data) => {
      data.kur.map((f) => {
        if (f.id == id) {
          kurtydata.innerHTML = ` <div class="col"><img src="${f.img}" alt="" class="suma"></div>
       <div class="col">
        <p>${f.name}</p>
        <p>${f.price}</p>
         <input type="number" name="" id="kurtistotalamount" value="1" min="1">
          <button class="btn btn-primary " onclick="gettotalamounts('${f.price}')">Total amount</button>
          <p id="displaytotal"></p>
       `
        }
      })
    })

}


function gettotalamounts(price) {

  var displaytotal = document.getElementById("displaytotal")

  var kurtistotalamount = document.getElementById("kurtistotalamount");
  var sum = price;
  var sums = kurtistotalamount.value;
  var total = sum * sums;
  console.log(total);
  if (displaytotal) {
    displaytotal.innerHTML = total;
  }


}

var m = document.getElementById("m");

function addsstocart(id) {
  fetch("modn.json")
    .then((res) => res.json())
    .then((data) => {
      data.mod.map((f) => {
        if (f.id == id) {
          m.innerHTML = ` <div class="col"><img src="${f.img}" alt=""  class="suma"></div>
       <div class="col">
        <p>${f.name}</p>
        <p>${f.price}</p>
        <input type="number" name="" id="modntotalamount" value="1" min="1">
          <button class="btn btn-primary " onclick="gettotalamountss('${f.price}')">Total amount</button>
           <p id="displaytotal"></p>

      `
        }
      })
    })

}

function gettotalamountss(price) {

  var displaytotal = document.getElementById("displaytotal")

  var modntotalamount = document.getElementById("modntotalamount");
  var sum = price;
  var sums = modntotalamount.value;
  var total = sum * sums;
  console.log(total);
  if (displaytotal) {
    displaytotal.innerHTML = total;
  }
}


// // ----quantity----

// let quantity = 1;

// function updateDisplay() {
//   document.getElementById('quantity').textContent = quantity;
// }

// function increaseQuantity() {
//   quantity++;
//   updateDisplay();
// }

// function decreaseQuantity() {
//   if (quantity > 1) {
//     quantity--;
//     updateDisplay();
//   }
// }

// // Optional: Load quantity from localStorage
// window.onload = () => {
//   const saved = localStorage.getItem('handbagQty');
//   quantity = saved ? parseInt(saved, 10) : 1;
//   updateDisplay();
// };

// // Save quantity on update
// function updateDisplay() {
//   document.getElementById('quantity').textContent = quantity;
//   localStorage.setItem('handbagQty', quantity);
// }
















