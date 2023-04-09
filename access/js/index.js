//Login 
const btnLogin = document.querySelector("#main")
btnLogin.addEventListener("click",
function onSignIn(googleUser) {
    // Lấy ID token và thông tin hồ sơ cơ bản của người dùng
    var id_token = googleUser.getAuthResponse().id_token;
    var profile = googleUser.getBasicProfile();
  
    // Gửi ID token đến máy chủ của bạn để xác minh
    // Bạn có thể sử dụng một yêu cầu AJAX hoặc một đơn gửi để làm điều này
    // Sau khi xác minh, bạn có thể tạo một phiên cho người dùng trên máy chủ của mình
  }
  );
  