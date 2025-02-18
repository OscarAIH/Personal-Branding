document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const subtitle = document.getElementById("subtitle");
    subtitle.style.opacity = 20; // Fade in
    subtitle.style.transform = "translateY(0)"; 
});