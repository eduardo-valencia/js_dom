const purpleThings = document.getElementsByTagName('li');
const changeHeadingButton = document.querySelector(".change-heading");
const heading = document.querySelector('h1');
const changeHeadingInput = document.querySelector("#change-heading-input");
const toggleListBtn = document.querySelector('#toggle-list');
const list = document.querySelector("ul")
const addItemInput = document.querySelector("#addItemInput")
const addItemBtn = document.querySelector("#addItemButton")
const removeItemBtn = document.querySelector("#remove-item-button");

for (let i=0; i < purpleThings.length; i++) {
    purpleThings[i].style.color = 'purple'
};

changeHeadingButton.addEventListener('click', () => {
    if (changeHeadingInput.value != "") {
        heading.textContent = changeHeadingInput.value
        changeHeadingInput.value = '';
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

addItemBtn.addEventListener('click', () => {
    let li = document.createElement('li');
    let ul = document.querySelectorAll('ul')[0];
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';
});

removeItemBtn.addEventListener('click', () => {
    let ul = document.querySelectorAll('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
});