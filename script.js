// script.js
document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(function(header) {
        header.addEventListener("click", function() {
            // Toggle the visibility of the content
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "none" ? "block" : "none";

            // Add a class to indicate whether the section is expanded or collapsed
            this.classList.toggle("active");
        });
    });
});