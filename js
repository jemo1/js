1
let numbers = [5, 10, 25, 100, 6, 18];
result = numbers.map(x = x % 2);
console.log(result);

 2
let numbers2 = [ 5, 25, 89, 120, 36] ;
numbers2.push('javascript','python'); 
console.log(numbers);

numbers2.unshift('html', 'css')
console.log(numbers);

numbers2.shift();
console.log(numbers);

numbers2.pop();
console.log(numbers);

 3
let array = [hello, javascript, html, 43, css, scss, 76, bootstrap, 88, 59];
let result3 = array.filter (string = typeof string === 'string')
console.log(result);
 4
let array = [hello, javascript, html, 43, css, scss, 76, bootstrap, 88, 59];
let result4 = array.filter (number = typeof number == 'number')
console.log(result);
 5
let cities = [
    {name 'los angeles', population 3792621},
    {name 'new york', population 8175133},
    {name 'chicago', population 2695598},
    {name 'houston', population 2099451},
    {
name 'philadelphia', population 1526006}
];
let result5 = cities.filter(x = x.population  3000000)
console.log(result);
 6
let xili = [ 'fortoxali', 'banani', 'msxali' ] ;
xili.push( 'vashli', 'ananasi')

xili.unshift('sazamtro')

xili.shift();

xili.pop();
console.log(xili);