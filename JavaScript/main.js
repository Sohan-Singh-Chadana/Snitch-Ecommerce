

// Sticky NavBar Scrolling Nav Bar
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("nav_section");
  navbar.classList.toggle("nav_section_background", window.scrollY > 100);
  // if (window.scrollY > 200) {
  //   navbar.classList.add("nav_section_background");
  //   navbar.classList.remove("nav_section_background2");
  // } else {
  //   navbar.classList.remove("nav_section_background");
  //   navbar.classList.add("nav_section_background2");
  // }
});

// scrolling top btn 
window.addEventListener("scroll" , function() {
  var cornerBtn = document.querySelector(".corner-btn");
  cornerBtn.classList.toggle("corner-btn-show" , window.scrollY > 100);
})

// SideBar Open and Close
const menu_bar = document.querySelector(".menu_bar");
const sideBarSection = document.querySelector(".side_bar_section");

menu_bar.addEventListener("click", () => toggleSidebar());

const toggleSidebar = () => {
  // alert('Hello Sohan')
  sideBarSection.classList.toggle("side_bar_section_active");
  document.body.classList.toggle("bodyOverflow");
};

// CartSection Open and Close
const shoppingBag = document.querySelector(".shopping-bag");
const Cart_section = document.querySelector(".Cart_section");

shoppingBag.addEventListener("click" , () => ToggleCartSection());

const ToggleCartSection = () => {
  // alert('Hello Sohan')
  Cart_section.classList.toggle("Cart_section_active");
  document.body.classList.toggle("bodyOverflow");
}

// Search bar open and close
const SearchBar = document.querySelector(".search-bar");
const Search_section = document.querySelector(".Search_section")

SearchBar.addEventListener("click" , () => toggleSearch());

const toggleSearch = () => {
  // alert("hello sohan");
  Search_section.classList.toggle("Search_section_active")
};

// Camera Section Open and Close
const cameraSearch = document.querySelector(".camera-search");
const cameraSection = document.querySelector(".camera_section");

cameraSearch.addEventListener("click" , () => toggleCamera());

const toggleCamera = () => {
  cameraSection.classList.toggle("camera_section_active");
  document.body.classList.toggle("bodyOverflow");
};

// wish Section open and close
const wishbtn = document.querySelector(".wish_cart");
const wish_section = document.querySelector(".wish_section");

wishbtn.addEventListener("click" , () => togglewishbtn());
const togglewishbtn = () => {
  wish_section.classList.toggle("wish_section_active")
  document.body.classList.toggle("bodyOverflow");
}



// Menu Bar Open and Close
const DownArrow = document.querySelector(".down_arrow");
const LinkList = document.querySelector(".LinkList");

DownArrow.addEventListener("click", () => toggleMenuBar());

const toggleMenuBar = () => {
  // alert("hello sohan")
  LinkList.classList.toggle("LinkList_active");
  DownArrow.classList.toggle("ri-arrow-up-s-line");
};

// second Menu bar open
// const InnerArrow = document.querySelector('.inner_arrow');
// const LinkListOne = document.querySelector('.LinkList_one');

// InnerArrow.addEventListener("click", () => secondtoggleMenu());

// const secondtoggleMenu = () =>{
//   // alert("Sohan")
//   LinkListOne.classList.toggle("LinkList_one_active");
//   InnerArrow.classList.toggle("ri-arrow-up-s-line")
// }


// second Menu bar open
const flist = document.getElementById('flist');
function Toggle(id) {
  let LINkLIStOpen = document.getElementById(id);
  LINkLIStOpen.classList.toggle("LinkList_one_active");
}
function change(div) {
  const InnerArrow = document.getElementById(div);
  InnerArrow.classList.toggle("ri-arrow-up-s-line");
}


// product list in array 

// const cloths = [
//     {
//         id: 1,
//         title: 'Pure Opulence',
//         description: "Fall in love with all-white shirts",
//         img: 'https://www.snitch.co.in/cdn/shop/files/Untitled_design_1_65cdec90-6cd4-4be9-b171-56c200c04f7f.png?v=1690898699',
//     },
//     {
//         id: 2,
//         title: 'Linen Reverie',
//         description: "A Sanctuary of Comfort & Grace",
//         img: 'https://www.snitch.co.in/cdn/shop/files/linen_resized_1_2e29f7ad-094d-439c-97f7-c201a8c052c4.webp?v=1690638188'
//     },
//     {
//         id: 3,
//         title: 'Y2K',
//         description: "Timeless Styles, Future-Forward",
//         img: 'https://www.snitch.co.in/cdn/shop/files/y2k_resized_5d8ea962-77b6-4bec-a54f-810991cb6f0c.webp?v=1690638188'
//     },
//     {
//         id: 4,
//         title: 'Pop prints',
//         description: "Threads of Art",
//         img: 'https://www.snitch.co.in/cdn/shop/files/prints_resized_95906667-1249-48bf-83aa-84ce444f58fa.webp?v=1690638188'
//     },
// ]

