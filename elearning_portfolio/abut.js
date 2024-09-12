
// slider 2
const slider1 = document.querySelector('.student_container11');
const slideHeight1 = 190; // Height of each sliding div
const totalSlides1 = 4; // Number of slides
const slideInterval1 = 3000; // Time between slides in milliseconds

// Clone the slides to make the loop continuous
function setupSlider() {
    const slides1 = document.querySelectorAll('.std_card11');
    const firstSlide = slides1[0].cloneNode(true);
    const secondSlide = slides1[1].cloneNode(true);

    // Append clones to the end of the slider for a seamless loop
    slider1.appendChild(firstSlide);
    slider1.appendChild(secondSlide);
}

function startSlider() {
    setupSlider(); // Set up the slider with clones

    let currentIndex1 = 0;
    
    // Set up the interval to change slides
    setInterval(() => {
        currentIndex1++;
        
        // Calculate the offset
        const offset = -currentIndex1 * slideHeight1;
        slider1.style.transform = `translateY(${offset}px)`;
        
        // Check if we need to reset the slider
        if (currentIndex1 >= totalSlides1) {
            // Reset to the start instantly for a seamless loop
            setTimeout(() => {
                slider1.style.transition = 'none'; // Disable transition for instant jump
                slider1.style.transform = `translateY(0px)`;

                // Reset currentIndex to 0
                currentIndex1 = 0;

                // Re-enable transition
                setTimeout(() => {
                    slider1.style.transition = 'transform 1s ease-in-out';
                }, 20); // Short delay to ensure the reset effect
            }, slideInterval1); // Delay before resetting to allow the transition effect
        }
    }, slideInterval1);
}

// Initialize the sliding effect
startSlider();



