const menuIcon = document.getElementById("menu");
const menuOpened = document.getElementById("mobileNavigationMenu");

menuIcon.addEventListener("click", function() {
    menuOpened.classList.toggle("hide");
});