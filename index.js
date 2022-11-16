function menuToggle() {
  const toggleMenu = document.querySelector(".banner__header--toggle"),
    banner = document.querySelector(".banner");

  banner.classList.toggle("active");
  toggleMenu.classList.toggle("active");
}
