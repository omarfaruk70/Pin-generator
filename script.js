// Generate your pin...
const generatePin = document.getElementById('generate-pin');
generatePin.addEventListener('click',randomPin)

let currentpin = document.getElementById('current-pin');

// random pin generate
let nowPin = 0;
function randomPin(){
    const masterPin = Math.random() * 9999;
    const roundNum = Math.round(masterPin);
    currentpin.value = roundNum;
    nowPin = roundNum;
}































// calculate function for display the value.
function calculate(newvalue){
    document.getElementById('match-pin').value += newvalue    
}
// clear function for C button
function clearMe(){
    document.getElementById('match-pin').value = null;
}
// Backspace function for (←) button
