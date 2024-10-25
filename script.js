// script.js

// ...faq.........
document.addEventListener("DOMContentLoaded", function () {
    const accButtons = document.querySelectorAll('.accordion-button');

    accButtons.forEach(button => {
        button.addEventListener('click', function () {
            
            this.classList.toggle('active');

         
            const panel = this.nextElementSibling;

            // Toggle the display of the panel
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }

            // Optionally close other panels when one is opened
            accButtons.forEach(btn => {
                if (btn !== this) {
                    btn.classList.remove('active');
                    btn.nextElementSibling.style.display = "none";
                }
            });
        });
    });
});



// ...contact FormData

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

 
    document.getElementById('form-message').textContent = "Thank you for your message, " + name + "!";
  
    document.getElementById('contact-form').reset();
});





