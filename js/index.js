//all variables start herevar
var switchFrom = document.getElementById("switchFrom")

 var setT=setTimeout(
     switchFrom.addEventListener("keydown", fetchfunc)
,300)
var e = document.getElementById("currencyList");
var e2 = document.getElementById("currencyList2");
var switchedValue =document.getElementById("switchedValue");
var va1 = e.value;
var va2 = e2.value;
//all variables ends here
//functions starts 

function drdown(data) {
  var value1 = e.value;
  var value2 = e2.value;

  //var IdName =data.currentTarget.id;
  console.log(data);
  if (value1 === value2) {
    switchCurrency();
 
  }
 va1 = e.value;
  va2 = e2.value;
 fetchfunc()

}
function fetchfunc() {
    if(typeof setT !== "undefined"){
        clearTimeout(setT);
      } 
    switchFrom.value.replace(/\D+/g, '')
    fetch(

    `https://free.currconv.com/api/v7/convert?q=${va1}_${va2}&compact=ultra&apiKey=ef6861ff62c446fce20a`
  )
    .then((d) => d.json())
    .then((data) =>{ 
      
        console.log(data);
    var switchTo =data[Object.keys(data)[0]];

 switchedValue.value= (switchTo*switchFrom.value).toFixed(2);
console.log(switchFrom.value,switchedValue.value)
}
    );}
function switchCurrency() {
  e2.value = va1;
  e.value = va2;
  va1 = e.value;
  va2 = e2.value;}
//functions ends here

//addEventListener starts here
e.addEventListener("change", drdown);
e2.addEventListener("change", drdown);

//addeventlistener ends here
