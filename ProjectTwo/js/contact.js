"use strict";
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name && email && subject && message) {
        document.getElementById("responseMessage").textContent = "Message sent successfully!";
        document.getElementById("responseMessage").style.color = "green";
        this.reset(); 
    } else {
        document.getElementById("responseMessage").textContent = "Please fill in all fields.";
        document.getElementById("responseMessage").style.color = "red";
    }
});
