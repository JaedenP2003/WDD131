document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.hamburger');
    const extraLinks = document.getElementById('extraLinks');

    toggle.addEventListener('click', () => {
        extraLinks.classList.toggle('show');
    });
});
