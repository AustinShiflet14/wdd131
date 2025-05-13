const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;

function toggleMenu() {
  const menu = document.querySelector('.hamburger-menu');
  const icon = document.querySelector('.hamburger');

  menu.classList.toggle('open');


  icon.textContent = menu.classList.contains("open") ? "✕" : "☰";
}