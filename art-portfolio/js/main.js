// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Artwork data - replace with your father's actual paintings
    const artworks = [
        {
            id: 1,
            title: "Sunset Over Mountains",
            medium: "Oil on Canvas",
            year: 2022,
            image: "images/artworks/artwork1.jpg"
        },
        {
            id: 2,
            title: "Abstract Composition",
            medium: "Acrylic on Paper",
            year: 2021,
            image: "images/artworks/artwork2.jpg"
        },
        {
            id: 3,
            title: "Coastal Scene",
            medium: "Watercolor",
            year: 2023,
            image: "images/artworks/artwork3.jpg"
        },
        {
            id: 4,
            title: "Still Life with Fruit",
            medium: "Oil on Canvas",
            year: 2020,
            image: "images/artworks/artwork4.jpg"
        },
        {
            id: 5,
            title: "Mountain Landscape",
            medium: "Acrylic on Canvas",
            year: 2019,
            image: "images/artworks/artwork5.jpg"
        },
        {
            id: 6,
            title: "Urban Scene",
            medium: "Oil on Board",
            year: 2021,
            image: "images/artworks/artwork6.jpg"
        }
    ];
    
    // DOM Elements
    const artworkGrid = document.querySelector('.artwork-grid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxMedium = document.getElementById('lightbox-medium');
    const lightboxYear = document.getElementById('lightbox-year');
    const closeLightbox = document.querySelector('.close-lightbox');
    
    // Display all artworks
    displayArtworks(artworks);
    
    // Function to display artworks
    function displayArtworks(artworksToDisplay) {
        artworkGrid.innerHTML = '';
        
        if (artworksToDisplay.length === 0) {
            artworkGrid.innerHTML = '<p class="no-artworks">No artworks found.</p>';
            return;
        }
        
        artworksToDisplay.forEach(artwork => {
            const artworkItem = document.createElement('div');
            artworkItem.className = 'artwork-item';
            
            artworkItem.innerHTML = `
                <div class="artwork-img">
                    <img src="${artwork.image}" alt="${artwork.title}" data-id="${artwork.id}">
                </div>
                <div class="artwork-info">
                    <h3 class="artwork-title">${artwork.title}</h3>
                    <p class="artwork-medium">${artwork.medium}</p>
                    <p class="artwork-year">${artwork.year}</p>
                </div>
            `;
            
            // Add click event to artwork image
            const imgElement = artworkItem.querySelector('.artwork-img');
            imgElement.addEventListener('click', () => openLightbox(artwork));
            
            artworkGrid.appendChild(artworkItem);
        });
    }
    
    // Lightbox functions
function openLightbox(artwork) {
    lightbox.style.display = 'block';
    lightboxImg.src = artwork.image;
    lightboxImg.alt = artwork.title;
    document.body.style.overflow = 'hidden';
    
    // Center the image
    lightboxImg.style.display = 'block';
    lightboxImg.style.margin = 'auto';
}
    
    function closeLightboxModal() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Close lightbox when clicking X
    closeLightbox.addEventListener('click', closeLightboxModal);
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightboxModal();
        }
    });
    
    // Close lightbox with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            closeLightboxModal();
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});