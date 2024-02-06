function login() {
    // Basic validation example
    const usernameOrEmail = document.getElementById('usernameOrEmail').value;
    const password = document.getElementById('password').value;

    if (usernameOrEmail && password) {
        // Simulate a successful login for demonstration
        console.log(`Logged in as ${usernameOrEmail}`);
    } else {
        // Handle login failure
        console.log("Login failed. Please enter valid credentials.");
    }
}

function forgotPassword() {
    // Simulate a pop-up notification for demonstration
    const email = prompt("Enter your email to reset password:");

    if (email) {
        const verificationCode = prompt("Enter the verification code sent to your email:");
        const newPassword = prompt("Enter your new password:");

        if (verificationCode && newPassword) {
            // Simulate a successful password reset for demonstration
            console.log(`Password reset successful for ${email}`);
        } else {
            // Handle password reset failure
            console.log("Password reset failed. Please enter valid information.");
        }
    } else {
        // Handle email input cancellation
        console.log("Password reset cancelled.");
    }
}
