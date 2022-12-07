const changeTheme = document.querySelector("#change-theme");

changeTheme.addEventListener("change", darkMode);
function darkMode() {
  document.body.classList.toggle("dark");
}
