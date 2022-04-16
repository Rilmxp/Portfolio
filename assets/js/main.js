const toggleBtn = document.querySelector(".btn-toggle");
const toggleIcon = document.querySelector(".btn-toggle i");
const navListItems = document.querySelectorAll(".page-links li a ");

//// NAVBAR LOGIC ////
/////////////////////
let openMenu = false;

// Toggle button navbar menu
toggleBtn.addEventListener("click", function () {
  navListItems.forEach((item) => item.classList.toggle("show-hide"));
  if (!openMenu) {
    toggleIcon.classList = "fa-solid fa-xmark";
    openMenu = true;
  } else {
    toggleIcon.classList = "fa-solid fa-bars";
    openMenu = false;
  }
});

const mediaObj = window.matchMedia("(min-width: 660px)");

// Show navbar items when init on wide screen
if (mediaObj.matches) {
  navListItems.forEach((item) => item.classList.remove("show-hide"));
}

// show/hide navbar items upon media query change.
mediaObj.onchange = (e) => {
  if (e.matches) {
    if (navListItems[0].classList.contains("show-hide")) {
      navListItems.forEach((item) => item.classList.remove("show-hide"));
    }
  } else {
    navListItems.forEach((item) => item.classList.add("show-hide"));
    openMenu = false;
    toggleIcon.classList = "fa-solid fa-bars";
  }
};
// END NAVBAR LOGIC //
/////////////////////
