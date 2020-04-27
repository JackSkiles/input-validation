
const name = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const email = document.getElementById("email");
const aboutMe = document.getElementById("info");

function checkLength() {
    if (name.value.length >= 15) {
        alert("Please keep it less than 15");
    }
}

function checkPassword() {
    if (password.value.length < 6) {
        alert("Please enter a longer password");
    }
}

function checkEmail() {
    if (email.value == False) {
        alert("Please enter valid email address");
    }
}
function checkInfo() {
    if (aboutMe.value.length === 250) {
        alert("Please Shorten your entry.")
    }
}

submit.addEventListener("click", checkEmail);
submit.addEventListener("click", checkPassword);
name.addEventListener("input", checkLength);
aboutMe.addEventListener("input", checkInfo);