const video = document.getElementById('wildlifeVideo');
const btn = document.getElementById('toggleBtn');
const wrapper = document.getElementById('videoWrapper');

btn.addEventListener('click', () => {
  if (!video.paused) {
    // Video is playing — pause and hide it
    video.pause();
    wrapper.style.display = 'none';
    btn.textContent = 'Play Video';
    btn.setAttribute('aria-pressed', 'true');
  } else {
    // Video is not playing — show and play it
    wrapper.style.display = 'block';
    btn.textContent = 'Hide Video';
    btn.setAttribute('aria-pressed', 'false');
    video.play();
  }
});

// Keep button label in sync if user pauses via native controls
video.addEventListener('pause', () => {
  if (wrapper.style.display !== 'none') {
    btn.textContent = 'Play Video';
    btn.setAttribute('aria-pressed', 'true');
  }
});

video.addEventListener('play', () => {
  btn.textContent = 'Hide Video';
  btn.setAttribute('aria-pressed', 'false');
});
