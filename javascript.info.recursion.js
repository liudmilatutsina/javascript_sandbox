// Sum all numbers till the given one
// with help of recursion
function sumRecursion(number) {
  return (number == 1) ? number : (number + sumRecursion(number - 1));
}

//with help of loop
function sumLoop(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++){
    sum += i;
  }
  return sum;
}

// with help of arithmetical progression formula
function sumFormula(number) {
  return number * (number + 1) / 2;
}


// Calculate factorial
function factorialRecursion (number){
  return (number == 1) ? number : (number * factorialRecursion(number - 1));
}


// Fibonacci
// with help of loop (more effective as better performance)
function loopFibonacci (number) {
  let n1 = 1; // first number of Fibonacci is 1
  let n2 = 1; // second number of Fibonacci is 1

  for (let i = 3; i <= number; i++){
    let n = n1 + n2;
    n1 = n2;
    n2 = n;
  }

  return n2;
}

// with help of recursion
function recursionFibonacci (number) {
  return (number <= 1) ? number : recursionFibonacci(number - 1) + recursionFibonacci(number - 2);
}


// Output a single-linked list (+in reverse order)
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// with help of loop
function outputListLoop (list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

// with help of recursion
function outputListRecursion (list) {
  console.log(list.value);
  if (list.next) {
    outputListRecursion(list.next);
  }
}


// with help of loop
function outputListReversedLoop (list) {
  let arr = [];
  let temp = list;

  while(temp){
    arr.push(temp.value);
    temp = temp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

// with help of recursion
function outputListReversedRecursion (list) {
  if (list.next) {
    outputListReversedRecursion(list.next);
  }

  console.log(list.value);
}

outputListReversedRecursion(list);