
// code 2
const slider = document.querySelector('.who_slider');
const slideHeight = 280; // Height of each sliding div
const totalSlides = 3; // Number of slides
const slideInterval = 5000; // Time between slides in milliseconds

// Clone the slides to make the loop continuous
function setupSlider() {
    const slides = document.querySelectorAll('.who_slide1');
    const firstSlide = slides[0].cloneNode(true);
    const secondSlide = slides[1].cloneNode(true);

    // Append clones to the end of the slider for a seamless loop
    slider.appendChild(firstSlide);
    slider.appendChild(secondSlide);
}

function startSlider() {
    setupSlider(); // Set up the slider with clones

    let currentIndex = 0;
    
    // Set up the interval to change slides
    setInterval(() => {
        currentIndex++;
        
        // Calculate the offset
        const offset = -currentIndex * slideHeight;
        slider.style.transform = `translateY(${offset}px)`;
        
        // Check if we need to reset the slider
        if (currentIndex >= totalSlides) {
            // Reset to the start instantly for a seamless loop
            setTimeout(() => {
                slider.style.transition = 'none'; // Disable transition for instant jump
                slider.style.transform = `translateY(0px)`;

                // Reset currentIndex to 0
                currentIndex = 0;

                // Re-enable transition
                setTimeout(() => {
                    slider.style.transition = 'transform 1s ease-in-out';
                }, 20); // Short delay to ensure the reset effect
            }, slideInterval); // Delay before resetting to allow the transition effect
        }
    }, slideInterval);
}

// Initialize the sliding effect
startSlider();


