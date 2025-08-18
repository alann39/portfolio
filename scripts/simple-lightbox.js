// Simple Lightbox Implementation as Fallback
function createSimpleLightbox() {
    // Create lightbox HTML
    const lightboxHTML = `
        <div id="simple-lightbox" style="
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 9999;
            justify-content: center;
            align-items: center;
        ">
            <div style="position: relative; max-width: 90%; max-height: 90%;">
                <img id="lightbox-img" style="max-width: 100%; max-height: 100%; object-fit: contain;" />
                <button id="lightbox-close" style="
                    position: absolute;
                    top: -40px;
                    right: 0;
                    background: white;
                    border: none;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 18px;
                ">&times;</button>
                <button id="lightbox-prev" style="
                    position: absolute;
                    left: -50px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255,255,255,0.8);
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 18px;
                ">‹</button>
                <button id="lightbox-next" style="
                    position: absolute;
                    right: -50px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255,255,255,0.8);
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 18px;
                ">›</button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    
    const lightbox = document.getElementById('simple-lightbox');
    const img = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    
    let currentImages = [];
    let currentIndex = 0;
    
    function showImage(index) {
        if (index >= 0 && index < currentImages.length) {
            currentIndex = index;
            img.src = currentImages[index];
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }
    
    function hideLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    // Event listeners
    closeBtn.onclick = hideLightbox;
    lightbox.onclick = (e) => {
        if (e.target === lightbox) hideLightbox();
    };
    
    prevBtn.onclick = () => {
        if (currentIndex > 0) showImage(currentIndex - 1);
    };
    
    nextBtn.onclick = () => {
        if (currentIndex < currentImages.length - 1) showImage(currentIndex + 1);
    };
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            switch(e.key) {
                case 'Escape':
                    hideLightbox();
                    break;
                case 'ArrowLeft':
                    if (currentIndex > 0) showImage(currentIndex - 1);
                    break;
                case 'ArrowRight':
                    if (currentIndex < currentImages.length - 1) showImage(currentIndex + 1);
                    break;
            }
        }
    });
    
    return {
        open: function(images, startIndex = 0) {
            currentImages = images;
            showImage(startIndex);
        }
    };
}

// Initialize simple lightbox as fallback
window.simpleLightbox = createSimpleLightbox();
