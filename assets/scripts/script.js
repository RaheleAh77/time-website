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

// clock

setInterval(() => {
  const d = new Date();
  const hr = d.getHours();
  const min = d.getMinutes();
  const sec = d.getSeconds();

  // Calculate rotations for clock hands
  const hr_rotation = 30 * hr + min / 2;
  const min_rotation = 6 * min;
  const sec_rotation = 6 * sec;

  // Update clock hand rotations
  document.getElementById("hour").style.transform = `rotate(${hr_rotation}deg)`;
  document.getElementById("minute").style.transform = `rotate(${min_rotation}deg)`;
  document.getElementById("second").style.transform = `rotate(${sec_rotation}deg)`;

  // Format time for digital display
  const formattedTime = `${String(hr).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(
    sec
  ).padStart(2, "0")}`;

  // Update the <time> element with the current time
  document.getElementById("digitalTime").textContent = formattedTime;
}, 1000);
