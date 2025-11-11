
        // Mobile Navigation Toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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

        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! We will contact you shortly.');
            this.reset();
        });

        // Gallery Filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Lightbox Functionality
        const lightbox = document.getElementById('lightbox');
        const lightboxContent = document.getElementById('lightbox-content');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const lightboxClose = document.getElementById('lightbox-close');
        const lightboxPrev = document.getElementById('lightbox-prev');
        const lightboxNext = document.getElementById('lightbox-next');

        let currentIndex = 0;
        let currentItems = [];

        // Open lightbox
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                // Get all visible items based on current filter
                const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
                currentItems = Array.from(galleryItems).filter(item => {
                    if (activeFilter === 'all') return true;
                    return item.getAttribute('data-category') === activeFilter;
                });
                
                // Find the index of clicked item in filtered items
                currentIndex = currentItems.indexOf(item);
                
                openLightbox();
            });
        });

        function openLightbox() {
            const item = currentItems[currentIndex];
            const media = item.querySelector('img, video');
            const overlay = item.querySelector('.gallery-overlay');
            const title = overlay ? overlay.querySelector('h3').textContent : '';
            const description = overlay ? overlay.querySelector('p').textContent : '';
            
            // Clear previous content
            lightboxContent.innerHTML = '';
            
            // Create new media element
            if (media.tagName === 'IMG') {
                const img = document.createElement('img');
                img.src = media.src;
                img.alt = media.alt;
                lightboxContent.appendChild(img);
            } else if (media.tagName === 'VIDEO') {
                const video = document.createElement('video');
                video.src = media.querySelector('source').src;
                video.controls = true;
                video.autoplay = true;
                lightboxContent.appendChild(video);
            }
            
            // Set caption
            lightboxCaption.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
            
            // Show lightbox
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        // Close lightbox
        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        function closeLightbox() {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
            
            // Pause any playing videos
            const video = lightboxContent.querySelector('video');
            if (video) {
                video.pause();
            }
        }

        // Navigation
        lightboxPrev.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
            openLightbox();
        });

        lightboxNext.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % currentItems.length;
            openLightbox();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (lightbox.style.display === 'flex') {
                if (e.key === 'Escape') {
                    closeLightbox();
                } else if (e.key === 'ArrowLeft') {
                    currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
                    openLightbox();
                } else if (e.key === 'ArrowRight') {
                    currentIndex = (currentIndex + 1) % currentItems.length;
                    openLightbox();
                }
            }
        });

        // Auto-play videos on hover in gallery
        galleryItems.forEach(item => {
            const video = item.querySelector('video');
            if (video) {
                item.addEventListener('mouseenter', () => {
                    video.play();
                });
                item.addEventListener('mouseleave', () => {
                    video.pause();
                    video.currentTime = 0;
                });
            }
        });
  