// Challenge 1 ---- Easy

const myFunc = [1, 4, 7];
var total = 0 
for (var i = 0; i < myFunc.length; i++) {
    total += myFunc[i];
}
var avg = total / myFunc.length;
console.log(avg);

//   ---------------------

const number = [10, 5];
var total = 0 
for (var i = 0; i < number.length; i++) {
    total += number[i];
}
var avg = total / number.length;
console.log(avg);

// ------------------------

const myExample = [1.5, 3, 2.5, 1];
var total = 0 
for (var i = 0; i < myExample.length; i++) {
    total += myExample[i];
}
var avg = total / myExample.length;
console.log(avg);



// Challenge 2 -----   Medium

const arr = [4, 5, 6, 7, 0, 1, 2].indexOf(0);

console.log(arr);

const nums = [4, 5, 6, 7, 0, 1, 2].indexOf(4);
console.log(nums - 1);

// Challenge 3 --------    Hard
// completed on html file


// Challenge 4   -------     Very Hard

let base = [1,2,5];
let any = 11;

function coinDeno(arr,any) {
    let total = 0;
    let largest;
    while (any > 0) {
        largest = Math.max(...arr)
        if (largest > any){
          arr = removeLargest(arr);
          if(!arr.length) return -1;
        }
        else {
            any -= largest;
            total++;
        }
    }
    return total;
}

function removeLargest(arr) {
    let largest = Math.max(...arr)
    largest = arr.filter(arr => arr !== largest)
    return largest
}


console.log(coinDeno(base,any))
