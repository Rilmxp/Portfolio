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

// show/hide navbar items on media change
mediaObj.onchange = (e) => {
  // media < 670px
  if (!e.matches) {
    navListItems.forEach((item) => item.classList.add("show-hide"));
    toggleIcon.classList = "fa-solid fa-bars";
    toggleBtn.setAttribute("aria-expanded", "false");
  }
  // media > 670px
  else {
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

const btnsGroupAccordion = document.querySelector(".group-btns");
const btnAccordion = document.querySelectorAll(".group-btns button");

// listener for buttons

// toggle .active and show/hide accordion content
btnsGroupAccordion.addEventListener("click", function (event) {
  let target = event.target.closest("button");
  if (!target) return;
  let accordionContent = target.nextElementSibling;

  // if target btn is already open, close it
  if (target.classList.contains("active")) {
    target.classList.remove("active");
    target.setAttribute("aria-expanded", "false");
    accordionContent.style.maxHeight = null;
  }
  // else reset all btns and open the targeted one
  else {
    btnAccordion.forEach((item) => {
      item.classList.remove("active");
      item.nextElementSibling.style.maxHeight = null;
    });

    target.classList.add("active");
    target.setAttribute("aria-expanded", "true");
    console.log(accordionContent.maxHeight);
    // scrollHeight * 2 to have enough room for content in case of media changes from wide to narrow.
    accordionContent.style.maxHeight = accordionContent.scrollHeight * 2 + "px";
  }
});
