const rateNum = document.querySelectorAll('.rate-num');
const submit = document.querySelector('.btn');
const thankyouState = document.querySelector('.thankyou-state');
const rateText = document.querySelector('.rate-selected');

const rateContainer = document.querySelector('.rate-container');

function rateSelected() {
    rateNum.forEach(num => {
        num.classList.remove('selected')
    })
    this.classList.toggle('selected')
}

function displayThankyou() {
    rateNum.forEach(rate => {                                                    //Validation of Submit Button
        if (rate.classList.contains('selected') === true) {                      //Are there ratings that are selected? Don't return anything
            const rateValue = rate.value;                                        //Get the value of the rate-num
            rateText.textContent = rateText.textContent.replace('0', rateValue); //Display the value to thankyou state
            thankyouState.style.zIndex = '1';                                    //Then Display the thank you state
            thankyouState.style.visibility = 'visible';
            document.querySelector('.thankyou-icon').classList.add('show');
            rateText.classList.add('show');
        } else {
            rateContainer.classList.add('shakeItOff')
        }
    })
}
// function rateRequire() {
//     console.log('Shake Start');
// }

function removeShake() {
    rateContainer.classList.remove('shakeItOff');
    // console.log('Shake Removed');
}


rateNum.forEach(num => { num.addEventListener('click', rateSelected) });
submit.addEventListener('click', displayThankyou);
// rateContainer.addEventListener('animationstart', rateRequire); Trial and Error. For Checking if animations fired
rateContainer.addEventListener('animationend', removeShake);

