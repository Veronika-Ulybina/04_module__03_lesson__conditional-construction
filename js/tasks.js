'use strict';

// Задача 2
{
	const rain = Math.round(Math.random());

	const res = rain === 1 ? 'Пошёл дождь. Возьмите зонт!' : 'Дождя нет!';
	console.log(res);
}

// Задача 3
{
	const scoresOfMath = +prompt('Введите кол-во баллов по математике:');
	const scoresOfRussianLang = +prompt('Введите кол-во баллов по русскому языку:');
	const scoresOfInformatics = +prompt('Введите кол-во баллов по информатике:');
	const sumScore = scoresOfMath + scoresOfRussianLang + scoresOfInformatics;
	
	const res = sumScore >= 265 ? 'Поздравляю, вы поступили на бюджет!' : 'К сожалению, вы не прошли';
	console.log(res);
}

// Задача 4
{
	const amountMoney = +prompt('Сколько денег Вы хотите снять?');

	const isPossible = amountMoney >= 100 ? 'Возьмите деньги' : 'Операция недоступна';
	console.log(isPossible);
}