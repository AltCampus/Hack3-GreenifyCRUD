var dataArray = [];
var main = document.querySelector('main');

var hightIncomeArray = [];
var lowIncomeArray = [];
var midIncomeArray = [];

var showHightIncomeArray = [];
var showLowIncomeArray = [];
var showMidIncomeArray = [];

function getData() {
	console.log('emmpty array')
	var url = 'https://api.worldbank.org/v2/countries/all?per_page=304&format=json';
	fetch(url)
	.then(res => res.json())
	.then(data => {
		data[1].forEach(obj => {

			let tempObj = {
				name : obj.name,
				region : obj.region,
				incomeLevel : obj.incomeLevel,
				lendingType : obj.lendingType,
				capital : obj.capitalCity,
				longitude : obj.longitude,
				latitude : obj.latitude
			};
				dataArray.push(tempObj);
				hightIncomeArray = dataArray.filter( obj => (obj.incomeLevel.value === 'High income'));
				lowIncomeArray = dataArray.filter( obj => obj.incomeLevel.value === 'Low income')
				midIncomeArray = dataArray.filter( obj => obj.incomeLevel.value === 'Lower middle income')
			})
			console.log('fillarray')
	});
}

getData();




function showLowIncome() {
	let lowIncomeArray = [];
	dataArray.map(obj => {
		lowIncomeArray.push(`<p>${obj.name}</p>`)
	})
	main.innerHTML= `<div>${lowIncomeArray}</div>`
}

function showHighIncome() {
	hightIncomeArray.map(obj => {
		showHightIncomeArray.push(`
		<tr class='row'>
			<td>${obj.name}</td>
			<td>${obj.region.value}</td>
			<td>${obj.capital}</td>
			<td>${obj.incomeLevel.value}</td>
		</tr>`)
	})
	display(showHightIncomeArray);
}

function showMidIncome() {
	let lowIncomeArray = [];
	dataArray.map(obj => {
		lowIncomeArray.push(`<p>${obj.name}</p>`)
	})
	main.innerHTML= `<div>${lowIncomeArray}</div>`
}

function display(income) {
	main.innerHTML = 
	`<table>
		<tr class='titles'>
			<td>Country</td>
			<td>Region</td>
			<td>Capital</td>
			<td>Income Level</td>
		</tr>

		${income.join('')}
	</table>`
}




var lowIncomeBtn = document.querySelector('.low-income');
lowIncomeBtn.addEventListener('click', showHighIncome);
