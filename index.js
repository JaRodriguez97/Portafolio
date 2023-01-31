let anteriorRoute,
  toggleMenu = document.querySelector(".banner__header--toggle"),
  box = document.querySelectorAll(".container__box"),
  glass = document.getElementById("glass"),
  container = document.querySelector(".banner__content--tour-container"),
  socialM = document.querySelector(".banner__socialM"),
  banner = document.querySelector(".banner");

function menuToggle() {
  banner.classList.toggle("active");
  toggleMenu.classList.toggle("active");
}

function getTo(route) {
  menuToggle();

  if (anteriorRoute) banner.classList.remove(anteriorRoute);
  if (route) banner.classList.toggle(route);

  if (route == "tour")
    glass.style.height = `${container.clientHeight + socialM.clientHeight}px`;

  anteriorRoute = route;
}

VanillaTilt.init(box, { max: 25, speed: 400 });
