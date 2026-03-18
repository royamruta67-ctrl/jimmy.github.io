// Function to scroll to sections smoothly
function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
}

// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for contacting Jimmy Motors! We will get back to you soon.");
    this.reset();
});

// Change Navbar background on scroll
window.onscroll = function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = "#000000";
    } else {
        nav.style.background = "rgba(0,0,0,0.9)";
    }
};
