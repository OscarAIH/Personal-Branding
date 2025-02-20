document.addEventListener('DOMContentLoaded', function() {
    const frames = document.querySelectorAll('.project-frame');
    const popupOverlay = document.querySelector('.iframe-popup-overlay');
    const popupIframe = popupOverlay.querySelector('iframe');
    const closeButton = popupOverlay.querySelector('.close-button');

    // Open popup
    frames.forEach(frame => {
        frame.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            popupIframe.src = url;
            popupOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close popup
    closeButton.addEventListener('click', function() {
        popupOverlay.classList.remove('active');
        popupIframe.src = '';
        document.body.style.overflow = '';
    });

    // Close on overlay click
    popupOverlay.addEventListener('click', function(e) {
        if (e.target === popupOverlay) {
            popupOverlay.classList.remove('active');
            popupIframe.src = '';
            document.body.style.overflow = '';
        }
    });

    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
            popupOverlay.classList.remove('active');
            popupIframe.src = '';
            document.body.style.overflow = '';
        }
    });
});



