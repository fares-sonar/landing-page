let barIcon = document.querySelector("header .icon");
barIcon.addEventListener("click", () => {
  let list = document.querySelector("header .list");
  list.classList.toggle("active");
});
