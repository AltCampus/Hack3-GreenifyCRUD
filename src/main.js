

var url = 'https://api.worldbank.org/v2/countries/all?per_page=304&format=json';
fetch(url)
.then(res => res.json())
.then(data => {data[1].forEach(obj => {
    console.log(obj.name);
})});