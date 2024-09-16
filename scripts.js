// List of users and their passwords
const users = {
    "vanilla": "Rio",
    "snow": "Mr Mitcham",
    "pearl": "Middy",
    "oyster": "Rio Mitch",
    "eggshell": "Alex",
    "stone": "Ri",
    "ivory": "Jordan",
    "linen": "Morgan",
    "chalk": "Drew",
    "cotton": "Pat"
};

// Event listener for when the user presses Enter
document.getElementById("passwordInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {  // Check if the key pressed is Enter
        let password = event.target.value;
        if (users[password]) {    // Check if the password matches any in the list
            localStorage.setItem("userName", users[password]);  // Save the user's name

            // Add fade-out effect to the entire page
            document.body.classList.add('fade-out');

            // Wait for the fade-out animation to complete (1 second)
            setTimeout(function() {
                window.location.href = "welcome.html";  // Redirect to the second page
            }, 1000);  // 1000 ms = 1 second to match the fade-out duration
        } else {
            alert("Not quite :)");
        }
    }
});
