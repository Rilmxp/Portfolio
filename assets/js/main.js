//// NAVBAR - start -  ////
//////////////////////////
const toggleBtn = document.querySelector(".btn-toggle");
const toggleIcon = document.querySelector(".btn-toggle i");
const navListItems = document.querySelectorAll(".page-links li a ");

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

// close menu when click on list item
for (i = 0; i < navListItems.length; i++) {
  navListItems[i].addEventListener("click", function () {
    if (openMenu) {
      navListItems.forEach((item) => item.classList.toggle("show-hide"));
      toggleIcon.classList = "fa-solid fa-bars";
      openMenu = false;
    }
  });
}

//
// Show navbar items when init on wide screen
const mediaObj = window.matchMedia("(min-width: 670px)");

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
//  NAVBAR - end - //
/////////////////////

// ACCORDION (PROJECTS) - start -  //
////////////////////////////////////

const btnAccordion = document.querySelectorAll(".group-btns button");
const accordionContent = document.querySelectorAll(".group-btns li div");

console.log(btnAccordion, accordionContent);

// listener to buttons
for (i = 0; i < btnAccordion.length; i++) {
  btnAccordion[i].addEventListener("click", function () {
    if (!this.classList.contains("active")) {
      btnAccordion.forEach((item) => item.classList.remove("active"));
      this.classList.toggle("active");
    } else {
      this.classList.remove("active");
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
            accordionContent[y].scrollHeight + "px";
        }
      }
    }
  });
}

// ACCORDION (PROJECTS) - end -  ////
////////////////////////////////////
