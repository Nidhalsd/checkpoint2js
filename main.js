// reverse function
function reverse(str) {
    let strRev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        strRev += str[i];
    }
    return strRev
}
console.log(reverse("Hello world"));



// counter function
function counter(str) {
    let count = 0;
    for (let  i = 0 ; i < str.length ; i++) {
       count ++
    }
    return count
}
console.log(counter("Welcome to Gomycode"));



// capitalize function
function capitalize(str) {  
 let mystr = str.split (" ")
for (let i = 0; i < mystr.length; i++) {
    mystr[i] = mystr[i][0].toUpperCase() + mystr[i].substr(1);
}
return mystr.join (" ")
}
console.log(capitalize("hello world"));



// MinMax function
function findMinMax() {
    var Arr = [1225, 60, 8, 10, 40];
    var minValue = Math.min(...Arr);
    var maxValue = Math.max(...Arr);
    console.log("Minimum element is:" + minValue);
    console.log("Maximum Element is:" + maxValue);
    }
findMinMax();

 

// sumArray function
function sumArr(){
     var arr = [4, 8, 7, 13, 12]
     var sum = 0;
     for (var i = 0; i < arr.length; i++) {
         sum += arr[i];
     }
     console.log("Sum is " + sum)
     }
sumArr();


// function filtreArray
function filterArray(arr, condition) {
    var numbers = [1, 2, 3, 4, 5, 6];
    var evenNumbers = filterArray(numbers, num => num % 2 === 0);
    console.log(evenNumbers); 
    return arr.filter(condition);
}



// factorial function
function factorial(n) { 
    var ans = 1;    
    if(n === 0)
        return 1;
    for (var i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
}
console.log(factorial("5"));



// prime function
function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i === 0) {
        return false;}  }
    return num > 1; } 
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
  var primeNumbers = array.filter(isPrime);
  console.log(primeNumbers);



//   fibonacci function
  function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    if (num === 1) {
        return num1;
    } else if (num === 2) {
        return num2;
    } else {
        for (let i = 3; i <= num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }}
console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));