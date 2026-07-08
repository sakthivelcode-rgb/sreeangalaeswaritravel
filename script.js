function sendBooking() {

    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const from = document.getElementById("fromLocation").value;
    const to = document.getElementById("toLocation").value;
    const vehicle = document.getElementById("vehicle").value;

    const message =
`*New Booking Enquiry*

Name: ${name}
Phone: ${phone}
From: ${from}
To: ${to}
Vehicle: ${vehicle}`;

    window.open(
        `https://wa.me/919092577913?text=${encodeURIComponent(message)}`,
        "_blank"
    );
}

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Footer Copyright
document.getElementById("copyright").innerHTML =
`© ${new Date().getFullYear()} Sree Angalaeswari Travels. All Rights Reserved.`;
