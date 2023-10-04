document.addEventListener("DOMContentLoaded", function() {
    // Attach event listener to all accordion headers to toggle expansion
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            // Toggle the 'expanded' class on the clicked accordion header
            this.classList.toggle('expanded');

            // Get the sibling accordion content
            const content = this.nextElementSibling;

            // Toggle the 'active' class on the content container
            content.classList.toggle('active');
        });
    });

    // Function to close all accordions
    function closeAllAccordions() {
        accordionHeaders.forEach(header => {
            header.classList.remove('expanded');
            const content = header.nextElementSibling;
            content.classList.remove('active');
        });
    }

    // Open the first accordion by default
    const firstAccordionHeader = accordionHeaders[1];
    if (firstAccordionHeader) {
        firstAccordionHeader.click(); // Simulate a click event to open the first accordion
    }
});
