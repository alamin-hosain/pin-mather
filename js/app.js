function generatePin() {
    const random = Math.round(Math.random() * 10000);  // Will get number output from here four or thre digit. 
    //convert it to string and chech for four digit and make sure it come out four digit.
    const randomStr = random + '';

    if (randomStr.length === 4) {
        return random;
    }
    else {
        return generatePin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = generatePin();
    const pinInput = document.getElementById('display-pin');
    pinInput.value = pin;
})



document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberInputField = document.getElementById('typed-numbers');

    const previousTypedNumber = typedNumberInputField.value;

    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberInputField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigit = digits.join('');

            typedNumberInputField.value = remainingDigit;
        }
    }
    else {
        const newNumber = previousTypedNumber + number;
        typedNumberInputField.value = newNumber;
    }

})


document.getElementById('verify-pin').addEventListener('click', function () {
    const newPin = document.getElementById('display-pin');
    const pin = newPin.value;

    const calculatorField = document.getElementById('typed-numbers');
    const calculator = calculatorField.value;

    const notifySucces = document.getElementById('pin-success');
    const notifyFailure = document.getElementById('pin-failure');

    if (pin === calculator) {
        notifySucces.style.display = 'block';
        notifyFailure.style.display = 'none';
    }
    else {
        const tryleft = document.getElementById('action');
        const action = parseInt(tryleft.innerText);

        const newAction = action - 1;

        notifySucces.style.display = 'none';
        notifyFailure.style.display = 'block';

        if (newAction === -1) {
            tryleft.innerText = newAction;
            alert('You have Reached Your Limit, Please try Again after 5 Minutes')
            newPin.value = '';
            calculatorField.value = '';
            tryleft.innerText = '3';
            notifyFailure.style.display = 'none';
        } else {
            tryleft.innerText = newAction;

        }




    }

})