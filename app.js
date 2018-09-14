const myHeading = document.getElementById("myHeading");
const button = document.getElementById("changeHeader");
const buttonColorInput = document.getElementById("headerColor");
const headerResetButton = document.getElementById("headerReset");

let defaultHeaderColor = 'red';

button.addEventListener('click', () => {
    if (buttonColorInput.value == '') {
        myHeading.style.color = defaultHeaderColor;
    }
    else {
        myHeading.style.color = buttonColorInput.value
    }
});

headerResetButton.addEventListener('click', () => {
    myHeading.style.color = defaultHeaderColor;
});