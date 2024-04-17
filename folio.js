document.getElementById('anc').addEventListener('click', function(event) {
    event.preventDefault();
    const targetElement = document.getElementById('unc');
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); 
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Find the modal and the close button
    var modal = document.getElementById("resume-modal");
    var closeButton = document.querySelector(".close");

    // Find the resume link
    var resumeLink = document.querySelector(".resume-link");

    // Add event listener to open the modal when resume link is clicked
    resumeLink.addEventListener("click", function() {
        modal.style.display = "block";
        document.body.classList.add("dimmed-background");
    });

    // Add event listener to close the modal when the close button is clicked
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
        document.body.classList.remove("dimmed-background");
    });

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove("dimmed-background");
        }
    };
});