// let Pro_wrapper = document.querySelector('.Pro_wrapper');

// cloths.map((product) => {
//     Pro_wrapper.innerHTML +=  
//     `
//     <div class="pro_inner_wrapper">
//         <div class="pro_img">
//             <a href="#"><img src="${product.img}" alt=""></a>
//         </div>
//         <h2><a href="#">${product.title}</a></h2>
//         <h4><a href="#">${product.description}</a></h4>
//     </div>
    
//     `
// })



// product list 1

const ProductList = [
  {
    id: 1,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/products/Geovani_22ndNov54059_360x.jpg?v=1671105813',
    img2:'https://www.snitch.co.in/cdn/shop/products/Geovani_22ndNov54062_360x.jpg?v=1671105813',
    price: 999.00,
  },
  {
    id: 2,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/products/Geovani_22ndNov54090_360x.jpg?v=1671105702 ',
    img2:'https://www.snitch.co.in/cdn/shop/products/Geovani_22ndNov54077_360x.jpg?v=1671105702',
    price: 999.00,
  },
  {
    id: 3,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/products/Snitch_18thJun22_7097_59d8d929-37df-4d1c-b654-b5cbd3a444f7_360x.jpg?v=1663086621',
    img2:'https://www.snitch.co.in/cdn/shop/products/Snitch_18thJun22_7086_9be918af-9c78-4f1c-a296-79a6fe837103_360x.jpg?v=1663086621',
    price: 999.00,
  },
  {
    id: 4,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/products/Snitch_18thJun22_7199_360x.jpg?v=1656067839',
    img2:'https://www.snitch.co.in/cdn/shop/products/F-H_3704e73d-5bbe-4f0b-bc8c-91003e589215_360x.jpg?v=1656067839',
    price: 999.00,
  },
  {
    id: 5,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/products/Snitch_18thJun22_7097_0518c82f-4b2b-4372-b386-a54454ff8790_360x.jpg?v=1663086617',
    img2:'https://www.snitch.co.in/cdn/shop/products/Snitch_18thJun22_7086_4ba59664-cdc4-405b-9acc-f01218f9d175_360x.jpg?v=1663086617',
    price: 999.00,
  },
  {
    id: 6,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/products/FH_360x.jpg?v=1656074340',
    img2:'https://www.snitch.co.in/cdn/shop/products/F-h-1_360x.jpg?v=1656074340',
    price: 1999.00,
  },
  {
    id: 7,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/products/Snitch_18thJun22_7215_360x.jpg?v=1656067967',
    img2:'https://www.snitch.co.in/cdn/shop/products/H-f_360x.jpg?v=1656067967',
    price: 1999.00,
  },
  {
    id: 8,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/products/Snitch_18thJun22_7074_360x.jpg?v=1656067981',
    img2:'https://www.snitch.co.in/cdn/shop/products/Snitch_18thJun22_7086_360x.jpg?v=1656067981',
    price: 1999.00,
  },
  {
    id: 9,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/products/Geovani_22ndNov52747_1800x1800.jpg?v=1691930124',
    img2:'https://www.snitch.co.in/cdn/shop/products/f_6b53ca38-dd21-4d24-975b-614879f059a9_360x.jpg?v=1691930124',
    price: 1599.00,
  },
  {
    id: 10,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/files/4MSS2083-02-M39_360x.jpg?v=1690896213',
    img2:'https://www.snitch.co.in/cdn/shop/files/4MSS2083-02-M45_360x.jpg?v=1690896213',
    price: 1599.00,
  },
  {
    id: 11,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/files/4MSS2083-03-M27_360x.jpg?v=1690896234',
    img2:'https://www.snitch.co.in/cdn/shop/files/4MSS2083-03-M40_360x.jpg?v=1690896234',
    price: 1599.00,
  },
  {
    id: 12,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/files/4MSS2083-01-M25_360x.jpg?v=1690896203',
    img2:'https://www.snitch.co.in/cdn/shop/files/4MSS2083-01-M45_360x.jpg?v=1690896203',
    price: 1599.00,
  },
  // {
  //   id: 13,
  //   title: 'Pure Opulence',
  //   description: "Fall in love with all-white shirts",
  //   img: 'https://www.snitch.co.in/cdn/shop/files/4MSS2304-04-M39_360x.jpg?v=1690807448',
  //   img2:'https://www.snitch.co.in/cdn/shop/files/4MSS2304-04-M60_360x.jpg?v=1690807448',
  //   price: 1699.00,
  // },
  // {
  //   id: 14,
  //   title: 'Pure Opulence',
  //   description: "Fall in love with all-white shirts",
  //   img: 'https://www.snitch.co.in/cdn/shop/files/4MSS2032-06-M45_360x.jpg?v=1690912096',
  //   img2:'https://www.snitch.co.in/cdn/shop/files/4MSS2032-06-M43_360x.jpg?v=1690912096',
  //   price: 1699.00,
  // },
  // {
  //   id: 15,
  //   title: 'Pure Opulence',
  //   description: "Fall in love with all-white shirts",
  //   img: 'https://www.snitch.co.in/cdn/shop/files/4MSD3609-02-3216_360x.jpg?v=1690796042',
  //   img2:'https://www.snitch.co.in/cdn/shop/files/4MSD3609-02-3210_360x.jpg?v=1690796042',
  //   price: 2599.00,
  // },
  // {
  //   id: 16,
  //   title: 'Pure Opulence',
  //   description: "Fall in love with all-white shirts",
  //   img: 'https://www.snitch.co.in/cdn/shop/files/4MTP0010-01-30D_360x.jpg?v=1690707750',
  //   img2:'https://www.snitch.co.in/cdn/shop/files/4MTP0010-01-30DD12_360x.jpg?v=1690707750',
  //   price: 699.00
  // },
]

