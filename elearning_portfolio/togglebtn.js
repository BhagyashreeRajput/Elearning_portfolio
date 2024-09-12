// // script.js

// document.addEventListener('DOMContentLoaded', () => {
//     const studentBtn = document.getElementById('student-btn');
//     const instructorBtn = document.getElementById('instructor-btn');
//     const roleDisplay = document.getElementById('role-display');

//     studentBtn.addEventListener('click', () => {
//         roleDisplay.textContent = 'Student';
//         roleDisplay.className = 'role-display student';
//     });

//     instructorBtn.addEventListener('click', () => {
//         roleDisplay.textContent = 'Instructor';
//         roleDisplay.className = 'role-display instructor';
//     });
// });




// script.js

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const studentBtn = document.getElementById('student-btn');
    const instructorBtn = document.getElementById('instructor-btn');
    const roleDisplay = document.getElementById('role-display');
    const roleText = roleDisplay.querySelector('.role-text');
    const icon = roleDisplay.querySelector('.icon');

    function selectButton(selectedButton) {
        // Remove 'selected' class from both buttons
        studentBtn.classList.remove('selected');
        instructorBtn.classList.remove('selected');
        
        // Add 'selected' class to the selected button
        selectedButton.classList.add('selected');
    }

    studentBtn.addEventListener('click', () => {
        roleText.textContent = 'Student';
        roleDisplay.className = 'role-display student';
        icon.className = 'icon fa-regular fa-user'; // Replace with the appropriate Font Awesome class for Student icon

        selectButton(studentBtn);
    });

    instructorBtn.addEventListener('click', () => {
        roleText.textContent = 'Instructor';
        roleDisplay.className = 'role-display instructor';
        icon.className = 'icon fa-solid fa-chalkboard-user'; // Replace with the appropriate Font Awesome class for Instructor icon

        selectButton(instructorBtn);
    });
});
