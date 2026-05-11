const display = document.getElementById("display");
const popup = document.getElementById('myModal');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "SYNTAX ERROR";
    }
}

function openPopup() {
        popup.style.display = "block";
};

window.addEventListener('load', openPopup());

function closePopup() {
    popup.style.display = "none";
};
