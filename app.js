const purpleThings = document.getElementsByTagName('li');
const errorNotPurple = document.getElementsByClassName('error-not-purple');

for (let i=0; i < purpleThings.length; i++) {
    purpleThings[i].style.color = 'purple'
};

for (let index = 0; index < errorNotPurple.length; index++) {
    errorNotPurple[index].style.color = 'red';
    
}