let Product_wrapper = document.getElementById('Product_wrapper');

ProductList.map((Product1) => {
  
  Product_wrapper.innerHTML +=
  
  `
  <div class="product_inner_wrapper" data-aos="fade-down">
        <div class="pro_img" >
            <a href="./shop.html"><img src="${Product1.img}" alt="" ></a>
            <div class="overlay">
            <a href="./shop.html"><img src="${Product1.img2}" alt="" class="seimg"></a>
            </div>
            
        </div>
        <div class="desc">
          <h2>${Product1.title}</h2>
          <h4>Rs. ${Product1.price}</h4>
          <div class="size" id="size">
            <span class="Cl-h Cl-hai">s</span>
            <span class="Cl-h">m</span>
            <span class="Cl-h">l</span>
            <span class="Cl-h">xl</span>
          </div>
        </div>
    </div>
  
  `

})


// Add active class to the current button (highlight it)
const size = document.getElementById("size");
const Cl_H = size.getElementsByClassName("Cl-h");
for (let index = 0; index < Cl_H.length; index++) {
  Cl_H[index].addEventListener("click", function () {
    const current = document.getElementsByClassName("Cl-hai");
    current[0].className = current[0].className.replace(
      " Cl-hai",
      " "
    );
    this.className += " Cl-hai";
  });
}
// Add active class to the current button (highlight it) shouse section
function activeclass(){
const sizeg = document.getElementById("sizeg");
const Cl_H1 = sizeg.getElementsByClassName("Cl-h1");
  for (let index = 0; index < Cl_H1.length; index++) {
    Cl_H1[index].addEventListener("click", function () {
      const current = document.getElementsByClassName(" Cl-h1_H");
      current[0].className = current[0].className.replace(
        " Cl-h1_H",
        " "
      );
      this.className += " Cl-h1_H";
    });
  }
}
activeclass();





// product list 2

