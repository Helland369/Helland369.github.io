const main = document.getElementById("main");

let aCount = 0,
    eCount = 0,
    iCount = 0,
    oCount = 0,
    uCount = 0,
    yCount = 0,
    eeCount = 0,
    ooCount = 0,
    aaCount = 0;

let getIn;

disp();
function disp() {
    main.innerHTML = `
        <form id="inPut" action="javascript:">
            <input id="txtIn" type="text" placeholder="Enter a word" onchange="change(this)">
            <button onclick="input()">Return</button>
            </form>
                <p>A = ${aCount}</p>
                <p>E = ${eCount}</p>
                <p>I = ${iCount}</p>
                <p>O = ${oCount}</p>
                <p>U = ${uCount}</p>
                <p>Y = ${yCount}</p>
                <p>Æ = ${eeCount}</p>
                <p>Ø = ${ooCount}</p>
                <p>Å = ${aaCount}</p>
    `;
}

function change(x) {
    getIn = x.value;
}

function input() {
    // count reset
    aCount = 0;
    eCount = 0;
    iCount = 0;
    oCount = 0;
    uCount = 0;
    yCount = 0;
    eeCount = 0;
    ooCount = 0;
    aaCount = 0;

    for (let i = 0; i < getIn.length; i++) {
        const input = getIn.charAt(i);
        if (input == "a") {
            aCount++;
            //console.log(aCount);
        } else if (input == "e") {
            eCount++;
            //console.log(eCount);
        } else if (input == "i") {
            iCount++;
            //console.log(iCount);
        } else if (input == "o") {
            oCount++;
            //console.log(oCount);
        } else if (input == "u") {
            uCount++;
            //console.log(uCount);
        } else if (input == "y") {
            yCount++;
            //console.log(yCount);
        } else if (input == "æ") {
            eeCount++;
            //console.log(eeCount);
        } else if (input == "ø") {
            ooCount++;
            //console.log(ooCount);
        } else if (input == "å") {
            aaCount++;
            //console.log(aaCount);
        } else {
            console.log("error");
        }
    }
    disp();
}
