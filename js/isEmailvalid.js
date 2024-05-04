function validateForm(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        if (email === "user@example.com") {
            return true;
        } else {
            alert("Invalid email or password!");
            return false;
        }   
    }
    console.log(email);     
}
validateForm("sopheak@gmail.com");


