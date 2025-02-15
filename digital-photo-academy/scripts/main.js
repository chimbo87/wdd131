// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Equipment reviews slider
    const reviewSlider = document.querySelector('.reviews-slider');
    const prevReviewBtn = document.getElementById('prev-review');
    const nextReviewBtn = document.getElementById('next-review');
    
    if (reviewSlider && prevReviewBtn && nextReviewBtn) {
        let currentPosition = 0;
        const cards = reviewSlider.querySelectorAll('.review-card');
        const cardWidth = cards[0].offsetWidth;
        const cardMargin = parseInt(window.getComputedStyle(cards[0]).marginRight);
        const totalWidth = cards.length * (cardWidth + cardMargin);
        const visibleWidth = reviewSlider.offsetWidth;
        
        function slideReviews(direction) {
            if (direction === 'next' && currentPosition > -(totalWidth - visibleWidth)) {
                currentPosition -= (cardWidth + cardMargin);
            } else if (direction === 'prev' && currentPosition < 0) {
                currentPosition += (cardWidth + cardMargin);
            }
            reviewSlider.style.transform = `translateX(${currentPosition}px)`;
        }
        
        prevReviewBtn.addEventListener('click', () => slideReviews('prev'));
        nextReviewBtn.addEventListener('click', () => slideReviews('next'));
    }
    
    // Testimonial carousel
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    
    if (testimonialCards.length && indicators.length) {
        indicators.forEach(indicator => {
            indicator.addEventListener('click', function() {
                const index = this.dataset.index;
                
                // Remove active class from all cards and indicators
                testimonialCards.forEach(card => card.classList.remove('active'));
                indicators.forEach(ind => ind.classList.remove('active'));
                
                // Add active class to selected card and indicator
                testimonialCards[index].classList.add('active');
                this.classList.add('active');
            });
        });
        
        // Auto-rotate testimonials every 5 seconds
        let currentTestimonial = 0;
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            
            // Remove active class from all cards and indicators
            testimonialCards.forEach(card => card.classList.remove('active'));
            indicators.forEach(ind => ind.classList.remove('active'));
            
            // Add active class to current card and indicator
            testimonialCards[currentTestimonial].classList.add('active');
            indicators[currentTestimonial].classList.add('active');
        }, 5000);
    }
    
    // Student Gallery
// Student Gallery
const galleryGrid = document.querySelector('.gallery-grid');
const loadMoreBtn = document.getElementById('load-more-gallery');

if (galleryGrid && loadMoreBtn) {
    // Sample gallery items with placeholder images
    const galleryItems = [
        { alt: 'Landscape photo by student', photographer: 'Alex Wong' },
        { alt: 'Portrait photo by student', photographer: 'Elena Petrova' },
        { alt: 'Street photography by student', photographer: 'Luis Garcia' },
        { alt: 'Macro photography by student', photographer: 'Sarah Johnson' },
        { alt: 'Wildlife photo by student', photographer: 'David Chen' },
        { alt: 'Architectural photo by student', photographer: 'Maya Patel' },
        { alt: 'Fashion photo by student', photographer: 'Jacob Miller' },
        { alt: 'Food photography by student', photographer: 'Olivia Martinez' },
        { alt: 'Night photography by student', photographer: 'Kenji Tanaka' },
        { alt: 'Travel photography by student', photographer: 'Amara Okafor' },
        { alt: 'Product photography by student', photographer: 'Thomas Weber' },
        { alt: 'Abstract photography by student', photographer: 'Sophia Lee' }
    ];
    
    let currentItems = 0;
    const itemsPerLoad = 4;
    
    function loadGalleryItems() {
        const itemsToLoad = Math.min(itemsPerLoad, galleryItems.length - currentItems);
        
        for (let i = 0; i < itemsToLoad; i++) {
            const item = galleryItems[currentItems + i];
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            // Generate a placeholder image URL with different colors for each image
            const hue = (currentItems + i) * 30 % 360;
            const placeholderUrl = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="hsl(${hue}, 70%, 80%)"/><text x="50%" y="50%" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="hsl(${hue}, 70%, 30%)">Student Photo ${currentItems + i + 1}</text></svg>`;
            
            galleryItem.innerHTML = `
                <img src="${placeholderUrl}" alt="${item.alt}">
                <div class="gallery-item-caption">
                    <p>By ${item.photographer}</p>
                </div>
            `;
            
            galleryGrid.appendChild(galleryItem);
        }
        
        currentItems += itemsToLoad;
        
        // Hide the load more button if all items have been loaded
        if (currentItems >= galleryItems.length) {
            loadMoreBtn.style.display = 'none';
        }
    }
    
    loadMoreBtn.addEventListener('click', loadGalleryItems);
    
    // Initial load
    loadGalleryItems();
}
    
    // Contact form validation and submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                formStatus.textContent = 'Please fill out all required fields.';
                formStatus.className = 'error';
                formStatus.classList.remove('hide');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formStatus.textContent = 'Please enter a valid email address.';
                formStatus.className = 'error';
                formStatus.classList.remove('hide');
                return;
            }
            
            // Simulate form submission
            formStatus.textContent = 'Sending your message...';
            formStatus.className = 'sending';
            formStatus.classList.remove('hide');
            
            // In a real application, you would send an AJAX request to your server here
            setTimeout(function() {
                formStatus.textContent = 'Your message has been sent successfully!';
                formStatus.className = 'success';
                contactForm.reset();
                
                // Hide the success message after 3 seconds
                setTimeout(function() {
                    formStatus.classList.add('hide');
                }, 3000);
            }, 1500);
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            // Basic validation
            if (!email) {
                alert('Please enter your email address.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // In a real application, you would send an AJAX request to your server here
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
});