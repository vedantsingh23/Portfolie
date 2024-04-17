document.getElementById('anc').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the anchor link
    const targetElement = document.getElementById('unc');
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the target element
    }
});