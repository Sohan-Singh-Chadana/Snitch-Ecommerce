// let count1 = document.getElementById("count1");
// let wish_menu = document.querySelector(".wish_cart");
// let count2 = document.getElementById("count2");
// let tooltiptext = document.querySelector(".tooltiptext");
// let wishItem = document.getElementById("wishItem");
// var wishCart = JSON.parse(localStorage.getItem("wishCart")) || [];
// let changetext = document.getElementById("changetext");
// // Function to save the cart to localStorage
// function saveWishCartToLocalStorage() {
//   localStorage.setItem("wishCart", JSON.stringify(wishCart));
// }


// // add to wish
// const AddtoWish = (id) => {
//   let obj = mahi.find((x) => x.id == id);
//   if (wishCart.find((x) => x.id == id)) {
//     alert("This Item is already eists in Your Wishlist");
//     changetext.innerHTML = "<span>Rmove To Wishlist</span>"
//   } else {
//     wishItem.innerHTML = wishCart.push(obj);
//     changetext.innerHTML = "<span>Add to Wishlist</span>"
//   }

//   if (wishCart.find((x) => x.id == id)) {
//     wish_menu.classList.add("ri-hearts-fill");
//   } else {
//     wish_menu.classList.remove("ri-hearts-fill");
//   }
//   count1.innerHTML = wishCart.length;
//   count2.innerHTML = wishCart.length;

//   wishItem.innerHTML =

//     wishCart.length ? wishCart
//       .map((x) => {
//         return `
//         <div class="product-viw">
//             <div class="img">
//                 <img src=${x.img}>
//             </div>
//             <div class="pro-deta">
//                 <div class="title">
//                 <p>${x.title}</p>
//                 </div>
//                 <div class="price_list">
//                 <p> Rs. ${x.price}</p>
//                 </div>
//                 <div class="wrap">
//                     <div class="addcart">
//                         <button onclick='AddtoCart(${x.id})'>Add To Cart</button>
//                     </div>
//                     <div class="remove" onclick='RemoveToWish(${x.id})'>
//                         <i class="ri-delete-bin-line" ></i>
//                     </div>
//                 </div>
//             </div>
//         </div>`;
//       })
//       .join(" ")
//       : '<p class="wishtext">your wishlist is empty</p>';

//   Product_wrapper_main.innerHTML = mahi
//     .map((x) => {
//       let numMahi = Math.trunc(Math.random() * 10000000);
//       let existing = cart.find((y) => y.id == x.id);
//       let exit = wishCart.find((z) => z.id == x.id);
//       let exit2 = wishCart.find((a) => a.id == x.id);
    

//       return `
//       <div class="product_inner_wrapper_main" data-aos="fade-up">
//       <div class="pro_img_main">
//         <a href="SingleProductPage.html"><img src="${x.img
//         }" alt="" class="main_pro_img"></a>
//         <div class="overlay">
//          <a href="SingleProductPage.html"><img src="${x.img2
//         }"  class="main_pro_img seimg"></a>
//         </div>
//         <div class="addwish_div">
//           <div class="wishLIst">
//             <div class="wishIcone" onclick="AddtoWish(${x.id})"><i class="${exit ? "ri-heart-fill" : " ri-heart-line" }  "  style="color: red;"></i></div>
//           </div>
//           <div class="tooltip">
//               <span class="tooltiptext" id="changetext"> ${exit2 ?  changetext.innerHTML = "Remove To Wishlist" :  changetext.innerHTML = "Add To Wishlist"}</span>
//           </div>
//         </div>
//         <div class="Cart_div">
//           <div class="cart_list" onclick='AddtoCart(${x.id
//         }),ToggleCartSection()'>
//             <div class="Carticon"><i class="${existing ? "fa-solid fa-bag-shopping" : "ri-shopping-bag-line"
//         }" id="carticone" ></i> </div>
//           </div>
//         </div>
//       </div>
//       <div class="desc_main">
//         <h2><span>${x.title}</span></h2>
//         <h4><span>Rs. ${x.price}</span></h4>
//         <div class="size_main" id="size_main">
//         <div onclick='ActiveBtn(this,"mahi${numMahi}")' class="highlights-btn mahi${numMahi} badaldo" ><span>s</span></div>
//         <div class="highlights-btn mahi${numMahi}" id='active1' onclick='ActiveBtn(this,"mahi${numMahi}")' ><span>l</span></div>
//         <div class="highlights-btn mahi${numMahi}" id='active2' onclick='ActiveBtn(this,"mahi${numMahi}")' ><span>m</span></div>
//         <div class="highlights-btn mahi${numMahi}" id='active3' onclick='ActiveBtn(this,"mahi${numMahi}")' ><span>xl</span></div>
//         <div class="highlights-btn mahi${numMahi}" id='active4' onclick='ActiveBtn(this,"mahi${numMahi}")' ><span>xxl</span></div>
// </div>
//       </div>
//     </div>
//         `;
//     })
//     .join("");
//   saveWishCartToLocalStorage();
// };



