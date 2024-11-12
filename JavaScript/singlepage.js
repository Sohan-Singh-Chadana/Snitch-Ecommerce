// footer click evente
const open_click_footer = document.querySelector('.open_click_footer');
const hide_footer = document.querySelector(".hide-footer");

open_click_footer.addEventListener("click", () => togglefooter());

const togglefooter = () => {
  // alert("hello sohan")
  hide_footer.classList.toggle("hide-footer-active");
};


