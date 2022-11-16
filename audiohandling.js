// https://gist.github.com/MTDdk/2aaa51d1e8cc2e6bcf1d30c2f205afe6

var audio = document.querySelector('audio');

if (audio) {
    
audio.volume = 0.5;

  window.addEventListener('keydown', function (event) {

    var key = event.which || event.keyCode;

    if (key === 32) { // spacebar

      // eat the spacebar, so it does not scroll the page
      event.preventDefault();

      audio.paused ? audio.play() : audio.pause();
      
    }

  });
}