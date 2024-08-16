


function blank() {
    document.getElementById('cardTools').innerHTML = '';
    document.getElementById('cardEmacs').innerHTML = '';
    document.getElementById('cardHtml').innerHTML = '';
    document.getElementById('cardCss').innerHTML = '';
    document.getElementById('cardJS').innerHTML = '';
    document.getElementById('cardGame').innerHTML = '';
}

function toolsShow() {
    blank();
    document.getElementById('cardTools').innerHTML = `
  <div class="innerCard">
    Detter er noen av de viktigste verktøyene vi skal bruke:
      <ul>
        <li>
          Code editoren <a href="https://code.visualstudio.com/">Visual Studio Code</a>
          <br />Vi skal bruke noen <i>extensions</i>:
          <ul>
            <li> JavaScript-booster </li>
            <li> es6-string-html </li>
            <li> live-server </li>
            <li> live-share </li>
          </ul>
        </li>
        <li>Nettleser <a href="https://www.google.com/chrome/">Google Chrome</a></li>
      </ul>        
    </div>
`;
}

function emacsShow() {
    blank();
    document.getElementById('cardEmacs').innerHTML = `
  <div class="innerCard">
    Detter er den bedre editoren for alle former for text. Den er også åpen kilde!:
      <ul>
        <li>
          Emacs kan man finne her <a href="https://www.gnu.org/software/emacs/"> Emacs </a>
          <br /> Her er det noen bra <i> packages/extentions </i>:
          <ul>
            <li> LSP-mode </li>
            <li> JS2-mode </li>
            <li> Flycheck </li>
            <li> Evil-mode (aka vim motion keys) </li>
          </ul>
        </li>
        <li> Flere Emacs packages kan man finde her <a href="https://melpa.org/#/"> Melpa </a></li>
      </ul>        
    </div>
`;
}

function htmlShow() {
    blank();
    document.getElementById('cardHtml').innerHTML = `
  <div class="innerCard">
    Vi bruker HTML til å definere et dokument.
      <ul>
        <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
        <li>Tagger for grunnleggende formatering av tekst</li>
        <li><tt>&lt;div&gt;</tt></li>
        <li><tt>&lt;input type="text"&gt;</tt></li>
        <li><tt>&lt;button&gt;</tt></li>
        <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
        </li>
        <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
        </li>
      </ul>
    </div>
`;
}

function cssShow() {
    blank();
    document.getElementById('cardCss').innerHTML = `
  <div class="innerCard">
    Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
      <ul>
        <li><tt>background-color</tt></li>
        <li><tt>color</tt></li>
        <li><tt>padding</tt></li>
        <li><tt>margin</tt></li>
        <li><tt>border</tt></li>
        <li><tt>text-align</tt></li>
        <li><tt>font-size</tt></li>
        <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
        <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
        <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
        </li>
        <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
        </li>
      </ul>
    </div>
`;
}

function jsShow() {
    blank();
    document.getElementById('cardJS').innerHTML = `
  <div class="innerCard">
    Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
    ved
    å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
    <ul>
      <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
        Moodle.</li>
      <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
        Reference</a></li>
            
    </ul>
  </div>
`;
}

function bodyGame() {
    blank();
    document.getElementById('cardGame').innerHTML = `    
      <div id="head" class="bodyPart"></div>
      <div id="body" class="bodyPart"></div>
      <div id="legs" class="bodyPart"></div>
    `;
    head1();
    body1();
    legs1();
}

function head1() {
    document.getElementById('head').innerHTML = `
  <button onclick="head4()"> ◀ </button>
  <img src="img/head1.png" />
  <button onclick="head2()"> ▶ </button>
`;
}

function head2() {
    document.getElementById('head').innerHTML = `
  <button onclick="head1()"> ◀ </button>
  <img src="img/head2.png" />
  <button onclick="head3()"> ▶ </button>
`;
}

function head3() {
    document.getElementById('head').innerHTML = `
  <button onclick="head2()"> ◀ </button>
  <img src="img/head3.png" />
  <button onclick="head4()"> ▶ </button>
`;
}

function head4() {
    document.getElementById('head').innerHTML = `
  <button onclick="head3()"> ◀ </button>
  <img src="img/head4.png" />
  <button onclick="head1()"> ▶ </button>
`;
}

function body1() {
    document.getElementById('body').innerHTML = `
  <button onclick="body4()"> ◀ </button>
  <img src="img/body1.png" />
  <button onclick="body2()"> ▶ </button>
`;
}

function body2() {
    document.getElementById('body').innerHTML = `
  <button onclick="body1()"> ◀ </button>
  <img src="img/body2.png" />
  <button onclick="body3()"> ▶ </button>
`;
}

function body3() {
    document.getElementById('body').innerHTML = `
  <button onclick="body2()"> ◀ </button>
  <img src="img/body3.png" />
  <button onclick="body4()"> ▶ </button>
`;
}

function body4() {
    document.getElementById('body').innerHTML = `
  <button onclick="body3()"> ◀ </button>
  <img src="img/body4.png" />
  <button onclick="body1()"> ▶ </button>
`;
}

function legs1() {
    document.getElementById('legs').innerHTML = `
  <button onclick="legs4()"> ◀ </button>
  <img src="img/legs1.png" />
  <button onclick="legs2()"> ▶ </button>
`;
}

function legs2() {
    document.getElementById('legs').innerHTML = `
  <button onclick="legs1()"> ◀ </button>
  <img src="img/legs2.png" />
  <button onclick="legs3()"> ▶ </button>
`;
}

function legs3() {
    document.getElementById('legs').innerHTML = `
  <button onclick="legs2()"> ◀ </button>
  <img src="img/legs3.png" />
  <button onclick="legs4()"> ▶ </button>
`;
}

function legs4() {
    document.getElementById('legs').innerHTML = `
  <button onclick="legs3()"> ◀ </button>
  <img src="img/legs4.png" />
  <button onclick="legs1()"> ▶ </button>
`;
}
