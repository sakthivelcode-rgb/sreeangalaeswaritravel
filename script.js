// ===========================
// WHATSAPP BOOKING
// ===========================

import { Analytics } from "@vercel/analytics/next"

function sendBooking(){

    let name = document.getElementById("customerName").value;
    let phone = document.getElementById("customerPhone").value;
    let from = document.getElementById("fromLocation").value;
    let to = document.getElementById("toLocation").value;
    let vehicle = document.getElementById("vehicle").value;


    if(name === "" || phone === "" || from === "" || to === "" || vehicle === ""){
        alert("Please fill all booking details");
        return;
    }


    let message = 
`*Sree Angalaeswari Travels - Booking Enquiry*

Customer Name: ${name}

Phone Number: ${phone}

Starting Location: ${from}

Destination: ${to}

Vehicle Required: ${vehicle}

Thank You.`;


    let whatsappURL =
    "https://wa.me/919092577913?text=" 
    + encodeURIComponent(message);


    window.open(whatsappURL,"_blank");

}




// ===========================
// MOBILE MENU
// ===========================


const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");


if(menuBtn){

    menuBtn.addEventListener("click", function(){

        menu.classList.toggle("active");

    });

}



// Close menu after clicking link

const menuLinks = document.querySelectorAll("#menu a");


menuLinks.forEach(function(link){

    link.addEventListener("click",function(){

        menu.classList.remove("active");

    });

});




// ===========================
// FOOTER YEAR
// ===========================


let year = new Date().getFullYear();


document.getElementById("copyright").innerHTML =
"© " + year + " Sree Angalaeswari Travels. All Rights Reserved.";





// ===========================
// SMOOTH SCROLL
// ===========================


document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        let target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});
