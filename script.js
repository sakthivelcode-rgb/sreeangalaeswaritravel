
// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");


if(menuBtn && menu){

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




// CLOSE MENU WHEN CLICK OUTSIDE


document.addEventListener("click",(e)=>{

if(
menu &&
!menu.contains(e.target) &&
!menuBtn.contains(e.target)
){

menu.classList.remove("show");

}

});








// WHATSAPP BOOKING


function sendBooking(){


let from =
document.getElementById("fromLocation").value;


let to =
document.getElementById("toLocation").value;



let vehicle =
document.getElementById("vehicle").value;




if(from==="" || to===""){


alert("Please enter starting location and destination");


return;

}




let phone="919092577913";



let message =

`*Sree Angalaeswari Travels*

🚌 New Travel Enquiry


📍 Starting Location:
${from}


📍 Destination:
${to}


🚍 Vehicle:
${vehicle}


Please send availability and quotation.


Thank You 🙏`;





let url =
"https://wa.me/"+phone+"?text="+encodeURIComponent(message);



window.open(url,"_blank");



}









// SCROLL ANIMATION


const animatedItems = document.querySelectorAll(
".card,.fleet-card,.review-card,.contact-card"
);



const observer = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("active");


}


});


},
{
threshold:0.2
}

);




animatedItems.forEach(item=>{


item.classList.add("animate");


observer.observe(item);


});









// AUTO YEAR UPDATE


const copyright =
document.getElementById("copyright");



if(copyright){


copyright.innerHTML =
"© "+new Date().getFullYear()+" Sree Angalaeswari Travels";


}


function sendBooking() {

let from = document.getElementById("fromLocation").value;
let to = document.getElementById("toLocation").value;
let date = document.getElementById("travelDate").value;
let time = document.getElementById("travelTime").value;
let days = document.getElementById("days").value;
let vehicle = document.getElementById("vehicle").value;

if(from === "" || to === "" || date === "" || time === "" || days === "") {
    alert("Please fill all details");
    return;
}

let message = `*New Trip Enquiry* 🚍

From: ${from}
To: ${to}
Date: ${date}
Time: ${time}
Days: ${days}
Vehicle: ${vehicle}`;

let phone = "919092577913";

let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

window.open(url, "_blank");
  }
