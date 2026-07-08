// MENU
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.onclick = () => {
menu.classList.toggle("show");
};

// WHATSAPP BOOKING
function sendBooking(){

let name = document.getElementById("name").value;
let phoneInput = document.getElementById("phone").value;
let from = document.getElementById("fromLocation").value;
let to = document.getElementById("toLocation").value;
let date = document.getElementById("travelDate").value;
let time = document.getElementById("travelTime").value;

let message = `New Booking

Name: ${name}
Phone: ${phoneInput}
From: ${from}
To: ${to}
Date: ${date}
Time: ${time}`;

let phone = "919092577913";

let url = "https://wa.me/${phone}?text=${encodeURIComponent(message)}";

window.open(url,"_blank");
}
