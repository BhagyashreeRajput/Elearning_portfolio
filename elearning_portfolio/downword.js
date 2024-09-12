// downwords
// Slider 2
const slider12 = document.querySelector('.student_container12');
const slideHeight12 = 180; // Height of each sliding div
const totalSlides12 = 4; // Number of slides
const slideInterval12 = 3000; // Time between slides in milliseconds

// Clone the slides to make the loop continuous
function setupSlider() {
    const slides12 = document.querySelectorAll('.std_card12');
    const lastSlide = slides12[slides12.length - 1].cloneNode(true);
    const secondLastSlide = slides12[slides12.length - 2].cloneNode(true);

    // Prepend clones to the start of the slider for a seamless loop
    slider12.insertBefore(secondLastSlide, slides12[0]);
    slider12.insertBefore(lastSlide, secondLastSlide);
}

function startSlider() {
    setupSlider(); // Set up the slider with clones

    let currentIndex12 = totalSlides12;

    // Adjust initial position to the first "real" slide (after prepended clones)
    slider12.style.transform = `translateY(-${currentIndex12 * slideHeight12}px)`;

    // Set up the interval to change slides
    setInterval(() => {
        currentIndex12--;

        // Calculate the offset to move down
        const offset = -currentIndex12 * slideHeight12;
        slider12.style.transform = `translateY(${offset}px)`;
        slider12.style.transition = 'transform 1s ease-in-out';

        // Check if we need to reset the slider
        if (currentIndex12<= 0) {
            // Reset to the last "real" slide instantly for a seamless loop
            setTimeout(() => {
                slider12.style.transition = 'none'; // Disable transition for instant jump
                currentIndex12 = totalSlides12;
                slider12.style.transform = `translateY(-${currentIndex12 * slideHeight12}px)`;

                // Re-enable transition
                setTimeout(() => {
                    slider12.style.transition = 'transform 1s ease-in-out';
                }, 20); // Short delay to ensure the reset effect
            }, slideInterval12); // Delay before resetting to allow the transition effect
        }
    }, slideInterval12);
}

// Initialize the sliding effect
startSlider();



