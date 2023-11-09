'use strict';

// Задача 1
const productName = prompt('Наименование товара?');

const amount = +prompt('Количество товара?');
if (Number(isNaN(amount))) {
	alert('Вы ввели некорректные данные');
}

const category = prompt('Категория товара?');

const price = +prompt('Цена товара?');
if (Number(isNaN(price))) {
	alert('Вы ввели некорректные данные');
}

const totalAmount = amount * price;

console.log(`На складе ${amount} единицы товара "${productName}" на сумму ${totalAmount}$`);