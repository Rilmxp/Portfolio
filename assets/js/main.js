"use strict";
///////////////////
//// NAVBAR   ////

const toggleBtn = document.querySelector(".btn-toggle button");
const toggleIcon = document.querySelector(".btn-toggle button i");
const navListItems = document.querySelectorAll(".page-links li a ");
const menuList = document.querySelector("#menu");

let openMenu = false;

// display menu when clicking on toggle Button
toggleBtn.addEventListener("click", function () {
  displayMenu(navListItems);
});

// close menu when click on list item
menuList.addEventListener("click", function (event) {
  if (openMenu === true) {
    if (event.target.tagName !== "UL" && event.target.closest("LI")) {
      displayMenu(navListItems);
    }
  }
});

// close menu when click outside of it.
window.addEventListener("click", function (event) {
  if (openMenu === true && !event.target.closest(".main-menu")) {
    displayMenu(navListItems);
  }
});

// Show navbar items when init on wide screen
const mediaObj = window.matchMedia("(min-width: 670px)");

if (mediaObj.matches) {
  navListItems.forEach((item) => item.classList.remove("show-hide"));
  toggleBtn.setAttribute("aria-expanded", "true");
  openMenu = false;
}

mediaObj.onchange = (e) => {
  // media < 670px
  if (!e.matches) {
    navListItems.forEach((item) => item.classList.add("show-hide"));
    toggleIcon.classList = "fa-solid fa-bars";
    toggleBtn.setAttribute("aria-expanded", "false");
  } else {
    navListItems.forEach((item) => item.classList.remove("show-hide"));
    toggleBtn.setAttribute("aria-expanded", "true");
    openMenu = false;
  }
};

// FUNCTION Open / close navbar menu. //
function displayMenu(menuItems) {
  menuItems.forEach((item) => item.classList.add("show-hide"));
  if (openMenu === true) {
    toggleIcon.classList = "fa-solid fa-bars";
    openMenu = false;
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.classList.toggle("btn-rotate");
    // menuItems.forEach((item) => item.classList.("show-hide"));
  } else {
    toggleIcon.classList = "fa-solid fa-xmark";
    openMenu = true;
    toggleBtn.setAttribute("aria-expanded", "true");
    toggleBtn.classList.toggle("btn-rotate");
    menuItems.forEach((item) => item.classList.remove("show-hide"));
  }
}

//////////////////////////////////////////////////////////////////////////

//////////////////////////
// ACCORDION (PROJECTS) //

const btnAccordion = document.querySelectorAll(".group-btns button");
const accordionContent = document.querySelectorAll(".group-btns li div");

// listener to buttons

// toggle .active
for (let i = 0; i < btnAccordion.length; i++) {
  btnAccordion[i].addEventListener("click", function () {
    if (!this.classList.contains("active")) {
      btnAccordion.forEach((item) => item.classList.remove("active"));
      this.classList.toggle("active");
      this.setAttribute("aria-expanded", "true");
    } else {
      this.classList.remove("active");
      this.setAttribute("aria-expanded", "false");
    }

    // get index of clicked button to match to index of content
    let btnIndex;
    for (const [key, value] of Object.entries(btnAccordion)) {
      if (value === this) {
        btnIndex = Number(key);
      }
    }

    // show/hide content
    for (let y = 0; y < accordionContent.length; y++) {
      if (y === btnIndex) {
        if (accordionContent[y].style.maxHeight) {
          accordionContent.forEach((item) => (item.style.maxHeight = null));
        } else {
          accordionContent.forEach((item) => (item.style.maxHeight = null));
          accordionContent[y].style.maxHeight =
            accordionContent[y].scrollHeight * 2 + "px";
        }
      }
    }
  });
}

////////////////////////////////////////////////////////////////////////
