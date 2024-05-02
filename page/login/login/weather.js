function logout() {
    var removed = document.getElementById("logout-email");
    window.localStorage.removeItem("Email");
    window.location = "index.html"
}