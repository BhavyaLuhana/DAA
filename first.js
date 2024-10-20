document.getElementById("playButton").addEventListener("click", function() {
    // Add the fade-out class to trigger the CSS transition
    document.body.classList.add("fade-out");

    // Use setTimeout to delay the navigation until after the fade-out is done (1s)
    setTimeout(function() {
        window.location.href = "index.html";
    }, 1000); // 1000ms = 1s to match the CSS transition duration
});
