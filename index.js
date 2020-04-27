
const name = document.getElementById("username");

function checkLength() {
    if (name.value.length >= 15) {
        alert("Please keep it less than 15");
    }
}
name.addEventListener("input", checkLength);