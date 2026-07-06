
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');


hamburger.addEventListener('click', () => {

    navLinks.classList.toggle('active');
});






document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('nl-email');
    const messageBox = document.getElementById('nl-message');


    if (form) {
        form.addEventListener('submit', function (event) {

            event.preventDefault();

            const emailValue = emailInput.value.trim();


            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


            if (emailValue === "") {
                showMsg("Email is required, machi!", "error");
                form.classList.add('input-error');
            }

            else if (!emailPattern.test(emailValue)) {
                showMsg("Please enter a valid email format.", "error");
                form.classList.add('input-error');
            }

            else {
                showMsg("Success! You are now subscribed.", "success");
                form.classList.remove('input-error'); 
                form.reset(); 
                window.location.href = '404.html'

            }
        });
    }


    function showMsg(message, type) {
        messageBox.textContent = message;


        messageBox.classList.remove('error-text', 'success-text');


        if (type === "error") {
            messageBox.classList.add('error-text');
        } else {
            messageBox.classList.add('success-text');
        }


        setTimeout(() => {
            messageBox.textContent = "";
            messageBox.classList.remove('error-text', 'success-text');
            form.classList.remove('input-error');
        }, 4000);
    }
});