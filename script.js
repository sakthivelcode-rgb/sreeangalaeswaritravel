// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");


if(menuBtn){

menuBtn.addEventListener("click",()=>{

menu.classList.toggle("show");

});

}



// Distance Calculation

function calculateDistance(){


let from = document.getElementById("fromLocation").value;

let to = document.getElementById("toLocation").value;



if(from=="" || to==""){

alert("Please enter From and To location");

return;

}



let distance = "To be calculated by Google Maps";



let message = 
`*Sree Angalaeswari Travels Booking*

📍 From : ${from}

📍 To : ${to}

🛣 Distance : ${distance}

Please send quotation.`;


let whatsappURL =
"https://wa.me/919092577913?text="
+encodeURIComponent(message);



window.open(whatsappURL,"_blank");


}
