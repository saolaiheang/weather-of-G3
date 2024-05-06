function validateForm() {
    var email = document.getElementById("login-email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        
        if (email === "user@example.com") {
            return true;
        } else {
            return false;
        }
        
    }
    window.localStorage.setItem("loginEmail",email);
    window.location = "../login/home/index.html"
     
}