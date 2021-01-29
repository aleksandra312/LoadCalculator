window.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('calc-form');
	if (form) {
		setupIntialValues();
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById('loan-amount').value,
		years: +document.getElementById('loan-years').value,
		rate: +document.getElementById('loan-rate').value
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	let amountInput = document.getElementById('loan-amount');
	let rateInput = document.getElementById('loan-rate');
	let yearsInput = document.getElementById('loan-years');

	amountInput.setAttribute('value', '25000');
	yearsInput.setAttribute('value', '4');
	rateInput.setAttribute('value', '7');

	let defaultValuesObj = {
		amount: +document.getElementById('loan-amount').value,
		years: +document.getElementById('loan-years').value,
		rate: +document.getElementById('loan-rate').value
	};

	calculateMonthlyPayment(defaultValuesObj);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	let currentUIValuesObj = getCurrentUIValues();
	let monthlyPayment = calculateMonthlyPayment(currentUIValuesObj);
	if (monthlyPayment > 0) {
		updateMonthly(monthlyPayment);
	} else {
		updateMonthly('Number of periods must be greater than 0');
	}
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	let principle = values.amount;
	let interestRate = values.rate / 12;
	let numOfPayments = values.years * 12;

	return (principle * interestRate / (1 - (Math.pow(1 + interestRate), -numOfPayments))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	console.log('monthly payment: ' + monthly);
	let monthlyPayment = document.querySelector('#monthly-payment');
	monthlyPayment.innerText = monthly;
}
