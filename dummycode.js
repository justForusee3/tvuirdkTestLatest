
// // Get references to the video element and the play button
// const videoPlayer = document.getElementById("videoPlayer");
// const playButton = document.getElementById("playButton");

// // Initialize the Dash player
// const dashPlayer = dashjs.MediaPlayer().create();
// dashPlayer.initialize(videoPlayer, "https://dash.akamaized.net/dash264/TestCasesIOP33/multiplePeriods/4/manifest_multiple_Periods_Different_SegmentDuration.mpd", true);

// // Add event listener to the play button
// playButton.addEventListener("click", () => {
//     // Check if video is currently paused
//     if (videoPlayer.paused) {
//         // Play the video
//         videoPlayer.play();
//         playButton.textContent = "Pause";
//     } else {
//         // Pause the video
//         videoPlayer.pause();
//         playButton.textContent = "Play";
//     }
// });

// // Add event listener to enter full-screen mode
// videoPlayer.addEventListener("click", () => {
//     if (videoPlayer.requestFullscreen) {
//         videoPlayer.requestFullscreen();
//     } else if (videoPlayer.mozRequestFullScreen) {
//         videoPlayer.mozRequestFullScreen();
//     } else if (videoPlayer.webkitRequestFullscreen) {
//         videoPlayer.webkitRequestFullscreen();
//     } else if (videoPlayer.msRequestFullscreen) {
//         videoPlayer.msRequestFullscreen();
//     }
// });






// new code 


//  // Get references to the video element and the play button
//  const videoPlayer = document.getElementById("videoPlayer");
//  const playButton = document.getElementById("playButton");

//  // Initialize the Dash player
//  const dashPlayer = dashjs.MediaPlayer().create();
//  dashPlayer.initialize(videoPlayer, "https://dash.akamaized.net/dash264/TestCasesIOP33/multiplePeriods/4/manifest_multiple_Periods_Different_SegmentDuration.mpd", true);

//  // Add event listener to the play button
//  playButton.addEventListener("click", () => {
//      // Request full-screen mode for the video element
//      if (videoPlayer.requestFullscreen) {
//          videoPlayer.requestFullscreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      } else if (videoPlayer.mozRequestFullScreen) {
//          videoPlayer.mozRequestFullScreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      } else if (videoPlayer.webkitRequestFullscreen) {
//          videoPlayer.webkitRequestFullscreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      } else if (videoPlayer.msRequestFullscreen) {
//          videoPlayer.msRequestFullscreen().then(() => {
//              // Play the video when full-screen mode is granted
//              videoPlayer.play();
//          }).catch((error) => {
//              console.log('Error attempting to enable full-screen mode:', error.message);
//          });
//      }
//  });









// kjsdkljfhasdkk sadfkas


// <!DOCTYPE html>
// <html>
// <head>
//     <title>Video Player</title>
// </head>
// <body>
//     <!-- Video Element -->
//     <video id="videoPlayer" controls width="640" height="360">
//         <!-- Add video sources here -->
//     </video>

//     <!-- Play Button -->
//     <button id="playButton">Play</button>

//     <script src="https://cdn.dashjs.org/latest/dash.all.min.js"></script>
//     <script>
//            </script>
// </body>
// </html>





/////// new code 1.0


// document.addEventListener("DOMContentLoaded", function () {
//     const videoPlayer = document.getElementById("videoPlayer");
//     const playButton = document.getElementById("playButton");
//     const videoCard = document.querySelector(".video-card");

//     let isHovering = false;

//     // Hover event: Video plays for some seconds and repeats when hovering.
//     videoCard.addEventListener("mouseenter", () => {
//         isHovering = true;
//         videoPlayer.currentTime = 0; // Start from the beginning
//         videoPlayer.play();
//         setTimeout(() => {
//             if (isHovering) {
//                 videoPlayer.pause();
//             }
//         }, 5000); // Video will pause after 5 seconds (adjust the duration as needed)
//     });

//     videoCard.addEventListener("mouseleave", () => {
//         isHovering = false;
//         videoPlayer.pause();
//     });

//     // Click event: Open video in full screen and play with sound.
//     videoCard.addEventListener("click", () => {
//         if (videoPlayer.paused) {
//             // Request full-screen mode for the video element
//             if (videoPlayer.requestFullscreen) {
//                 videoPlayer.requestFullscreen().then(() => {
//                     // Play the video when full-screen mode is granted
//                     videoPlayer.play();
//                     videoPlayer.muted = false; // Enable sound
//                 }).catch((error) => {
//                     console.log('Error attempting to enable full-screen mode:', error.message);
//                 });
//             } else if (videoPlayer.mozRequestFullScreen) {
//                 // ... (Same code for other browser-specific APIs)
//             }
//         } else {
//             // If the video is already playing, pause it on click
//             videoPlayer.pause();
//         }
//     });
// });





// // new code 1.1


// document.addEventListener("DOMContentLoaded", function () {
//     const videoPlayer = document.getElementById("videoPlayer");
//     const playButton = document.getElementById("playButton");
//     const videoCard = document.querySelector(".video-card");
//     let isHovering = false;
  
//     // Initialize the Dash player
//     const dashPlayer = dashjs.MediaPlayer().create();
//     dashPlayer.initialize(
//       videoPlayer,
//       "https://dash.akamaized.net/dash264/TestCasesIOP33/multiplePeriods/4/manifest_multiple_Periods_Different_SegmentDuration.mpd",
//       true
//     );
  
//     // Hover event: Video plays for some seconds and repeats when hovering.
//     videoCard.addEventListener("mouseenter", () => {
//       isHovering = true;
//       videoPlayer.currentTime = 0; // Start from the beginning
//       videoPlayer.play();
//       setTimeout(() => {
//         if (isHovering) {
//           videoPlayer.pause();
//         }
//       }, 15000); // Video will pause after 5 seconds (adjust the duration as needed)
//     });
  
