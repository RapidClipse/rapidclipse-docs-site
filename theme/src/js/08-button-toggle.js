;(function () {
// Get a reference to the button element by its ID
const toggleButton = document.querySelector('.nav-toggle');

// Initialize a variable to track the button state
let isToggled = false;

// Add a click event listener to toggle the state
toggleButton.addEventListener("click", function () {
    isToggled = !isToggled; // Toggle the state (from true to false or false to true)
    updateButtonState();
});

// Function to update the button's appearance based on the state
function updateButtonState() {
    const button = document.querySelector('.nav-toggle');

    if (isToggled) {
        // Set the button to the toggled state SVG
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="nav-toggle-icon" viewBox="0 0 16 16"> 
                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/> 
            </svg>
        `;
    } else {
        // Set the button to the non-toggled state SVG
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="nav-toggle-icon" viewBox="0 0 16 16"> 
                <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/> 
                <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/> 
                <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/> 
            </svg>
        `;
    }
}

// Initialize the button's appearance based on the initial state
updateButtonState();
})()