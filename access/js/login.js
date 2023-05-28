// // Khai báo hàm callback cho việc xử lý khi người dùng đăng nhập thành công
// function onSignIn(googleUser) {
//   // Lấy thông tin người dùng từ đối tượng googleUser
//   var profile = googleUser.getBasicProfile();
//   var name = profile.getName();
//   var email = profile.getEmail();
//   var imageUrl = profile.getImageUrl();

//   // Lưu thông tin người dùng vào localStorage hoặc xử lý theo ý muốn
//   localStorage.setItem("name", name);
//   localStorage.setItem("email", email);
//   localStorage.setItem("imageUrl", imageUrl);

//   // Chuyển hướng đến trang chính của ứng dụng
//   window.location.href = "http://localhost:5500/note.html";
// }

// // Khai báo hàm callback cho việc xử lý khi người dùng đăng xuất
// function onSignOut() {
//   // Xóa thông tin người dùng từ localStorage hoặc xử lý theo ý muốn
//   localStorage.removeItem("name");
//   localStorage.removeItem("email");
//   localStorage.removeItem("imageUrl");

//   // Chuyển hướng đến trang đăng xuất hoặc trang chủ của ứng dụng
//   window.location.href = "http://localhost:5500/logout.html";
// }

// // Khởi tạo và cấu hình Google Sign-In
// function initGoogleSignIn() {
//   gapi.load('auth2', function() {
//     gapi.auth2.init({
//       client_id: '267553967081-h0cfrb7jfovo6fj9n10409fgqlq309sg.apps.googleusercontent.com', // Thay YOUR_CLIENT_ID bằng Client ID của bạn
//     });
//   });
// }

// // Gọi hàm initGoogleSignIn khi tải xong trang
// window.onload = function() {
//   initGoogleSignIn();
// };
