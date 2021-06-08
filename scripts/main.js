let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === ('images/mozilla.png')){
        myImage.setAttribute('src', 'images/mozilla2.png');
    }else if(mySrc === ('images/mozilla2.png')) {
        myImage.setAttribute('src', 'images/mozilla3.png');
    }else {
        myImage.setAttribute('src', 'images/mozilla.png')
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUsername(){
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUsername();
    }else {
        localStorage.setItem('name' ,myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
    
}
if (!localStorage.getItem('name')){
    setUsername();
}else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function(){
    setUsername();
}
