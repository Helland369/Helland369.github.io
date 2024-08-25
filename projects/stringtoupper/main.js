


const out = document.getElementById("outPut");
const txt = document.getElementById("input");

let str;

function toUpperCase() {
    str = txt.value;
    let strUpper = str[0].toUpperCase() + str.substring(1);
    out.textContent = `Hallo ${strUpper}`;
}

// txt.value // .value gets the user input
// strUpper // str[0] means first letter in the string. computers count from 0.
// -- toUpperCase() makes str[0] upper case.
// -- str.substring(1) adds the rest of the string behindr str[0]
