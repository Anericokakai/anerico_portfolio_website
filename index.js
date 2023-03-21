const modeinput = document.querySelector("#darkmode-toggle");
const darkmode = () => {
  document.querySelector("body").setAttribute("theme", "dark");
  localStorage.setItem("theme","dark");
};
const lightmode = () => {
  document.querySelector("body").setAttribute("theme", "light");
  localStorage.setItem("theme","light");
};
const localStorage_theme = localStorage.getItem("theme");

if (localStorage_theme === "light") {
  lightmode()
}



const changemode = (e) => {
 e.target.checked?darkmode():lightmode()
};

modeinput.addEventListener("change", changemode);
