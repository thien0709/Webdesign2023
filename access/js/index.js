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