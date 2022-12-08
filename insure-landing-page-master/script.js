const navbar = document.querySelector(".navigation");
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnImg = document.querySelector(".toggle-btn-img");
console.log(toggleBtnImg);

toggleBtn.addEventListener("click", () => {
  const visibility = navbar.getAttribute("data-visible");
  if (visibility === "false") {
    navbar.setAttribute("data-visible", true);
    toggleBtnImg.setAttribute("src", "./images/icon-close.svg");
  } else {
    navbar.setAttribute("data-visible", false);
    toggleBtnImg.setAttribute("src", "./images/icon-hamburger.svg");
  }
});
