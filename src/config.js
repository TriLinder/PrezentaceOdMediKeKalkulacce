import Highlight from 'reveal.js/plugin/highlight/highlight';
import Markdown from 'reveal.js/plugin/markdown/markdown';
import MathReveal from 'reveal.js/plugin/math/math';
import RevealNotes from 'reveal.js/plugin/notes/notes';

// Import theme
import 'reveal.js/dist/theme/black.css';

// Import CSS for plugins
import 'reveal.js/plugin/highlight/monokai.css';

export default {
    // App Config
    app: {
        name: 'Od mědi ke kalkulačce',
    },
    // Reveal Config
    reveal: {
        plugins: [Highlight, Markdown, MathReveal.MathJax2, MathReveal.KaTeX, RevealNotes],
        hash: true,
        progress: false,
        maxScale: 100.0,
        margin: 0,
      mathjax2: {
        config: 'TeX-AMS_HTML-full',
        TeX: {
          Macros: {
            R: '\\mathbb{R}',
            set: [ '\\left\\{#1 \\; ; \\; #2\\right\\}', 2 ]
          }
        }
      },
    },
};
