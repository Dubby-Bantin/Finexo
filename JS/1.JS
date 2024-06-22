const menuBar = document.querySelector(".menu");
const navList = document.querySelector(".nav ul");

menuBar.addEventListener("click", () => {
  navList.classList.toggle("active");
  navList.classList.contains("active")
    ? (menuBar.innerHTML = "<i class='fa fa-times '></i>")
    : (menuBar.innerHTML = "<i class='fa fa-bars '></i>");
});
console.log(menuBar.innerHTML);

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () =>
  window.scrollY > 30
    ? nav.classList.add("active")
    : nav.classList.remove("active")
);
