// Generate your pin...
const generatePin = document.getElementById('generate-pin');
generatePin.addEventListener('click', randomPin)
let currentpin = document.getElementById('current-pin');
let matchPin = document.getElementById('match-pin');
let submitBtn = document.getElementById('submit');
// onsubmit button
submitBtn.addEventListener('click', function () {
    if (nowValue == nowPin) {
        document.getElementById('matched-pin').style.display = 'block'
        document.getElementById('wrong-pin').style.display = 'none'
    }
    else {
        document.getElementById('matched-pin').style.display = 'none'
        document.getElementById('wrong-pin').style.display = 'block'
    }
});
// random pin generate
let nowPin = 0;
function randomPin() {
    const masterPin = Math.random() * 9999;
    const roundNum = Math.round(masterPin);
    currentpin.value = roundNum;
    nowPin = roundNum;
}
// calculate function for display the value.
let nowValue;
function calculate(newvalue) {
    document.getElementById('match-pin').value += newvalue
   nowValue = document.getElementById('match-pin').value
   console.log(nowValue)
}
// clear function for C button
function clearMe() {
    document.getElementById('match-pin').value = null;
}
// Backspace function for (←) button
function backspace() {
    let backMe = matchPin.value;
    matchPin.value = backMe.substring(0, backMe.length - 1);
}