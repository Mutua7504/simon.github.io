
/*------------------------togge icon bar----------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


/*-------------------------scroll section active link-----------------------------------*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });
    /*-------------------sticky navbar----------------------------*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*===========remove toggle icon and navbar when sticky navbar link(scroll)---------*/
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

};

/*-----------scroll reveal-------------*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'left' });
ScrollReveal().reveal('.home-content  p, .about-content', { origin: 'right' });

/*---------send email-----------------*/
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "mutua7504@gmail.com",
        Password: "sniper254",
        To: 'mutua7504@gmail.com',
        From: document.getElementById("email").value,
        Subject: document.getElementById("subject").value,
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone No: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value,
    }).then(
        message => alert("Message sent successfully")
    );
}





































