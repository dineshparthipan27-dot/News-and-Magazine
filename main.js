// Selecting the hamburger icon and nav links
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Adding click event listener
hamburger.addEventListener('click', () => {
    // Toggles the 'active' class to show or hide the menu
    navLinks.classList.toggle('active');
});


// Newsletter Submission
 

// Waits for the entire HTML to load before running
document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('nl-email');
    const messageBox = document.getElementById('nl-message');

    // Check if form exists on the page
    if (form) {
        form.addEventListener('submit', function(event) {
            // Prevent the default form submission (page reload)
            event.preventDefault(); 
            
            const emailValue = emailInput.value.trim();
            
            // Standard Regex for proper email validation
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            
            // Validation 1: Check if input is empty
            if (emailValue === "") {
                showMsg("Email is required, machi!", "error");
                form.classList.add('input-error'); // Adds red border
            } 
            // Validation 2: Check if email format is wrong
            else if (!emailPattern.test(emailValue)) {
                showMsg("Please enter a valid email format.", "error");
                form.classList.add('input-error'); // Adds red border
            } 
            // Validation 3: Success!
            else {
                showMsg("Success! You are now subscribed.", "success");
                form.classList.remove('input-error'); // Removes red border
                form.reset(); // Clears the input box
                window.location.href = '404.html'
                // Add your backend fetch/axios API call here later
            }
        });
    }

    // Helper function to display messages
    function showMsg(message, type) {
        messageBox.textContent = message;
        
        // Reset classes
        messageBox.classList.remove('error-text', 'success-text');
        
        // Add specific class based on success or error
        if (type === "error") {
            messageBox.classList.add('error-text');
        } else {
            messageBox.classList.add('success-text');
        }
        
        // Hide message automatically after 4 seconds
        setTimeout(() => {
            messageBox.textContent = "";
            messageBox.classList.remove('error-text', 'success-text');
            form.classList.remove('input-error');
        }, 4000);
    }
});