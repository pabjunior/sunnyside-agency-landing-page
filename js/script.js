const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");

function handleMenuClick() {
  mobileMenu.classList.toggle("hidden");
}

menuIcon.addEventListener("click", handleMenuClick);
