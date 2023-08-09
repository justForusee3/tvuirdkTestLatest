// // document.addEventListener("DOMContentLoaded", function () {
// //     const videoPlayer = document.getElementById("videoPlayer");
// //     const playButton = document.getElementById("playButton");
// //     const videoCard = document.querySelector(".video-card");
// //     let isHovering = false;
// //     let hoverTimeout;

// //     // Set video URL
// //     const videoUrl = "https://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
// //     videoPlayer.src = videoUrl;

// //     // Initialize AAMPMediaPlayer
// //     var player = new AAMPMediaPlayer();
// //     player.load(videoUrl);

// //     // Play button click event
// //     playButton.addEventListener("click", togglePlayPause);

// //     // Hover event: Video plays for some seconds and repeats when hovering.
// //     videoCard.addEventListener("mouseover", () => {
// //         isHovering = true;
// //         videoPlayer.muted = true;
// //         hidePlayButton();
// //         videoPlayer.currentTime = 0;
// //         videoPlayer.play();
// //         hoverTimeout = setTimeout(() => {
// //             videoPlayer.pause();
// //             isHovering = false;
// //             showPlayButton();
// //         }, 20000); // Adjust the duration as needed
// //     });

// //     videoCard.addEventListener("mouseout", () => {
// //         clearTimeout(hoverTimeout);
// //         if (isHovering) {
// //             videoPlayer.pause();
// //             isHovering = false;
// //             videoPlayer.muted = false;
// //             showPlayButton();
// //         }
// //     });

// //     // Click event: Play/pause video
// //     playButton.addEventListener("click", togglePlayPause);

// //     // Function to hide the play button
// //     function hidePlayButton() {
// //         playButton.classList.add("hidden");
// //     }

// //     // Function to show the play button
// //     function showPlayButton() {
// //         playButton.classList.remove("hidden");
// //     }

// //     // Function to toggle play/pause
// //     function togglePlayPause() {
// //         if (videoPlayer.paused || videoPlayer.ended) {
// //             videoPlayer.play();
// //             playButton.textContent = "Pause";
// //         } else {
// //             videoPlayer.pause();
// //             playButton.textContent = "Play";
// //         }
// //     }
// // });







// document.addEventListener("DOMContentLoaded", function () {
//     const videoPlayer = document.getElementById("videoPlayer");
//     const playButton = document.getElementById("playButton");
//     const videoCard = document.querySelector(".video-card");
//     let isHovering = false;
//     let hoverTimeout;

//     // Set video URL
//     const videoUrl = "https://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
//     videoPlayer.src = videoUrl;

//     // Initialize AAMPMediaPlayer
//     var player = new AAMPMediaPlayer();
//     player.load(videoUrl);

//     // Play button click event
//     playButton.addEventListener("click", togglePlayPause);

//     // Hover event: Video plays for some seconds and repeats when hovering.
//     videoCard.addEventListener("mouseover", () => {
//         isHovering = true;
//         videoPlayer.muted = true;
//         hidePlayButton();
//         videoPlayer.currentTime = 0;
//         videoPlayer.play();
//         hoverTimeout = setTimeout(() => {
//             videoPlayer.pause();
//             isHovering = false;
//             showPlayButton();
//         }, 20000); // Adjust the duration as needed
//     });

//     videoCard.addEventListener("mouseout", () => {
//         clearTimeout(hoverTimeout);
//         if (isHovering) {
//             videoPlayer.pause();
//             isHovering = false;
//             videoPlayer.muted = false;
//             showPlayButton();
//         }
//     });

//     // Keydown event: Play video on "Enter" key press
//     videoPlayer.addEventListener("keydown", function (event) {
//         if (event.keyCode === 13) {
//             togglePlayPause();
//         }
//     });

//     // Function to hide the play button
//     function hidePlayButton() {
//         playButton.classList.add("hidden");
//     }

//     // Function to show the play button
//     function showPlayButton() {
//         playButton.classList.remove("hidden");
//     }

//     // Function to toggle play/pause
//     function togglePlayPause() {
//         if (videoPlayer.paused || videoPlayer.ended) {
//             videoPlayer.play();
//             playButton.textContent = "Pause";
//         } else {
//             videoPlayer.pause();
//             playButton.textContent = "Play";
//         }
//     }
// });



document.addEventListener("DOMContentLoaded", function () {
    const videoPlayer = document.getElementById("videoPlayer");
    const playButton = document.getElementById("playButton");
    const videoCard = document.querySelector(".video-card");
    let isHovering = false;
    let hoverTimeout;

    // Set video URL
    const videoUrl = "https://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
    videoPlayer.src = videoUrl;

    // Initialize AAMPMediaPlayer
    var player = new AAMPMediaPlayer();
    player.load(videoUrl);

    // Play button click event
    playButton.addEventListener("click", togglePlayPause);

    // Hover event: Video plays for some seconds and repeats when hovering.
    videoCard.addEventListener("mouseover", () => {
        isHovering = true;
        videoPlayer.muted = true;
        hidePlayButton();
        videoPlayer.currentTime = 0;
        videoPlayer.play();
        hoverTimeout = setTimeout(() => {
            videoPlayer.pause();
            isHovering = false;
            showPlayButton();
        }, 20000); // Adjust the duration as needed
    });

    videoCard.addEventListener("mouseout", () => {
        clearTimeout(hoverTimeout);
        if (isHovering) {
            videoPlayer.pause();
            isHovering = false;
            videoPlayer.muted = false;
            showPlayButton();
        }
    });

    // Keydown event: Play video on "Enter" key press
    videoCard.addEventListener("keydown", function (event) {
        console.log("hello");
        if (event.key === "Enter") {
            togglePlayPause();
        }
    });

    // Function to hide the play button
    function hidePlayButton() {
        playButton.classList.add("hidden");
    }

    // Function to show the play button
    function showPlayButton() {
        playButton.classList.remove("hidden");
    }

    // Function to toggle play/pause
    function togglePlayPause() {
        if (videoPlayer.paused || videoPlayer.ended) {
            videoPlayer.play();
            playButton.textContent = "Pause";
        } else {
            videoPlayer.pause();
            playButton.textContent = "Play";
        }
    }
});

