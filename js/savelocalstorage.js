function saveData(){
let email;
email =document.getElementById("email").value;

localStorage.setItem("email",email);

}
saveData();

function getEmail(){
if (typeof(Storage) !== "undefined") {
    var email = localStorage.getItem("email");
    if (email) {
        console.log("Email found:", email);
    } else {
        console.log("Email not found in local storage.");
    }
} else {
    console.log("Local storage is not supported by this browser.");
}
}
getEmail();
