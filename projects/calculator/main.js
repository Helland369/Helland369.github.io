const main = document.getElementById("mainDiv");

display();
function display() {
    main.innerHTML = `
        <div id="claculator">
            <input id="display" readonly>
            <div id="btn">
                <button onclick="controller('1')">1</button>
                <button onclick="controller('2')">2</button>
                <button onclick="controller('3')">3</button>
                <button onclick="controller('C')">C</button>
                <button onclick="controller('4')">4</button>
                <button onclick="controller('5')">5</button>
                <button onclick="controller('6')">6</button>
                <button onclick="controller('+')">+</button>
                <button onclick="controller('7')">7</button>
                <button onclick="controller('8')">8</button>
                <button onclick="controller('9')">9</button>
                <button onclick="controller('-')">-</button>
                <button onclick="controller('.')">.</button>
                <button onclick="controller('0')">0</button>
                <button onclick="controller('/')">÷</button>
                <button onclick="controller('*')">*</button>
                <button onclick="controller('pi')">π</button>
                <button onclick="controller('sq')">󰞄</button> 
                <button onclick="controller('%')">%</button> 
                <button onclick="equal()">=</button>
            </div>
        </div>
    `;
}

//√</button>

const adisp = document.getElementById("display");

function controller(input) {
    if (input == "C") {
        adisp.value = "";
    } else if (input == "pi") {
        adisp.value = Math.PI;
    } else if (input == "sq") {
        if (adisp.value !== "") {
            adisp.value = Math.sqrt(parseFloat(adisp.value)); // parseFloat; parse a string and return a float number.
        }
    } else {
        adisp.value += input;
    }
}

function equal() {
    adisp.value = eval(adisp.value); // does not work in the controller function for some reason...
}
