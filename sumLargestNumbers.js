// var arguments = process.argv;
// var numbers = arguments.slice(2);

let sumLargestNumbers = function(numbers) {
  var sum = 0;
  var largest = numbers[0];
  for(var i = 1; i < numbers.length; i++){
    if (numbers[i] > largest){
      largest = numbers[i];

    }
    // var index = numbers.indexOf(numbers[i]);
    // numbers.splice(index, i);
  }
  sum += largest;


  console.log(sum);
  console.log(numbers);
}

// function findLargest(numbers){
//   var largest = numbers[0];
//   for(var i = 1; i < numbers.length; i++){
//     if (numbers[i] > largest){
//       largest = numbers[i];
//     }
//   }
//   return largest;
// }

// console.log(sumLargestNumbers([1, 10]));
// console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));