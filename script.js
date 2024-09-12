document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const albumArt = document.getElementById('albumArt');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const trackTitle = document.getElementById('trackTitle');

    let isPlaying = false;
    let currentTrackIndex = 0;

    const tracks = [
        { src: 'track1.mp3', art: 'mass.jpg', title: 'Track 1' },
        { src: 'track2.mp3', art: 'kalki.jpg', title: 'Track 2' },
        { src: 'track3.mp3', art: 'demon.jpg', title: 'Track 3' }
    ];

    function loadTrack(index) {
        audio.src = tracks[index].src;
        albumArt.src = tracks[index].art;
        trackTitle.textContent = tracks[index].title;
    }

    function playPause() {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        } else {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    }

    function stop() {
        audio.pause();
        audio.currentTime = 0;
        playPauseBtn.textContent = 'Play';
        isPlaying = false;
    }

    function prevTrack() {
        if (currentTrackIndex > 0) {
            currentTrackIndex--;
            loadTrack(currentTrackIndex);
            playPause();
        }
    }

    function nextTrack() {
        if (currentTrackIndex < tracks.length - 1) {
            currentTrackIndex++;
            loadTrack(currentTrackIndex);
            playPause();
        }
    }

    playPauseBtn.addEventListener('click', playPause);
    stopBtn.addEventListener('click', stop);
    prevBtn.addEventListener('click', prevTrack);
    nextBtn.addEventListener('click', nextTrack);

    // Load the first track initially
    loadTrack(currentTrackIndex);
});
