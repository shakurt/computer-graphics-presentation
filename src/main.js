import Reveal from 'reveal.js';
import 'reveal.js/reveal.css';
import './style.css';

// Initialize Reveal.js presentation deck
const deck = new Reveal({
  // Display presentation control arrows
  controls: true,

  // Help the user navigate slides
  keyboard: true,

  // Display a presentation progress bar
  progress: true,

  // Display the page number of the current slide
  slideNumber: 'c/t', // current / total

  // Push each slide change to the browser history
  history: true,
  hash: true,

  // Center the slides vertically
  center: true,

  // Enable speaker notes (can be toggled with 's')
  showNotes: false,

  // Transition style for slides (none/fade/slide/convex/concave/zoom)
  transition: 'convex', // 'convex' provides a fantastic 3D cube flipping effect

  // Transition speed (default/fast/slow)
  transitionSpeed: 'normal',

  // Transition style for full-page slide backgrounds (none/fade/slide/convex/concave/zoom)
  backgroundTransition: 'fade', // fading the backgrounds feels premium and organic

  // Bounding dimensions for slides to maintain crisp layouts across viewports
  width: 1100,
  height: 800,

  // Factor of the display size that should remain empty around the content
  margin: 0.08,

  // Bounds for smallest/largest possible scale to fit viewports
  minScale: 0.2,
  maxScale: 2.0
});

deck.initialize().then(() => {
  console.log('Reveal.js successfully initialized!');
});
