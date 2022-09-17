const rateNum = document.querySelectorAll('.rate-num');
const submit = document.querySelector('.btn');
const thankyouState = document.querySelector('.thankyou-state')
const rateText = document.querySelector('.rate-selected')

function displaySelected() {
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
            thankyouState.style.visibility = 'visible'
        }
    })
}


rateNum.forEach(num => { num.addEventListener('click', displaySelected) })
submit.addEventListener('click', displayThankyou)