const ProductListSecond = [
  {
    id: 17,
    title: 'sohan',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/files/Snitch_sep21_0610_2332a499-efa6-45e8-b974-4034649daf2c_360x.jpg?v=1690380204',
    img2:'https://www.snitch.co.in/cdn/shop/files/Snitch_sep21_0635_78173643-d8e3-40cd-abd7-8cd1ac308d14_360x.jpg?v=1690380204',
    price:  999.00,
  },
  {
    id: 18,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/files/4MST2075-01-M17_360x.jpg?v=1690298610 ',
    img2:'https://www.snitch.co.in/cdn/shop/files/4MST2075-01-M76_360x.jpg?v=1690298610',
    price: 999.00,
  },
  {
    id: 19,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/files/4MST2075-02-M10_d4b7da2d-c10f-409f-af5d-55b563808504_360x.jpg?v=1690298546',
    img2:'https://www.snitch.co.in/cdn/shop/files/4MST2075-02-M21_2aca86d2-54c6-4d5a-b96d-6b01a8ffa1c8_360x.jpg?v=1690298546',
    price: 999.00,
  },
  {
    id: 20,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/files/4MST2080-01-M14777_360x.jpg?v=1686661049',
    img2:'https://www.snitch.co.in/cdn/shop/files/4MST2080-01-M14756_360x.jpg?v=1686661049',
    price: 999.00,
  },
  {
    id: 21,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/files/4MST2080-04-M15189_360x.jpg?v=1686661422',
    img2:'https://www.snitch.co.in/cdn/shop/files/4MST2080-04-M15194_360x.jpg?v=1686661422',
    price: 999.00,
  },
  {
    id: 22,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/files/4MST2080-02-M15117_360x.jpg?v=1686661268',
    img2:'https://www.snitch.co.in/cdn/shop/files/4MST2080-02-M15126_360x.jpg?v=1686661268',
    price: 1999.00,
  },
  {
    id: 23,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/products/Snitch_sep21_1409_360x.jpg?v=1659163689',
    img2:'https://www.snitch.co.in/cdn/shop/products/Snitch_sep21_1403_6c8dcb26-9506-4fcd-a8a0-b1020c18a6b7_360x.jpg?v=1659163689',
    price: 1999.00,
  },
  {
    id: 24,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/files/4MSD3607-01-3269_360x.jpg?v=1689840787',
    img2:'https://www.snitch.co.in/cdn/shop/files/4MSD3607-01-3272_360x.jpg?v=1689840787',
    price: 1999.00,
  },
  {
    id: 25,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/files/4MST2076-02-M4763_360x.jpg?v=1682704504',
    img2:'https://www.snitch.co.in/cdn/shop/files/4MST2076-02-M4760_360x.jpg?v=1682704504',
    price: 1599.00,
  },
  {
    id: 26,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/products/SNITCH-JUNE1504_360x.jpg?v=1655120022',
    img2:'https://www.snitch.co.in/cdn/shop/products/SNITCH-JUNE1509_360x.jpg?v=1655120022',
    price: 1699.00
  },
  {
    id: 27,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/products/Geovani_22ndNov52107_360x.jpg?v=1670261072',
    img2:'https://www.snitch.co.in/cdn/shop/products/Geovani_22ndNov52159_360x.jpg?v=1670261079',
    price: 1799.00
  },
  {
    id: 28,
    title: 'Pure Opulence',
    description: "Fall in love with all-white shirts",
    img: 'https://www.snitch.co.in/cdn/shop/products/JUNE-30223_360x.jpg?v=1655194632',
    img2:'https://www.snitch.co.in/cdn/shop/products/JUNE-30225_360x.jpg?v=1655194632',
    price: 599.00
  },
  // {
  //   id: 29,
  //   title: 'Pure Opulence',
  //   description: "Fall in love with all-white shirts",
  //   img: 'https://www.snitch.co.in/cdn/shop/files/4MST2107-01-M38_360x.jpg?v=1689837199',
  //   img2:'https://www.snitch.co.in/cdn/shop/files/4MST2107-01-M31_360x.jpg?v=1689841138',
  //   price: 1299.00
  // },
  // {
  //   id: 30,
  //   title: 'Pure Opulence',
  //   description: "Fall in love with all-white shirts",
  //   img: 'https://www.snitch.co.in/cdn/shop/files/4MSS1900-02-M10651_360x.jpg?v=1686640743',
  //   img2:'https://www.snitch.co.in/cdn/shop/files/4MSS1900-02-M10668_360x.jpg?v=1686640743',
  //   price: 1199.00
  // },
  // {
  //   id: 31,
  //   title: 'Pure Opulence',
  //   description: "Fall in love with all-white shirts",
  //   img: 'https://www.snitch.co.in/cdn/shop/products/Lazar_Oct16186_360x.jpg?v=1676639998',
  //   img2:'https://www.snitch.co.in/cdn/shop/products/Lazar_Oct16177_360x.jpg?v=1676639998',
  //   price: 2399.00
  // },
  // {
  //   id: 32,
  //   title: 'Pure Opulence',
  //   description: "Fall in love with all-white shirts",
  //   img: 'https://www.snitch.co.in/cdn/shop/products/Lazar_7thNov40594_360x.jpg?v=1669622893',
  //   img2:'https://www.snitch.co.in/cdn/shop/products/Lazar_7thNov40603_360x.jpg?v=1669622893',
  //   price: 1199.00
  // },
]



