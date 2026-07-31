/*==================================================
AMW MINERAL WATER
SCRIPT.JS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      ELEMENTS
    =========================================*/

    const header = document.getElementById("header");

    const menuBtn = document.querySelector(".menu-btn");

    const navLinks = document.querySelector(".nav-links");

    const navItems = document.querySelectorAll(".nav-links a");



    /*=========================================
      STICKY HEADER
    =========================================*/

    function handleHeader() {

        if (window.scrollY > 80) {

            header.classList.add("active");

        } else {

            header.classList.remove("active");

        }

    }

    handleHeader();

    window.addEventListener("scroll", handleHeader);



    /*=========================================
      MOBILE MENU
    =========================================*/

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });



    /*=========================================
      CLOSE MENU AFTER CLICK
    =========================================*/

    navItems.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.classList.remove("active");

        });

    });



    /*=========================================
      SMOOTH SCROLL
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });
        /*=========================================
      FAQ ACCORDION
    =========================================*/

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = question.querySelector("i");

        question.addEventListener("click", () => {

            faqItems.forEach(other => {

                if (other !== item) {

                    other.querySelector(".faq-answer").style.display = "none";
                    other.querySelector("i").classList.remove("fa-minus");
                    other.querySelector("i").classList.add("fa-plus");

                }

            });

            if (answer.style.display === "block") {

                answer.style.display = "none";

                icon.classList.remove("fa-minus");
                icon.classList.add("fa-plus");

            } else {

                answer.style.display = "block";

                icon.classList.remove("fa-plus");
                icon.classList.add("fa-minus");

            }

        });

    });





    /*=========================================
      SCROLL REVEAL
    =========================================*/

    const revealElements = document.querySelectorAll(
        ".stat-card,.product-card,.about-image,.about-content,.process-card,.why-card,.gallery-item,.industry-card,.testimonial-card,.contact-info,.contact-form"
    );

    const revealOnScroll = () => {

        revealElements.forEach(el => {

            const top = el.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                el.classList.add("show");

            }

        });

    };

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();





    /*=========================================
      COUNTER ANIMATION
    =========================================*/

    const counters = document.querySelectorAll(".stat-card h2");

    let counterStarted = false;

    function startCounter() {

        if (counterStarted) return;

        const statsSection = document.querySelector(".stats");

        if (!statsSection) return;

        const sectionTop = statsSection.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {

            counterStarted = true;

            counters.forEach(counter => {

                const text = counter.innerText;

                const target = parseInt(text.replace(/\D/g, ""));

                if (isNaN(target)) return;

                let count = 0;

                const speed = Math.max(10, Math.floor(target / 60));

                const interval = setInterval(() => {

                    count += speed;

                    if (count >= target) {

                        counter.innerText = text;
                        clearInterval(interval);

                    } else {

                        if (text.includes("%")) {

                            counter.innerText = count + "%";

                        } else if (text.includes("L")) {

                            counter.innerText = count + "L+";

                        } else {

                            counter.innerText = count + "+";

                        }

                    }

                }, 25);

            });

        }

    }

    window.addEventListener("scroll", startCounter);

    startCounter();
        /*=========================================
      ACTIVE NAVIGATION
    =========================================*/

    const sections = document.querySelectorAll("section[id]");

    function activeMenu() {

        let scrollY = window.pageYOffset;

        sections.forEach(section => {

            const sectionHeight = section.offsetHeight;

            const sectionTop = section.offsetTop - 120;

            const sectionId = section.getAttribute("id");

            const navLink = document.querySelector(
                '.nav-links a[href="#' + sectionId + '"]'
            );

            if (!navLink) return;

            if (scrollY > sectionTop &&
                scrollY <= sectionTop + sectionHeight) {

                navLink.classList.add("active");

            } else {

                navLink.classList.remove("active");

            }

        });

    }

    window.addEventListener("scroll", activeMenu);

    activeMenu();





    /*=========================================
      BUTTON RIPPLE EFFECT
    =========================================*/

    const buttons = document.querySelectorAll(
        ".btn-primary,.btn-secondary,.order-btn,.quote-btn"
    );

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-4px)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });





    /*=========================================
      HERO PARALLAX
    =========================================*/

    const bottle = document.querySelector(".hero-bottle");

    if(window.innerWidth>992){

window.addEventListener("mousemove",(e)=>{

if(!bottle)return;

const x=(window.innerWidth/2-e.clientX)/45;

const y=(window.innerHeight/2-e.clientY)/45;

bottle.style.transform=`translate(${x}px,${y}px)`;

});

}





    /*=========================================
      BACK TO TOP
    =========================================*/

    const callBtn = document.querySelector(".call-btn");

    if (callBtn) {

        callBtn.addEventListener("dblclick", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }





    /*=========================================
      CONSOLE MESSAGE
    =========================================*/

    console.log(
        "%cAMW Mineral Water Website Loaded Successfully",
        "color:#00AEEF;font-size:16px;font-weight:bold;"
    );

});

window.addEventListener("load", () => {
    document.querySelectorAll("body *").forEach(el => {
        if (el.scrollWidth > document.documentElement.clientWidth) {
            console.log("Overflow Element:", el);
            el.style.outline = "3px solid red";
        }
    });
});
