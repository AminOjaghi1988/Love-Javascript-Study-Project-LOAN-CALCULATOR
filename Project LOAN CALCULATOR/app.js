// Define UI Vars

let form = document.querySelector('#form-loan');

let amount = document.querySelector('#amount');

let interest = document.querySelector('#interest');

let year = document.querySelector('#year');

let monthlyPayment = document.querySelector('#monthly-payment');

let totalPayment = document.querySelector('#total-payment');

let interestPayment = document.querySelector('#interest-payment');

let card = document.querySelector('.card-body');

let heading = document.querySelector('.heading');




// Invoke All Events

loadAllEvents();



// Define Event Listerner Function

function loadAllEvents(){
    form.addEventListener('submit', (e) => {
        
        e.preventDefault();

        document.querySelector('.loading').style.display = 'block';

        setTimeout(calculateLoan, 2000);

    });
};



// Calculate Function

function calculateLoan(e){

    let intAmount = parseFloat(amount.value);

    let intInterest = parseFloat(interest.value);

    let intMonth = parseFloat(year.value) * 12;

    let calInterest = (intAmount * intInterest * (intMonth + 1)) / 2400;

    let calMonthlyPayment = (calInterest + intAmount) / intMonth;

    let calTotalPayment = calInterest + intAmount;

    if(isFinite(intAmount && intInterest && intMonth)){
        
        monthlyPayment.value = calMonthlyPayment.toFixed(2);

        totalPayment.value = calTotalPayment.toFixed(2);

        interestPayment.value = calInterest.toFixed(2);

        document.querySelector('.loading').style.display = 'none';

        document.querySelector('.results').style.display = 'block';

    }else{
        showError('Please Check All Fields!');

    };

};



// Check All Fields

function showError(error){

    document.querySelector('.loading').style.display = 'none';

    document.querySelector('.results').style.display = 'none';

    let alertError = document.createElement('div');

    alertError.className = 'alert alert-danger';

    alertError.textContent = error;

    card.insertBefore(alertError, heading);

    setTimeout(clearError, 3000);

};

function clearError(){

    document.querySelector('.alert').remove();

};