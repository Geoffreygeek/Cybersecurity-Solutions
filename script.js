function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }

window.addEventListener('load', function() {
   const preloader = document.getElementById('preloader');
   preloader.classList.add('hidden');
});

// Example JavaScript for form submission (if needed in future)
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Request sent! Our team will get back to you shortly.');
});
