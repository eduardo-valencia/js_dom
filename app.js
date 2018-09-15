const purpleThings = document.getElementsByTagName('li');
const changeHeadingButton = document.querySelector(".change-heading");
const heading = document.querySelector('h1');
const changeHeadingInput = document.querySelector("#change-heading-input");
const toggleListBtn = document.querySelector('#toggle-list');
const list = document.querySelector("ul")

for (let i=0; i < purpleThings.length; i++) {
    purpleThings[i].style.color = 'purple'
};

changeHeadingButton.addEventListener('click', () => {
    if (changeHeadingInput.value != "") {
        heading.textContent = changeHeadingInput.value
    }
});

toggleListBtn.addEventListener('click', () => {
    if (list.style.display == 'none') {
        toggleListBtn.textContent = 'Hide List';
        list.style.display = 'block';
    }
    else {
        toggleListBtn.textContent = 'Show List';
        list.style.display = 'none';
    }
});