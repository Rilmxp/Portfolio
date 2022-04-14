const toggleBtn = document.querySelector(".btn-toggle");
const navListItems = document.querySelectorAll(".page-links li a ");

// Works
toggleBtn.addEventListener("click", function () {
  navListItems.forEach((item) => item.classList.toggle("show-hide"));
});
