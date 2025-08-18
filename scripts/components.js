// Navbar HTML Content
const navbarHTML = `
<!-- Navigation Component -->
<div class="fixed w-full top-4 z-50 px-4">
    <nav class="glass-effect max-w-5xl mx-auto rounded-2xl">
        <div class="container mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <!-- Logo and Brand -->
                <a href="index.html" class="flex items-center gap-3 group">
                    <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                    </div>
                    <span class="text-xl font-bold gradient-text">Alann Portfolio</span>
                </a>

                <!-- Navigation Links -->
                <div class="hidden md:flex items-center gap-6">
                    <a href="#" class="nav-link flex items-center gap-2 text-white/80 hover:text-white transition-colors" data-section="about">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>About</span>
                    </a>
                    <a href="#" class="nav-link flex items-center gap-2 text-white/80 hover:text-white transition-colors" data-section="experience">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18m-7 5h7" />
                        </svg>
                        <span>Experience</span>
                    </a>
                    <a href="#" class="nav-link flex items-center gap-2 text-white/80 hover:text-white transition-colors" data-section="projects">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                        <span>Projects</span>
                    </a>
                    <a href="#" class="nav-link flex items-center gap-2 text-white/80 hover:text-white transition-colors" data-section="contact">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Contact</span>
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="menuToggle" class="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobileMenu" class="md:hidden hidden px-6 py-4 border-t border-white/5">
            <div class="flex flex-col space-y-4">
                <a href="#" class="nav-link flex items-center gap-2 text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5" data-section="about">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>About</span>
                </a>
                <a href="#" class="nav-link flex items-center gap-2 text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5" data-section="experience">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18m-7 5h7" />
                    </svg>
                    <span>Experience</span>
                </a>
                <a href="#" class="nav-link flex items-center gap-2 text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5" data-section="projects">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                    <span>Projects</span>
                </a>
                <a href="#" class="nav-link flex items-center gap-2 text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5" data-section="contact">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Contact</span>
                </a>
            </div>
        </div>
    </nav>
</div>
`;

// Component Loader Utility
class ComponentLoader {
    static async loadComponent(elementId, componentPath) {
        try {
            console.log('Loading component from: ' + componentPath);
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error('Failed to load component: ' + response.status + ' - ' + response.statusText);
            }
            const html = await response.text();
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = html;
                console.log('Component loaded successfully');
                
                // Re-initialize navbar functionality after loading
                if (componentPath.includes('navbar')) {
                    this.initializeNavbar();
                }
            } else {
                throw new Error('Element with ID "' + elementId + '" not found');
            }
        } catch (error) {
            console.error('Error loading component:', error);
            throw error;
        }
    }

    static loadNavbarDirect(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = navbarHTML;
            this.initializeNavbar();
            console.log('Navbar loaded directly');
        }
    }

    static initializeNavbar() {
        // Wait a bit for DOM to be ready
        setTimeout(() => {
            console.log('🔧 Initializing navbar...');
            const menuToggle = document.getElementById('menuToggle');
            const mobileMenu = document.getElementById('mobileMenu');
            
            console.log('📱 Menu toggle found:', !!menuToggle);
            console.log('📋 Mobile menu found:', !!mobileMenu);
            
            if (menuToggle && mobileMenu) {
                // Remove existing event listeners to prevent duplicates
                const newMenuToggle = menuToggle.cloneNode(true);
                menuToggle.parentNode.replaceChild(newMenuToggle, menuToggle);
                
                console.log('✅ Adding click event to hamburger menu');
                newMenuToggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('🍔 Hamburger menu clicked!');
                    const isExpanded = mobileMenu.classList.contains('expanded');
                    console.log('📱 Menu was expanded:', isExpanded);
                    
                    if (isExpanded) {
                        mobileMenu.classList.remove('expanded');
                        mobileMenu.classList.add('hidden');
                        console.log('� Menu closed');
                    } else {
                        mobileMenu.classList.remove('hidden');
                        mobileMenu.classList.add('expanded');
                        console.log('� Menu opened');
                    }
                });

                // Auto-close mobile menu when clicking links
                const menuItems = mobileMenu.querySelectorAll('a');
                console.log('🔗 Found menu items:', menuItems.length);
                menuItems.forEach((item, index) => {
                    item.addEventListener('click', () => {
                        console.log('🔗 Menu item clicked:', index);
                        mobileMenu.classList.remove('expanded');
                        mobileMenu.classList.add('hidden');
                    });
                });
                
                console.log('✅ Hamburger menu initialized successfully!');
            } else {
                console.error('❌ Menu elements not found!');
            }

            // Handle navigation links based on current page
            this.setupNavigation();
        }, 100);
    }

    static setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navLinks.forEach(link => {
            const section = link.getAttribute('data-section');
            
            if (currentPage === 'index.html' || currentPage === '') {
                // On index page, use smooth scroll to sections
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetSection = document.getElementById(section);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            } else {
                // On other pages, navigate to index with hash
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.location.href = 'index.html#' + section;
                });
            }
        });
    }
}

// Auto-load components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - loading navbar directly');
    
    // Load navbar component if container exists
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        console.log('Navbar container found - using direct embed');
        // Use direct embed instead of fetch to avoid CORS issues
        ComponentLoader.loadNavbarDirect('navbar-container');
    } else {
        console.error('Navbar container not found!');
    }
});

// Additional fallback for mobile menu initialization
window.addEventListener('load', () => {
    console.log('🔄 Window loaded - checking hamburger menu...');
    setTimeout(() => {
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (menuToggle && mobileMenu) {
            // Check if event listener is working
            console.log('🔍 Checking if hamburger menu is clickable...');
            
            // Add a backup event listener just in case
            menuToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('🍔 Backup hamburger clicked!');
                
                if (mobileMenu.classList.contains('hidden') || !mobileMenu.classList.contains('expanded')) {
                    mobileMenu.classList.remove('hidden');
                    mobileMenu.classList.add('expanded');
                    console.log('📂 Backup menu opened');
                } else {
                    mobileMenu.classList.remove('expanded');
                    mobileMenu.classList.add('hidden');
                    console.log('📁 Backup menu closed');
                }
            }, true);
            
            console.log('✅ Backup hamburger menu handler added');
        }
    }, 1000);
});
