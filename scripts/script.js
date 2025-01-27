// Mobile menu functionality
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuLinks = mobileMenu.querySelectorAll('.flex-col > a');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('expanded');
    if (!mobileMenu.classList.contains('expanded')) {
        // Wait for animation to finish before hiding
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 500);
    } else {
        mobileMenu.classList.remove('hidden');
    }
    document.body.classList.toggle('overflow-hidden');
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('expanded');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 500);
        document.body.classList.remove('overflow-hidden');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message (you can customize this)
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Modal functionality
const contactModal = document.getElementById('contactModal');
const openContactModal = document.getElementById('openContactModal');
const closeContactModal = document.getElementById('closeContactModal');

function openModal() {
    contactModal.classList.remove('hidden');
    contactModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    // Add animation classes
    requestAnimationFrame(() => {
        contactModal.querySelector('.relative.w-full').classList.add('animate-modal-in');
    });
}

function closeModal() {
    const modalContent = contactModal.querySelector('.relative.w-full');
    modalContent.classList.add('animate-modal-out');
    
    setTimeout(() => {
        contactModal.classList.remove('flex');
        contactModal.classList.add('hidden');
        document.body.style.overflow = '';
        modalContent.classList.remove('animate-modal-out', 'animate-modal-in');
    }, 200);
}

openContactModal.addEventListener('click', openModal);
closeContactModal.addEventListener('click', closeModal);

// Close modal when clicking outside
contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !contactModal.classList.contains('hidden')) {
        closeModal();
    }
});

// Add scroll reveal animations
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Initialize animations on load
window.addEventListener('load', () => {
    reveal();
});

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add section-hidden class to all sections initially
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('section-hidden');
    });

    // Add stagger-children class to containers that need staggered animations
    const staggerContainers = [
        document.querySelector('#about .skills-grid'),
        document.querySelector('#projects .project-grid'),
        document.querySelector('footer .social-links')
    ];

    staggerContainers.forEach(container => {
        if (container) container.classList.add('stagger-children');
    });

    // Add gradient-orb class to all orb elements
    document.querySelectorAll('[class*="gradient-to-r"]').forEach(orb => {
        if (orb.classList.contains('rounded-full') && orb.classList.contains('blur-3xl')) {
            orb.classList.add('gradient-orb');
            // Set random transform origin for variety
            orb.style.setProperty('--tx', `${50 + (Math.random() * 10 - 5)}%`);
            orb.style.setProperty('--ty', `${-50 + (Math.random() * 10 - 5)}%`);
        }
    });
});

// Intersection Observer for section animations
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            // Unobserve after animation to prevent re-animation
            sectionObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
});

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// Parallax effect for gradient orbs
let ticking = false;
const parallaxElements = document.querySelectorAll('.gradient-orb');

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            parallaxElements.forEach(el => {
                const rate = scrolled * 0.05;
                el.style.setProperty('--parallax-y', `${rate}px`);
            });
            ticking = false;
        });
        ticking = true;
    }
});
