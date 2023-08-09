
// 1.4




document.addEventListener("DOMContentLoaded", function () {
    const videoPlayer = document.getElementById("videoPlayer");
    const playButton = document.getElementById("playButton");
    const videoCard = document.querySelector(".video-card");
    let isHovering = false;
    let hoverTimeout;

    // Initialize the Dash player
    const dashPlayer = dashjs.MediaPlayer().create();
    dashPlayer.initialize(
        videoPlayer,
        "https://dash.akamaized.net/dash264/TestCasesIOP33/multiplePeriods/4/manifest_multiple_Periods_Different_SegmentDuration.mpd",
        true
    );

    // Function to hide the play button
    function hidePlayButton() {
        playButton.classList.add("hidden");
    }

    // Function to show the play button
    function showPlayButton() {
        playButton.classList.remove("hidden");
    }

    // Hover event: Video plays for some seconds and repeats when hovering.
    videoCard.addEventListener("mouseover", () => {
        isHovering = true;
        videoPlayer.muted = true; // Mute the video on hover
        hidePlayButton(); // Hide the play button on hover
        videoPlayer.currentTime = 0; // Start from the beginning
        videoPlayer.play();
        hoverTimeout = setTimeout(() => {
            videoPlayer.pause();
            isHovering = false;
            showPlayButton(); // Show the play button after hovering
        }, 20000); // Video will pause after 5 seconds (adjust the duration as needed)
    });

    videoCard.addEventListener("mouseout", () => {
        clearTimeout(hoverTimeout);
        if (isHovering) {
            videoPlayer.pause();
            isHovering = false;
            videoPlayer.muted = false; // Unmute the video if the mouse leaves before 5 seconds
            showPlayButton(); // Show the play button if the mouse leaves before 5 seconds
        }
    });

    // Click event: Open video in full screen and play with sound.
    videoCard.addEventListener("click", () => {
        console.log("clicked Enter");
        videoPlayer.currentTime = 0; // Start from the beginning on click
        if (videoPlayer.paused) {
            // Request full-screen mode for the video element
            if (videoPlayer.requestFullscreen) {
                videoPlayer.requestFullscreen().then(() => {
                    // Play the video when full-screen mode is granted
                    videoPlayer.play();
                    videoPlayer.muted = false; // Enable sound
                }).catch((error) => {
                    console.log('Error attempting to enable full-screen mode:', error.message);
                });
            } else if (videoPlayer.mozRequestFullScreen) {
               
            }
        } else {
            
            videoPlayer.pause();
        }
    });
});
