describe('caclulation tests for calculateMonthlyPayment', function() {
	it('should calculate the monthly rate correctly', function() {
		let testValuesObj = {
			amount: 123000,
			years: 7,
			rate: 11
		};
		expect(calculateMonthlyPayment(testValuesObj)).toEqual('1326.47');
	});

	it('should return a result with 2 decimal places', function() {
		let testValuesObj = {
			amount: Math.floor(Math.random() * 10000),
			years: Math.floor(Math.random() * (13 - 1 + 1)) + 1,
			rate: (Math.random() * 10).toFixed(1)
		};
		let monthlyValue = calculateMonthlyPayment(testValuesObj);
		var result = monthlyValue - Math.floor(monthlyValue);
		expect(result).not.toEqual(0);
	});
});

describe('negative tests for calculateMonthlyPayment', function() {
	it('should not return an error for 0 values', function() {
		let testValuesObj = {
			amount: 0,
			years: 0,
			rate: 0
		};
		expect(calculateMonthlyPayment(testValuesObj)).toEqual('0.00');
	});

	it('should not return an error for empty valuess', function() {
		let testValuesObj = {
			amount: '',
			years: '',
			rate: ''
		};
		expect(calculateMonthlyPayment(testValuesObj)).toEqual('0.00');
	});
});
