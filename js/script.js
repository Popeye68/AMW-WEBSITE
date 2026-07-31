// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// Navbar Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

header.classList.toggle("active",window.scrollY>50);

});


// Counter Ready (Future)

console.log("AMW Website Loaded Successfully");
// Counter Animation

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const speed=80;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,25);

}else{

counter.innerText=target.toLocaleString()+"+";

}

};

update();

});

// FAQ

document.querySelectorAll(".faq-btn").forEach(button=>{

button.addEventListener("click",()=>{

const content=button.nextElementSibling;

content.style.display=

content.style.display==="block"

?

"none"

:

"block";

});

});
// Mobile Menu

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector("nav");

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});
// Loader

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},600);

},1000);

});

// Reveal Animation

const cards=document.querySelectorAll(".card,.review,.industry");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});
// Quote Form WhatsApp

const form=document.getElementById("quoteForm");

form.addEventListener("submit",function(e){

e.preventDefault();

let text=

`*NEW BUSINESS ENQUIRY*%0A%0A`

+

`Name : ${name.value}%0A`

+

`Business : ${business.value}%0A`

+

`Phone : ${phone.value}%0A`

+

`Email : ${email.value}%0A`

+

`Bottle : ${bottle.value}%0A`

+

`Quantity : ${quantity.value}%0A`

+

`Requirement : ${message.value}`;

window.open(

`https://wa.me/917229843100?text=${text}`,

"_blank"

);

});