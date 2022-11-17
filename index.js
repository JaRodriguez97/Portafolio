let anteriorRoute,
  toggleMenu = document.querySelector(".banner__header--toggle"),
  banner = document.querySelector(".banner");

function menuToggle() {
  banner.classList.toggle("active");
  toggleMenu.classList.toggle("active");
}

function getTo(route) {
  menuToggle();

  if (anteriorRoute) banner.classList.remove(anteriorRoute);
  if (route) banner.classList.toggle(route);

  anteriorRoute = route;
}