let Product_wrapper2 = document.querySelector('.Product_wrapper2');

ProductListSecond.map((ProductListSecond) => {
  Product_wrapper2.innerHTML +=
  `
  <div class="product_inner_wrapper2" data-aos="fade-up">
        <div class="pro_img2">
            <a href="./shop.html"><img src="${ProductListSecond.img}" alt=""></a>
            <div class="overlay">
            <a href="./shop.html"><img src="${ProductListSecond.img2}" alt="" class="seimg"></a>
            </div>
        </div>
        <div class="desc2">
          <h2>${ProductListSecond.title}</h2>
          <h4>Rs. ${ProductListSecond.price}</h4>
          <div class="size2">
            <span>s</span>
            <span>m</span>
            <span>l</span>
            <span>xl</span>
            <span>xxl</span>
          </div>
        </div>
    </div>
  
  `
})



// Product List 3

const ProductListThree = [
  {
    id: 63,
    title: 'Fragrances',
    img: 'https://www.snitch.co.in/cdn/shop/collections/Snitch_May22_9697.jpg?v=1691679294&width=540'
  },
  {
    id: 64,
    title: 'Accessories',
    img: 'https://www.snitch.co.in/cdn/shop/collections/4MST2074-01-M4874.jpg?v=1682779778&width=540'
  },
  {
    id: 51,
    title: 'Shirts',
    img: 'http://www.snitch.co.in/cdn/shop/collections/2_360x.jpg?v=1680513003',
  },
  {
    id: 52,
    title: 't-Shirts',
    img: 'http://www.snitch.co.in/cdn/shop/collections/005_360x.jpg?v=1680514787',
  },
  {
    id: 53,
    title: 'Jeans',
    img: 'http://www.snitch.co.in/cdn/shop/collections/09_360x.jpg?v=1680514544'
  },
  {
    id: 54,
    title: 'Co-Ordes',
    img: 'http://www.snitch.co.in/cdn/shop/collections/Mushroom_White_Co-Ords_af9f585b-c383-4b26-a1b6-5fe1bf48f164_360x.jpg?v=1666954434'
  },
  {
    id: 55,
    title: 'Chinos',
    img: 'http://www.snitch.co.in/cdn/shop/collections/Snitch_Feb21_3288_507d7464-c261-477e-8795-22cb539441cc_360x.jpg?v=1688731876'
  },
  {
    id: 56,
    title: 'Joggers',
    img: 'http://www.snitch.co.in/cdn/shop/collections/04_360x.jpg?v=1666954698'
  },
  {
    id: 57,
    title: 'Shorts',
    img: 'http://www.snitch.co.in/cdn/shop/collections/02_360x.jpg?v=1688974172'
  },
  {
    id: 58,
    title: 'Jackets',
    img: 'http://www.snitch.co.in/cdn/shop/collections/1_2_ebed9700-b2b5-44b1-8053-6cde8889c838_360x.jpg?v=1680514729'
  },
  {
    id: 59,
    title: 'Sweaters & Hoodies',
    img: 'http://www.snitch.co.in/cdn/shop/collections/k_360x.jpg?v=1680514663'
  },
  {
    id: 60,
    title: 'Boxers',
    img: 'http://www.snitch.co.in/cdn/shop/collections/ab_360x.jpg?v=1637751609'
  },
  {
    id: 61,
    title: 'Night Suits & Pyjamas',
    img: 'http://www.snitch.co.in/cdn/shop/collections/Aqua_Navy_Pyjama_360x.jpg?v=1656653331'
  },
  {
    id: 62,
    title: 'Innerwear &amp; Boxers',
    img: 'http://www.snitch.co.in/cdn/shop/collections/fdbb_360x.jpg?v=1656652439'
  },
  
]
 

let Product_wrapper3 = document.querySelector('.Product_wrapper3');

ProductListThree.map((ProductListThree) => {
  Product_wrapper3.innerHTML += 
  `
  <div class="product_inner_wrapper3" data-aos="fade-up">
        <div class="pro_img3">
            <a href="./shop.html"><img src="${ProductListThree.img}" alt=""></a>
        </div>
        <div class="desc3">
          <h2><a href="./shop.html">${ProductListThree.title}</a></h2>
        </div>
  </div>

  `
})



