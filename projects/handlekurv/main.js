const main = document.getElementById("main");

let array = [
    "Eple",
    "Pære",
    "Plomme",
    "Appelsin",
    "Agurk",
    "Potet",
    "Gulerot",
    "Løk",
    "Purre",
    "Kiwi",
];

disp();
function disp() {
    main.innerHTML = `
        <ul id="inventory"></ul>
        <button onclick="append(1)">Eple</button>
        <button onclick="append(2)">Pære</button>
        <button onclick="append(3)">Plomme</button>
        <button onclick="append(4)">Appelsin</button>
        <button onclick="append(5)">Agurk</button>
        <button onclick="append(6)">Potet</button>
        <button onclick="append(7)">Gulerot</button>
        <button onclick="append(8)">Løk</button>
        <button onclick="append(9)">Purre</button>
        <button onclick="append(10)">Kiwi</button>
        <button onclick="removeItem()">Remove</button>
    `;
}

const inv = document.getElementById("inventory");

function loopArray() {
    for (let i = 0; i < array.length; i++) {
        array[i];
    }
}

function append(x) {
    loopArray();
    let selectedItem = array[x - 1];
    const invLi = document.createElement("li");
    const selected = document.createTextNode(selectedItem);
    invLi.appendChild(selected);
    inv.appendChild(invLi);
    console.log(selectedItem);
}

function removeItem() {
    inv.removeChild(inv.firstElementChild);
}
