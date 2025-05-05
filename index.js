// Simple JavaScript to add a 'visible' class when sections are in view

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the section is visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});