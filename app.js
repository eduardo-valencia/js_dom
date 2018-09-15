const purpleThings = document.getElementsByTagName('li');
const changeHeadingButton = document.querySelector(".change-heading");
const heading = document.querySelector('h1');
const changeHeadingInput = document.querySelector("#change-heading-input");

for (let i=0; i < purpleThings.length; i++) {
    purpleThings[i].style.color = 'purple'
};

changeHeadingButton.addEventListener('click', () => {
    if (changeHeadingInput.value != "") {
        heading.textContent = changeHeadingInput.value
    }
});