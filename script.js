<h2>按鍵試試看：a - s - d - f - g - h - j</h2>
<script>
const context = new AudioContext();
const notes = {
  'a': 261.63,  // C
  's': 293.66,  // D
  'd': 329.63,  // E
  'f': 349.23,  // F
  'g': 392.00,  // G
  'h': 440.00,  // A
  'j': 493.88   // B
};

document.addEventListener('keydown', (e) => {
  const freq = notes[e.key];
  if (!freq) return;

  const osc = context.createOscillator();
  const gain = context.createGain();
  osc.frequency.value = freq;
  osc.connect(gain);
  gain.connect(context.destination);
  gain.gain.setValueAtTime(0.3, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.5);
  osc.start();
  osc.stop(context.currentTime + 0.5);
});
</script>
