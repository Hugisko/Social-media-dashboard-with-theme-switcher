const toggle_btn = document.querySelector(".switch input");
const body = document.querySelector("body");
let theme = localStorage.getItem("theme");

if(theme && theme === "dark"){
    body.classList.remove("lightmode");
    body.classList.add("darkmode");
    toggle_btn.checked = false;
}

if(theme && theme === "light") {
    body.classList.remove("darkmode");
    body.classList.add("lightmode");
    toggle_btn.checked = true;
}

toggle_btn.addEventListener("click", () => {
  if (body.classList.contains('darkmode')) {
    body.classList.remove("darkmode");
    body.classList.add("lightmode");
    localStorage.setItem("theme","light");
  } else {
    body.classList.remove("lightmode");
    body.classList.add("darkmode");
    localStorage.setItem("theme","dark");
  }
});
