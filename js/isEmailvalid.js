

function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        
        if (email === "user@example.com" && password === "password") {
            alert("Login successful!");
            return true;
        } else {
            alert("Invalid email or password!");
            return false;
        }
        
    }
    localStorage.setItem("Email", email+ ",password:"+password);
    localStorage.getItem("email","password");
    console.log(email,password);
   
    alert("Login successful!");
    return true;
    
    
}



