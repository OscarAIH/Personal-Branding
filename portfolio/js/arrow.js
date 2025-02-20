document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll til arrow
    const scrollArrow = document.querySelector('.scroll-arrow');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', function() {
            const projectsSection = document.querySelector('.projects-grid');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const projekterLink = document.querySelector('a[href="#projekter"]');
    if (projekterLink) {
        projekterLink.addEventListener('click', function(e) {
            e.preventDefault();
            const projectsSection = document.querySelector('.projects-grid');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});