// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// Book Now Alert
function bookNow() {
    alert("Thank you for choosing Explore Travels!\nOur team will contact you soon.");
}

// Reserve Seat - Call
function callNow() {
    if (confirm("Do you want to call and reserve your seat?")) {
        window.location.href = "tel:+919876543210"; // Replace with your number
    }
}