// // Remove to Wish list
// const RemoveToWish = (id) => {
//   wishCart = wishCart.filter((x) => x.id != id);

//   // wish_menu.classList.remove("ri-hearts-fill");
//   if (wishCart.find((x) => x.id == id)) {
//     wish_menu.classList.add("ri-hearts-fill");
//   } else {
//     wish_menu.classList.remove("ri-hearts-fill");
//   }

//   count1.innerHTML = wishCart.length;
//   count2.innerHTML = wishCart.length;
//   wishItem.innerHTML = wishCart.length
//     ? wishCart
//       .map((x) => {
//         return `
//         <div class="product-viw">
//             <div class="img">
//                 <img src=${x.img}>
//             </div>
//             <div class="pro-deta">
//                 <div class="title">
//                 <p>${x.title}</p>
//                 </div>
//                 <div class="price_list">
//                 <p> Rs. ${x.price}</p>
//                 </div>
//                 <div class="wrap">
//                     <div class="addcart">
//                         <button onclick='AddtoCart(${x.id})'>Add To Cart</button>
//                     </div>
//                     <div class="remove" onclick='RemoveToWish(${x.id})'>
//                         <i class="ri-delete-bin-line" ></i>
//                     </div>
//                 </div>
//             </div>
//         </div>`;
//       })
//       .join(" ")
//     : '<p class="wishtext">your wishlist is empty</p>';

//   Product_wrapper_main.innerHTML = mahi
//     .map((x) => {
//       let numMahi = Math.trunc(Math.random() * 10000000);
//       let existing = cart.find((y) => y.id == x.id);
//       let exit = wishCart.find((z) => z.id == x.id);
//       // let exit2 = wishCart.find((a) => a.id == x.id);

//       return `
//       <div class="product_inner_wrapper_main" data-aos="fade-up">
//       <div class="pro_img_main">
//         <a href="SingleProductPage.html"><img src="${x.img
//         }" alt="" class="main_pro_img"></a>
//         <div class="overlay">
//          <a href="SingleProductPage.html"><img src="${x.img2
//         }"  class="main_pro_img seimg"></a>
//         </div>
//         <div class="addwish_div">
//           <div class="wishLIst">
//           <div class="wishIcone" onclick="AddtoWish(${x.id})"><i class="${exit ? "ri-heart-fill" : " ri-heart-line" } "  style="color: red;"></i></div>
//           </div>
//           <div class="tooltip">
//           <span class="tooltiptext" id="changetext"> ${exit ?  changetext.innerHTML = "Remove To Wishlist" :  changetext.innerHTML = "Add To Wishlist"}</span>
//           </div>
//         </div>
//         <div class="Cart_div">
//           <div class="cart_list" onclick='AddtoCart(${x.id
//         }),ToggleCartSection()'>
//             <div class="Carticon"><i class="${existing ? "fa-solid fa-bag-shopping" : "ri-shopping-bag-line"
//         }" id="carticone" ></i> </div>
//           </div>
//         </div>
//       </div>
//       <div class="desc_main">
//         <h2><span>${x.title}</span></h2>
//         <h4><span>Rs. ${x.price}</span></h4>
//         <div class="size_main" id="size_main">
//         <div onclick='ActiveBtn(this,"mahi${numMahi}")' class="highlights-btn mahi${numMahi} badaldo" ><span>s</span></div>
//         <div class="highlights-btn mahi${numMahi}" id='active1' onclick='ActiveBtn(this,"mahi${numMahi}")' ><span>l</span></div>
//         <div class="highlights-btn mahi${numMahi}" id='active2' onclick='ActiveBtn(this,"mahi${numMahi}")' ><span>m</span></div>
//         <div class="highlights-btn mahi${numMahi}" id='active3' onclick='ActiveBtn(this,"mahi${numMahi}")' ><span>xl</span></div>
//         <div class="highlights-btn mahi${numMahi}" id='active4' onclick='ActiveBtn(this,"mahi${numMahi}")' ><span>xxl</span></div>
// </div>
//       </div>
//     </div>
//         `;
//     })
//     .join("");
//   saveWishCartToLocalStorage();
// };

// const ActiveBtn = (mahi, magan) => {
//   let combine = "." + magan;
//   let actives = document.querySelectorAll(combine);
//   console.log(actives);
//   for (let i of actives) {
//     i.classList.remove("badaldo");
//   }
//   mahi.classList.add("badaldo");
// };


