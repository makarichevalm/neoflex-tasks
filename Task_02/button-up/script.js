const btnUp = document.getElementById("btnUp");
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const height = document.documentElement.clientHeight;
  scrollPosition > height
    ? (btnUp.style.display = "block")
    : (btnUp.style.display = "none");
});
btnUp.addEventListener("click", function () {
  if (window.scrollY > 0) {
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
  }
});
