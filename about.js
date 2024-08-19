
function blank() {
    document.getElementById('cardArch').innerHTML = ' ';
    document.getElementById('cardEmacs').innerHTML = ' ';
}

function showArch() {
    blank();
    document.getElementById('cardArch').innerHTML = `
    <div class="innerArch">
      <h2>Her er en liten insikt i hva arch linux er</h2>
      <img src="img/arch.png" />
      <h3>Hva er Arch Linux ?</h3>
      <ul>
      <li>Arch er en distro(variant) av Linux operativ systemet.</li>
      <li>Linux er en unix basert kjærne og ikke et fulværdig operativ system.</li>
      <li>Arch er den biten som gjør <b>Linux</b> til ett operativ system.</li>
      <li>Arch er kjent for å være vanskelig, og bleeding edge (men det kan diskuteres).</li>
      <li>Jeg har vel egentlig ingen god grunn, for hvorfor jeg bruker arch. Jeg synes det er litt kult og interessant.</li>
      <li>Arch linux har lært meg mye om hvordan en datamaskin fungere!</li>
      <li>Arch og Linux er åpenkilde</li>
      <a href="https://archlinux.org/" target="_blank">For mere info om Arch.</a>
      <br>
      <a href="https://en.wikipedia.org/wiki/Linux" target="_blank">For mere info om Linux.</a>
      </ul>
    </div>
`;
}

function showEmacs() {
    blank();
    document.getElementById('cardEmacs').innerHTML = `
    <div class="innerEmacs">
    <h2>Her er en liten insikt i hva Emacs er</2h>
    <img class="emacsImg" src="img/emacs.png"/>
    <h2>Hva er Gnu Emacs?</2h>
    <ul>
    <li>Emacs er en <b>text editor</b>.</li>
    <li>Emacs er en nett leser.</li>
    <li>Man kan redigere kode, seriøse documenter og mye annet i Emacs.</li>
    <li>Skrive epost.</li>
    <li>Irc chat (msn lignende bare mye eldre for di av oss som husker det).</li>
    <li>Søke etter filer er også en av de mage tingene Emacs kan gjøre.</li>
    <li>Kan ikke glemme det viktigste som selvfølgelig er den inne bygde tetris klonen.</li>
    <li>Det er mye mere Emacs kan gjøre mer, men jeg trur jeg har nevnt de mest vanlige.</li>
    <a href="https://www.gnu.org/software/emacs/" target="_blank">For mere info om Emacs</a>
    </ul>
    </div>
`;
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
