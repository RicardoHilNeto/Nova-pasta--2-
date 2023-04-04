const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check username and password
  if (username === "myusername" && password === "mypassword") {
    alert("Login successful!");
    // Redirect to homepage or do something else here
  } else {
    alert("Incorrect username or password");
  }
});