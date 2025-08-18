document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Contact Modal Functionality
    const modal = document.getElementById('contactModal');
    const openModalBtn = document.getElementById('openContactModal');
    const closeModalBtn = document.getElementById('closeContactModal');

    if (modal && openModalBtn && closeModalBtn) {
        // Open modal
        openModalBtn.addEventListener('click', () => {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });

        // Close modal
        const closeModal = () => {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
            document.body.style.overflow = ''; // Restore scrolling
        };

        closeModalBtn.addEventListener('click', closeModal);

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
    }

    // All Projects Modal Functionality
    const allProjectsModal = document.getElementById('allProjectsModal');
    const seeAllProjectsBtn = document.getElementById('seeAllProjectsBtn');
    const closeAllProjectsModal = document.getElementById('closeAllProjectsModal');

    if (allProjectsModal && seeAllProjectsBtn && closeAllProjectsModal) {
        const openAllProjectsModal = () => {
            allProjectsModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        };

        const closeAllProjectsModalFunc = () => {
            allProjectsModal.classList.add('hidden');
            document.body.style.overflow = '';
        };

        seeAllProjectsBtn.addEventListener('click', openAllProjectsModal);
        closeAllProjectsModal.addEventListener('click', closeAllProjectsModalFunc);

        // Close modal when clicking outside
        allProjectsModal.addEventListener('click', (e) => {
            if (e.target === allProjectsModal) {
                closeAllProjectsModalFunc();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !allProjectsModal.classList.contains('hidden')) {
                closeAllProjectsModalFunc();
            }
        });
    }

    // Timeline scroll functionality
    const container = document.querySelector('.timeline-container');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');
    
    if (container && scrollLeftBtn && scrollRightBtn) {
        const scrollAmount = 340; // Width of card (320px) + gap (20px)

        const updateScrollButtons = () => {
            const isAtStart = container.scrollLeft <= 0;
            const isAtEnd = container.scrollLeft >= (container.scrollWidth - container.clientWidth - 10);
            
            // Update left button
            scrollLeftBtn.style.opacity = isAtStart ? '0.5' : '1';
            scrollLeftBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';
            
            // Update right button
            scrollRightBtn.style.opacity = isAtEnd ? '0.5' : '1';
            scrollRightBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
        };

        // Scroll left button click
        scrollLeftBtn.addEventListener('click', () => {
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        // Scroll right button click
        scrollRightBtn.addEventListener('click', () => {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        // Listen for scroll events
        container.addEventListener('scroll', updateScrollButtons);
        
        // Listen for window resize
        window.addEventListener('resize', updateScrollButtons);
        
        // Initial button state
        updateScrollButtons();
    }

    // Auto-close hamburger menu after clicking a menu item
    const menuItems = document.querySelectorAll('#mobileMenu a');
    const hamburgerMenu = document.getElementById('mobileMenu');

    if (menuItems && hamburgerMenu) {
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburgerMenu.classList.add('hidden');
            });
        });
    }

    // Get form element
    const form = document.getElementById('contactForm');
    
    // Add submit event listener to form
    form.addEventListener('submit', function(e) {
        // Hide any existing messages
        document.getElementById('successMessage').classList.add('hidden');
        document.getElementById('errorMessage').classList.add('hidden');
        
        // Show success message after a small delay
        setTimeout(() => {
            // Show success message
            document.getElementById('successMessage').classList.remove('hidden');
            
            // Reset form immediately
            form.reset();
            
            // Hide success message and close modal after delay
            setTimeout(() => {
                // Hide success message first
                document.getElementById('successMessage').classList.add('hidden');
                
                // Then close modal
                setTimeout(() => {
                    document.getElementById('contactModal').classList.remove('flex');
                    document.getElementById('contactModal').classList.add('hidden');
                    document.body.style.overflow = '';
                }, 500); // Small delay between hiding message and closing modal
            }, 1500); // Show success message for 1.5 seconds
        }, 500);
    });
});

