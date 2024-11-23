// Selecting elements
const revealButton = document.getElementById("revealButton"); // Button to reveal password modal
const passwordModal = document.getElementById("passwordModal"); // Password modal
const passwordInput = document.getElementById("passwordInput"); // Password input field
const submitPasswordButton = document.getElementById("submitPassword"); // Button to submit password
const openWhenSection = document.getElementById("openWhenSection"); // "Open When You Are..." section
const closeModalButton = document.getElementById("closeModal"); // Close button for modal

// The correct password
const correctPassword = "Pookie";

// Function to show the password modal
function showPasswordModal() {
    passwordModal.classList.add("active");
}

// Function to close the password modal
function closePasswordModal() {
    passwordModal.classList.remove("active");
}

// Function to check the password
function checkPassword() {
    const enteredPassword = passwordInput.value;
    if (enteredPassword === correctPassword) {
        alert("Correct Password! Unlocking the section...");
        openWhenSection.classList.add("active"); // Show the "Open When You Are..." section
        closePasswordModal(); // Close the modal
    } else {
        alert("Incorrect password. Please try again!");
        passwordInput.value = ""; // Clear the input field
    }
}

// Event listeners
revealButton.addEventListener("click", showPasswordModal);
closeModalButton.addEventListener("click", closePasswordModal);
submitPasswordButton.addEventListener("click", checkPassword);

// Close the modal when clicking outside of it
window.addEventListener("click", function (event) {
    if (event.target === passwordModal) {
        closePasswordModal();
    }
});
