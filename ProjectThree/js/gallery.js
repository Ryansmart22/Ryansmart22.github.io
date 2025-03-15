"use strict";

document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    const responseMessage = document.getElementById("responseMessage");

    if (!nameInput || !emailInput || !subjectInput || !messageInput || !responseMessage) {
        console.error("One or more form elements are missing.");
        return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    if (name && email && subject && message) {
        responseMessage.textContent = "Message sent successfully!";
        responseMessage.style.color = "green";
        event.target.reset();
    } else {
        responseMessage.textContent = "Please fill in all fields.";
        responseMessage.style.color = "red";
    }
});
