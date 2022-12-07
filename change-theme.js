const changeTheme = document.querySelector("#change-theme");

function changeToDarkMode() {
  document.body.classList.toggle("dark");
}

function loadTheme() {
  const darkMode = localStorage.getItem("dark")
  if(darkMode) {
    changeToDarkMode()
  }
}
loadTheme()

changeTheme.addEventListener("change", function() {
  changeToDarkMode();
  localStorage.removeItem("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});