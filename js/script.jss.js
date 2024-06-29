document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle Navbar on Menu Button Click
    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
    
    // Smooth Scroll to Sections
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Form Submission Handling
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // You can implement form submission logic here, e.g., using Fetch API to send data to a server
        // For demonstration purposes, let's just log the form data
        const formData = new FormData(contactForm);
        for (const entry of formData.entries()) {
            console.log(entry[0] + ': ' + entry[1]);
        }
        alert('Message sent successfully!'); // Example notification
        contactForm.reset(); // Reset the form after submission
    });
});