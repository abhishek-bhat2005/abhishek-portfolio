const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navAnchors = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main section[id]');
const year = document.getElementById('year');

if (year) {
    year.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navAnchors.forEach((anchor) => {
        anchor.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

const setActiveLink = () => {
    let activeId = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            activeId = section.getAttribute('id');
        }
    });

    navAnchors.forEach((anchor) => {
        const isActive = anchor.getAttribute('href') === `#${activeId}`;
        anchor.classList.toggle('active', isActive);
    });
};

const revealTargets = document.querySelectorAll('.section, .card, .timeline-item, .skill-block, .hero-aside, .quick-info');
revealTargets.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

revealTargets.forEach((el) => revealObserver.observe(el));

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);