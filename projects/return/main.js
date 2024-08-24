


const div = document.getElementById("div1");

function createAndShowHtml(color, fSize, text, fgColor, brdr, brdrSize) {
    div.innerHTML = `
    <div ${createStyle(color, fSize, fgColor, brdr, brdrSize)}>${text} </div>
`;
}

function createStyle(color, fSize, fgColor, brdr, brdrSize) {
    return `style="${createBGcolor(color)} ${createFontSize(fSize)} ${createColor(fgColor)} ${createBoarder(brdr, brdrSize)};"`;
}

function createBGcolor(color) {
    return `background-color: ${color};`;
}

function createFontSize(fSize) {
    return `font-size: ${fSize}px;`;
}

function createColor(fgColor) {
    return `color: ${fgColor};`;
}

function createBoarder(brdr, brdrSize) {
    return `border: black ${brdr} ${createBoarderSize(brdrSize)};`;
}

function createBoarderSize(brdrSize) {
    return `${brdrSize}px;`;
}
