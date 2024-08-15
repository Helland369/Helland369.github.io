function incrementButton() {
    let element = document.getElementById('incrementText');
    let value = element.innerHTML;

    ++value;

    console.log(value);
    document.getElementById('incrementText').innerHTML = value;
}

function decrementButton() {
    let element = document.getElementById('incrementText');
    let value = element.innerHTML;

    --value;

    console.log(value);
    document.getElementById('incrementText').innerHTML = value;
}

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}
