

//const bodyElement = document.querySelector("body").classList; // Get first element with the tag "body" // ikke pensum

const bodyElement = document.getElementById('bodyID').classList;

let currentColor;   // To store color in a variable

function remove() {   // Remove applyed color;
    bodyElement.remove(currentColor);
}

function changeBlue() {
    currentColor = 'blueStyle';
    bodyElement.add(currentColor);
}

function changeGreen() {
    currentColor = 'greenStyle';
    bodyElement.add(currentColor);
}

function changeYellow() {
    currentColor = 'yellowStyle';
    bodyElement.add(currentColor);
}

function changePurple() {
    currentColor = 'purpleStyle';
    bodyElement.add(currentColor);
}


// Too advanced
// Color selector
//function changeColor(color) {
//    if(color == 1) {
//        currentColor = 'blueStyle'; 
//        bodyElement.add(currentColor);
//    }
//    else if(color == 2) {
//        currentColor = 'greenStyle';
//        bodyElement.add(currentColor);
//    }
//    else if(color == 3) {
//        currentColor = 'yellowStyle';
//        bodyElement.add(currentColor);
//    }
//    else if(color == 4) {
//        currentColor = 'purpleStyle';
//        bodyElement.add(currentColor);
//    }
//}
