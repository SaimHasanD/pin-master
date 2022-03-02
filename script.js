// take random number
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

// put random number on output
function generatePin() {
    document.getElementById('wrongPin').style.display = "none"
    document.getElementById('rightPin').style.display = "none"

    const pin = getPin();
    document.getElementById('randomNumber').value = pin;
}

// take password value 
function passwordValue(newValue) {
    document.getElementById('passwordOutput').value += newValue;
}

// clear button 
function clearAll() {
    document.getElementById('passwordOutput').value = '';
    document.getElementById('randomNumber').value = '';
}

// backspace button
function backspace() {
    const password = document.getElementById('passwordOutput').value;
    document.getElementById('passwordOutput').value = password.substring(0, password.length - 1)
}

// password check on submit button
function passwordCheck() {
    const randomNumber = document.getElementById('randomNumber').value;
    const password = document.getElementById('passwordOutput').value;
    if (randomNumber == password) {
        document.getElementById('rightPin').style.display = "block";
        clearAll();
    } if(randomNumber != password){
        document.getElementById('wrongPin').style.display = "block"; 
        clearAll();
    }
}
