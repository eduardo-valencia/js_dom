const purpleThings = document.getElementsByTagName('li');
const changeHeadingButton = document.querySelector(".change-heading");
const heading = document.querySelector('h1');
const changeHeadingInput = document.querySelector("#change-heading-input");
const toggleListBtn = document.querySelector('#toggle-list');
const list = document.querySelector("ul");
const addItemInput = document.querySelector("#addItemInput");
const addItemBtn = document.querySelector("#addItemButton");
const upBtn = document.querySelector(".Up");

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
    let button = document.createElement('button');

    li.textContent = addItemInput.value;
    li.style.color = 'purple';
    button.innerHTML = 'Remove';

    li.appendChild(button);
    ul.appendChild(li);

    addItemInput.value = '';
});

list.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        if (event.target.className == 'remove') {
            let button = event.target;
            let li = button.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
        else if (event.target.className == 'Up') {
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            ul.insertBefore(li, prevLi);
        }
        else if (event.target.className == "down") {
            let li = event.target.parentNode;
            let twoElementsDown = li.nextElementSibling.nextElementSibling;
            let ul = li.parentNode;
            ul.insertBefore(li, twoElementsDown);
        }
    }
});