//     videoCard.addEventListener("mouseleave", () => {
//       isHovering = false;
//       videoPlayer.pause();
//     });
  
//     // Click event: Open video in full screen and play with sound.
//     videoCard.addEventListener("click", () => {
//       if (videoPlayer.paused) {
//         // Request full-screen mode for the video element
//         if (videoPlayer.requestFullscreen) {
//           videoPlayer.requestFullscreen().then(() => {
//             // Play the video when full-screen mode is granted
//             videoPlayer.play();
//             videoPlayer.muted = false; // Enable sound
//           }).catch((error) => {
//             console.log('Error attempting to enable full-screen mode:', error.message);
//           });
//         } else if (videoPlayer.mozRequestFullScreen) {
//           // ... (Same code for other browser-specific APIs)
//         }
//       } else {
//         // If the video is already playing, pause it on click
//         videoPlayer.pause();
//       }
//     });
//   });




  // new code 1.2

//   document.addEventListener("DOMContentLoaded", function () {
//     const videoPlayer = document.getElementById("videoPlayer");
//     const playButton = document.getElementById("playButton");
//     const videoCard = document.querySelector(".video-card");
//     let isHovering = false;
//     let hoverTimeout;
    
//     // Initialize the Dash player
//     const dashPlayer = dashjs.MediaPlayer().create();
//     dashPlayer.initialize(
//       videoPlayer,
//       "https://dash.akamaized.net/dash264/TestCasesIOP33/multiplePeriods/4/manifest_multiple_Periods_Different_SegmentDuration.mpd",
//       true
//     );
    
//     // Hover event: Video plays for some seconds and repeats when hovering.
//     videoCard.addEventListener("mouseover", () => {
//       isHovering = true;
//       videoPlayer.currentTime = 0; // Start from the beginning
//       videoPlayer.play();
//       hoverTimeout = setTimeout(() => {
//         videoPlayer.pause();
//         isHovering = false;
//       }, 20000); // Video will pause after 5 seconds (adjust the duration as needed)
//     });
  
//     videoCard.addEventListener("mouseout", () => {
//       clearTimeout(hoverTimeout);
//       if (isHovering) {
//         videoPlayer.pause();
//         isHovering = false;
//       }
//     });
    
//     // Click event: Open video in full screen and play with sound.
//     videoCard.addEventListener("click", () => {
//       if (videoPlayer.paused) {
//         // Request full-screen mode for the video element
//         if (videoPlayer.requestFullscreen) {
//           videoPlayer.requestFullscreen().then(() => {
//             // Play the video when full-screen mode is granted
//             videoPlayer.play();
//             videoPlayer.muted = false; // Enable sound
//           }).catch((error) => {
//             console.log('Error attempting to enable full-screen mode:', error.message);
//           });
//         } else if (videoPlayer.mozRequestFullScreen) {
//           // ... (Same code for other browser-specific APIs)
//         }
//       } else {
//         // If the video is already playing, pause it on click
//         videoPlayer.pause();
//       }
//     });

    
//   });




//   document.addEventListener("DOMContentLoaded", function () {
//     const videoPlayer = document.getElementById("videoPlayer");
//     const playButton = document.getElementById("playButton");
//     const videoCard = document.querySelector(".video-card");
//     let isHovering = false;
//     let hoverTimeout;

//     // Initialize the Dash player
//     const dashPlayer = dashjs.MediaPlayer().create();
//     dashPlayer.initialize(
//         videoPlayer,
//         "https://dash.akamaized.net/dash264/TestCasesIOP33/multiplePeriods/4/manifest_multiple_Periods_Different_SegmentDuration.mpd",
//         true
//     );

//     // Function to hide the play button
//     function hidePlayButton() {
//         playButton.classList.add("hidden");
//     }

//     // Function to show the play button
//     function showPlayButton() {
//         playButton.classList.remove("hidden");
//     }

//     // Hover event: Video plays for some seconds and repeats when hovering.
//     videoCard.addEventListener("mouseover", () => {
//         isHovering = true;
//         hidePlayButton(); // Hide the play button on hover
//         videoPlayer.currentTime = 0; // Start from the beginning
//         videoPlayer.play();
//         hoverTimeout = setTimeout(() => {
//             videoPlayer.pause();
//             isHovering = false;
//             showPlayButton(); // Show the play button after hovering
//         }, 20000); // Video will pause after 5 seconds (adjust the duration as needed)
//     });

//     videoCard.addEventListener("mouseout", () => {
//         clearTimeout(hoverTimeout);
//         if (isHovering) {
//             videoPlayer.pause();
//             isHovering = false;
//             showPlayButton(); // Show the play button if the mouse leaves before 5 seconds
//         }
//     });

//     // Click event: Open video in full screen and play with sound.
//     videoCard.addEventListener("click", () => {
//         if (videoPlayer.paused) {
//             // Request full-screen mode for the video element
//             if (videoPlayer.requestFullscreen) {
//                 videoPlayer.requestFullscreen().then(() => {
//                     // Play the video when full-screen mode is granted
//                     videoPlayer.play();
//                     videoPlayer.muted = false; // Enable sound
//                 }).catch((error) => {
//                     console.log('Error attempting to enable full-screen mode:', error.message);
//                 });
//             } else if (videoPlayer.mozRequestFullScreen) {
//                 // ... (Same code for other browser-specific APIs)
//             }
//         } else {
//             // If the video is already playing, pause it on click
//             videoPlayer.pause();
//         }
//     });
// });

  