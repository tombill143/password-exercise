var modal = document.getElementById("modal");
var openModalBtn = document.getElementById("openModal");
var closeModalBtn = document.getElementsByClassName("close")[0];
var loginForm = document.getElementById("loginForm");

openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Simulating authentication check
  if (username === "admin" && password === "password") {
    // Redirect to the welcome.html page
    window.location.href = "welcome.html";
  } else {
    // Display error message or perform desired action
    alert("Invalid username or password. Please try again.");
  }
});
