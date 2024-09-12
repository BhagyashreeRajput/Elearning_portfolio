const slider13 = document.querySelector('.student_container13');
const slideHeight13 = 190; // Height of each sliding div
const totalSlides13 = 4; // Number of slides
const slideInterval13 = 3000; // Time between slides in milliseconds

// Clone the slides to make the loop continuous
function setupSlider() {
    const slides13 = document.querySelectorAll('.std_card13');
    const firstSlide = slides13[0].cloneNode(true);
    const secondSlide = slides13[1].cloneNode(true);

    // Append clones to the end of the slider for a seamless loop
    slider13.appendChild(firstSlide);
    slider13.appendChild(secondSlide);
}

function startSlider() {
    setupSlider(); // Set up the slider with clones

    let currentIndex13 = 0;
    
    // Set up the interval to change slides
    setInterval(() => {
        currentIndex13++;
        
        // Calculate the offset
        const offset = -currentIndex13 * slideHeight13;
        slider13.style.transform = `translateY(${offset}px)`;
        
        // Check if we need to reset the slider
        if (currentIndex13>= totalSlides13) {
            // Reset to the start instantly for a seamless loop
            setTimeout(() => {
                slider13.style.transition = 'none'; // Disable transition for instant jump
                slider13.style.transform = `translateY(0px)`;

                // Reset currentIndex to 0
                currentIndex13 = 0;

                // Re-enable transition
                setTimeout(() => {
                    slider13.style.transition = 'transform 1s ease-in-out';
                }, 20); // Short delay to ensure the reset effect
            }, slideInterval13); // Delay before resetting to allow the transition effect
        }
    }, slideInterval13);
}

// Initialize the sliding effect
startSlider();

