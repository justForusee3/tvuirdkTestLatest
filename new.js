window.onload = function() {
    // Get DOM elements
    var video = document.getElementById('video');
    var playPauseButton = document.getElementById('playPause');
    var progressBar = document.getElementById('progress-bar');

    // Set video URL
    var videoUrl = "https://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
    video.src = videoUrl;

    // Initialize AAMPMediaPlayer
    var player = new AAMPMediaPlayer();
    player.load(videoUrl);

    // Play/Pause button click event
    playPauseButton.addEventListener('click', togglePlayPause);

    // Enter key press event
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            togglePlayPause();
        }
    });

    // Update progress bar during playback
    video.addEventListener('timeupdate', updateProgressBar);

    // Video ended event
    video.addEventListener('ended', function() {
        playPauseButton.textContent = 'Play';
        progressBar.style.width = '0';
    });

    // Function to toggle play/pause
    function togglePlayPause() {
        if (video.paused || video.ended) {
            video.play();
            playPauseButton.textContent = 'Pause';
        } else {
            video.pause();
            playPauseButton.textContent = 'Play';
        }
    }

    // Function to update progress bar
    function updateProgressBar() {
        var progress = (video.currentTime / video.duration) * 100;
        progressBar.style.width = progress + '%';
    }
};
