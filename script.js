
// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");


if(menuBtn){

menuBtn.addEventListener("click",()=>{

menu.classList.toggle("show");

});

}





// CLOSE MENU AFTER CLICK


document.querySelectorAll("#menu a").forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("show");

});

});







// WHATSAPP BOOKING


function sendBooking(){


let from =
document.getElementById("fromLocation").value;


let to =
document.getElementById("toLocation").value;




if(from=="" || to==""){


alert("Please enter From and To location");


return;


}




let phone="919092577913";



let message =

`*Sree Angalaeswari Travels*

🚌 New Trip Enquiry

📍 From:
${from}

📍 To:
${to}


🚍 Vehicle Requirement:
Tourist Bus / Traveller


Please send availability and quotation.

Thank You.`;




let whatsappURL =

"https://wa.me/"+phone+"?text="+encodeURIComponent(message);



window.open(whatsappURL,"_blank");



}








// SIMPLE SCROLL ANIMATION


const cards =
document.querySelectorAll(
".service-card,.fleet-card,.contact-card"
);



const observer =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


});





cards.forEach(card=>{


card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="0.6s";


observer.observe(card);



});






// CURRENT YEAR AUTO UPDATE


let year =
document.querySelector("footer p");


if(year){

year.innerHTML =
"© "+new Date().getFullYear()+" Sree Angalaeswari Travels";

}
