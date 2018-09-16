document.querySelector('#loan-form').addEventListener('submit', calculateloan);

function calculateloan(e) {
	
	const results 			 = document.querySelector('#results');

	const amount 			 = document.querySelector('#amount');
	const interest 			 = document.querySelector('#interest');
	const years 			 = document.querySelector('#years');

	const monthlyPayment 	 = document.querySelector('#monthly-payment');
	const totalPayment 		 = document.querySelector('#total-payment');
	const totalInterest 	 = document.querySelector('#total-interest');

	const principal 		 = parseFloat(amount.value);
	const calculatedInterest = parseFloat(interest.value) / 100 / 12
	const calculatedPayments = parseFloat(years.value) * 12;

	const x 				 = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthly 			 = (principal*x*calculatedInterest)/(x-1);

	if (isFinite(monthly)) {
		results.style.display = 'block';

		monthlyPayment.value = monthly.toFixed(2);
		totalPayment.value   = (monthly * calculatedPayments).toFixed(2);
		totalInterest.value  = ((monthly * calculatedPayments) - principal).toFixed(2);
	} else {
		showError();
	}

	e.preventDefault();
}

function showError() {

	val = document.createElement('div');
	val.className = 'alert alert-danger';
	val.appendChild(document.createTextNode('Error'));

	elemnt = document.querySelector('#loan-form');
	elemnt.insertBefore(val, elemnt.childNodes[0]);

	setTimeout(removeErrorMsg,3000)
}

function removeErrorMsg(){
	alertDiv = document.querySelector('.alert-danger');
	alertDiv.style.display = 'none'
}