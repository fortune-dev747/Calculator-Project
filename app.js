// CALCULATOR PROGRAM
const display = document.getElementById("display");


function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } 
    catch (error) {
        display.value = "SYNTAX ERROR";
    }
}


// MODAL POPUP
const popup = document.getElementById('myModal');
function openPopup() {
        popup.style.display = "block";
};

window.addEventListener('load', openPopup());

function closePopup() {
    popup.style.display = "none";
};
