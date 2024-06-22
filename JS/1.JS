const menuBar = document.querySelector(".menu");
const navList = document.querySelector(".nav ul");

menuBar.addEventListener("click", () => {
  if (navList.classList.contains("active")) {
    menuBar.innerHTML = "<i class='fa fa-bars'></i>";
    navList.classList.remove("active");
  } else {
    menuBar.innerHTML = "<i class='fa fa-times '></i>";
    navList.classList.add("active");
  }
});
console.log(menuBar.innerHTML);

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
