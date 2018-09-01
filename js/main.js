classToggle = () => {// toggle function for mobile responsiveness
    const navs = document.querySelectorAll('.Navbar-Items')

    navs.forEach(nav => nav.classList.toggle('Navbar-ToggleShow'));
}
document.querySelector('.Navbar-Link-toggle').addEventListener('click', classToggle);
// signup form
// Get the modal
var modal = document.getElementById('signup');

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }