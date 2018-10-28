var dataArray = [];



function getData() {
	var url = 'https://api.worldbank.org/v2/countries/all?per_page=304&format=json';
	fetch(url)
	.then(res => res.json())
	.then(data => {data[1].forEach(obj => {
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
	})});
	console.log(dataArray);
}

getData();


