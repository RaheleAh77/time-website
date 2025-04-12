// Add light-dark feature

let circleToggle = document.querySelector(".circle-toggle");
let body = document.body;
let toggleBox = document.querySelector(".toggle-box");

// Function to update the icon based on the current theme
function updateIcon() {
  if (body.classList.contains("light")) {
    circleToggle.textContent = "wb_sunny"; // Set icon to sun for light mode
  } else {
    circleToggle.textContent = "nightlight"; // Set icon to moon for dark mode
  }
}

// Toggle theme on click
toggleBox.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("bgBody", "dark"); // Save the theme to localStorage
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("bgBody", "light"); // Save the theme to localStorage
  }
  updateIcon(); // Update the icon after toggling the theme
});

// Function to apply the saved theme from localStorage
function getColor() {
  let bgBody = localStorage.getItem("bgBody");
  if (bgBody) {
    body.className = bgBody; // Apply the saved theme
  } else {
    body.classList.add("light"); // Default to light mode if no theme is saved
  }
  updateIcon(); // Update the icon based on the applied theme
}
