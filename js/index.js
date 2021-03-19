var valec1;
var valecc2;
function drdown(){

    var e = document.getElementById("currencyList");
    var e2 = document.getElementById("currencyList2");
    var value = e.value;
    var value2 = e2.value;

if(value === value2){



}

}

document.getElementById('currencyList').addEventListener('change', drdown)



fetch("https://free.currconv.com/api/v7/convert?q=PKR_USD&compact=ultra&apiKey=ef6861ff62c446fce20a").then(d =>d.json()).then(data =>console.log(data))
