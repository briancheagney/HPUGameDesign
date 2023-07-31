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
});
