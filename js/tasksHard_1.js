'use strict';

{
	const income = +prompt('Введите сумму вашего дохода!');

	if (income < 15000) {
		console.log(income * 0.13);
	} else if (income >= 15000 && income <= 50000) {
		console.log(income * 0.2);
	} else {
		console.log(income * 0.3);
	}
}