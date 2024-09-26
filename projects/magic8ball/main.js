const main = document.getElementById("main");
let answere = "8";
let txtDisp = "fortune";

const magic = [
    "Yes",
    "No",
    "With great certainty",
    "With lack of certainty",
    "Not happening",
    "Indeed",
    "Only time will tell",
    "This is the end",
    "This is the beginning",
];

disp();
function disp() {
    main.innerHTML = `
        <div class="magic">
            <div class="magicBall" onclick="magickAnswere()">
                <div class="${txtDisp}">
                    ${answere}
                </div>
            </div>
            <div class="blackTxt">
                What may ty fortune be?
            </div>
        </div>
    `;
}

function magickAnswere() {
    let rand = magic[Math.floor(Math.random() * magic.length)];
    answere = rand;
    console.log(answere);
    txtDisp = "txt";
    disp();
}
