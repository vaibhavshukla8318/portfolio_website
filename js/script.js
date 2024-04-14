/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height){
            // active navbar Links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate'); 
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    /*================sticky header ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== sticky navbar ====================*/
 
    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};


/*==================== read more ====================*/
document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtn = document.querySelector(".read-more-btn");
    const readMoreText = document.querySelector(".read-more-text");

    readMoreBtn.addEventListener("click", function () {
        readMoreText.classList.toggle("active");

        if (readMoreText.classList.contains("active")) {
            readMoreBtn.textContent = "Read Less";
        } else {
            readMoreBtn.textContent = "Read More";
        }
    });
});

// connect to the google sheet
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let formData = new FormData(this);

    fetch('https://script.google.com/macros/s/AKfycbwVPLwDcCw0BZWdNo8Rj1SW_oLX6PFDYciqbfdVibo5r8oJgGnCYx_XrxtO-Zv6-Qiv/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
   
    window.alert("Form submitted successfully!"); // Show alert box
    contactForm.querySelector('[name="Message"]').value = '';
    contactForm.querySelector('[name="Name"]').value = '';
    contactForm.querySelector('[name="Email"]').value = '';
    contactForm.querySelector('[name="Subject"]').value = '';
    contactForm.querySelector('[name="Number"]').value = '';
   
});


