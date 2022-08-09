// Generate your pin...
const generatePin = document.getElementById('generate-pin');
generatePin.addEventListener('click',randomPin)
let currentpin = document.getElementById('current-pin');
let matchPin = document.getElementById('match-pin');
let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function(){
   if(nowNumber == nowPin){ 
    document.getElementById('wrong-pin').style.display = 'block'
   }
   else{
    document.getElementById('matched-pin').style.display = 'block'
   }
});
// random pin generate
let nowPin = 0;  
function randomPin(){
    const masterPin = Math.random() * 9999;
    const roundNum = Math.round(masterPin);
    currentpin.value = roundNum;
    nowPin = roundNum;
}
// for pin number match
let nowNumber = 0;
function number(result){
    let resultNum = result.innerHTML;
    matchPin.value += resultNum;
    nowNumber = matchPin.value; 
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
function backspace(){
    let backMe = matchPin.value;
    matchPin.value = backMe.substring(0, backMe.length -1);
}
