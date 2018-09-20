// toggle function for mobile responsiveness
function classToggle() { 
    const navs = document.querySelectorAll('.Navbar-Items')

    navs.forEach(nav => nav.classList.toggle('Navbar-ToggleShow'));
}
document.querySelector('.Navbar-Link-toggle')
.addEventListener('click', classToggle);

// signup form
// Get the modal
var modalUp = document.getElementById('signup');
var modalIn = document.getElementById('login');
var close = document.getElementById('close');
var signupLink = document.getElementById('signpLink');

// When the user clicks anywhere outside of the modal, close it
hide = (e) => {
    if (e.target == modalUp || e.target == modalIn) {
        modalUp.style.display = "none";
        modalIn.style.display = "none";
    }
    if (e.target == close || e.target == close) {
        modalUp.style.display = "none";
        modalIn.style.display = "none";
    }
}

modalUp.addEventListener('click', hide);
modalIn.addEventListener('click', hide);