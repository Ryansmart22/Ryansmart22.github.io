"use strict";

document.getElementById("contactForm")?.addEventListener("submit", function(event: Event) {
    event.preventDefault(); 

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const subject = (document.getElementById("subject") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement).value;
    const responseMessage = document.getElementById("responseMessage") as HTMLElement;

    if (name && email && subject && message) {
        responseMessage.textContent = "Message sent successfully!";
        responseMessage.style.color = "green";
        (this as HTMLFormElement).reset(); 
    } else {
        responseMessage.textContent = "Please fill in all fields.";
        responseMessage.style.color = "red";
    }
});