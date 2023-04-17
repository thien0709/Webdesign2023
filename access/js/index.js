function onSignIn(googleUser) {
  // Get the user's profile information
  var profile = googleUser.getBasicProfile();
  var name = profile.getName();
  var email = profile.getEmail();
  var imageUrl = profile.getImageUrl();

  // Save the user's information to localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("imageUrl", imageUrl);

  // Redirect to your application's main page
  window.location.href = "main.html";
}
// Get the user's information from localStorage
var name1= localStorage.getItem("name");
var email1 = localStorage.getItem("email");
var imageUrl1 = localStorage.getItem("imageUrl");

// Display the user's information on the page
document.getElementById("user-name").innerHTML = name1;
document.getElementById("user-email").innerHTML = email1;
document.getElementById("user-image").src = imageUrl1;
