/*===================== scroll section active link =======================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*===================================== scroll section active link ==========================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });
    /*=============================  sticky navbar =============================================*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*============================= remove toggle icon and navbar when click navbar link (scroll) =============================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*================================= scroll reveal ================================= */

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ', {
    origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-img ', {
    origin: 'left'
});
ScrollReveal().reveal('.home-content p, .about-content ', {
    origin: 'right'
});


/*============================ typed js ============================================ */

const typed = new Typed('.multiple-text', {
    strings: ['M E R N Stack Developer', 'Front-End Developer', 'Back-End Developer', 'Web Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

/*============================ about read more button ============================================ */

var readMoreBtn = document.querySelector('.read-more');
var hiddenContent = document.querySelector('.hidden-content');

readMoreBtn.addEventListener('click', function (event) {
    event.preventDefault(); // prevent the link's default behavior
    hiddenContent.style.display = 'block';
    readMoreBtn.classList.add('hidden'); // add the 'hidden' class to the button
});

window.addEventListener('scroll', function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var readMoreBtn = document.getElementById('read-more');
    var hiddenContent = document.querySelector('.hidden-content');

    if (scrollTop > 500) { // adjust the scroll position as needed
        readMoreBtn.classList.remove('hidden'); // remove the 'hidden' class from the button
        hiddenContent.style.display = 'none';
    } else {
        readMoreBtn.classList.add('hidden'); // add the 'hidden' class to the button
    }
})

/*============================ services read more button ============================================ */

var readMoreBtns = document.querySelectorAll('.read-more-2');
if (readMoreBtns) {
    readMoreBtns.forEach(function (readMoreBtn) {
        var hiddenContent = readMoreBtn.previousElementSibling;
        if (hiddenContent) {
            readMoreBtn.addEventListener('click', function (event) {
                event.preventDefault();
                hiddenContent.style.display = 'block';
                // readMoreBtn.style.display = 'none';//when i enable this one read more button is not working
                readMoreBtn.classList.add('hidden'); // add the 'hidden' class from the button
            });
        }
    });
}
window.addEventListener('scroll', function () {

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var readMoreBtn1 = document.getElementById('read-more-1');
    var readMoreBtn2 = document.getElementById('read-more-2');
    var readMoreBtn3 = document.getElementById('read-more-3');
    var hiddenContent = document.querySelectorAll('.hidden-content');
    if (scrollTop > 900) { // adjust the scroll position as needed
        readMoreBtn1.classList.remove('hidden'); // remove the 'hidden' class from the button
        readMoreBtn2.classList.remove('hidden'); // remove the 'hidden' class from the button
        readMoreBtn3.classList.remove('hidden'); // remove the 'hidden' class from the button
        hiddenContent.forEach(function (content) {
            content.style.display = 'none';
            var readMoreBtn = content.nextElementSibling;
            if (readMoreBtn && !readMoreBtn.classList.contains('read-more-2')) {
                readMoreBtn.classList.add('read-more-2'); // add the 'read-more-2' class back to the button
            }
        });
    } else {
        readMoreBtn1.classList.add('hidden'); // add the 'hidden' class to the button
        readMoreBtn2.classList.add('hidden'); // add the 'hidden' class to the button
        readMoreBtn3.classList.add('hidden'); // add the 'hidden' class to the button
    }
});
