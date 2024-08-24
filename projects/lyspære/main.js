


const lightBulb = document.getElementById("light");

let color;

function lightOnOff(state) {
    if(state == 1) {
        color = "yellow";
        lightBulb.style.backgroundColor = color;
        console.log(state, color);
    }
    else if (state == 2){
        color = "grey";
        lightBulb.style.backgroundColor = color;
        console.log(state, color);
    }
}

