const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;

window.addEventListener("DOMContentLoaded", () => {
  let reviewCount = localStorage.getItem("reviewCount");

  if (!reviewCount) {
    reviewCount = 1;
  } else {
    reviewCount = parseInt(reviewCount) + 1;
  }

  localStorage.setItem("reviewCount", reviewCount);

  const reviewDisplay = document.getElementById("reviewCount");
  if (reviewDisplay) {
    reviewDisplay.textContent = `You have submitted ${reviewCount} review${reviewCount > 1 ? "s" : ""}.`;
  }
});