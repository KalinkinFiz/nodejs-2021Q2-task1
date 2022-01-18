/*
Вариант 6
Учитывая массив из n целых чисел, найдите минимальное число для вставки в список, чтобы сумма всех элементов списка была равна ближайшему простому числу.

Примечания
1. Размер списка не менее 2.
2. Элементы списка только положительные (n > 0) и целые числа.
3. Возможно повторение чисел в списке.
4. Сумма нового списка должна равняться ближайшему простому числу.
*/

// Пример
// minimumNumber([3, 1, 2])
// -> 1

/*
Поскольку сумма элементов списка равна (6), минимальное число, которое нужно вставить для преобразования суммы в простое число, равно (1), что сделает сумму списка равной ближайшему простому числу (7).
*/

// Дополнительные тесты
//minimumNumber([3,1,2])
// -> 1

//minimumNumber([5,2])
// -> 0

//minimumNumber([1,1,1])
// -> 0

//minimumNumber([2,12,8,4,6])
// -> 5

//minimumNumber([50,39,49,6,17,28])
// -> 2

// Решение:

let MAX = 100005;
  
// Array to store primes
let isPrime = new Array(MAX).fill(0);
  
// function to calculate primes 
// using sieve of eratosthenes
function sieveOfEratostheneses() {
    isPrime[1] = true;
    for (let i = 2; i * i < MAX; i++) {
        if (!isPrime[i]) {
            for (let j = 2 * i; j < MAX; j += i) {
                isPrime[j] = true;
            }
                
        }
    }
}
  
// Find prime number greater 
// than a number
function findPrime(n) {
    let num = n + 1;
  
    // To return prime number
    // greater than n
    while (num > 0) {
        // check if num is prime
        if (!isPrime[num])
            return num;
  
        // increment num
        num = num + 1;
    }

    return 0;
}
  
// To find number to be added 
// so sum of array is prime
module.exports.minimumNumber = function minimumNumber(arr, shift) { 
    let n = arr.length;

    // call sieveOfEratostheneses
    // to calculate primes
    sieveOfEratostheneses();
  
    let sum = 0;
  
    // To find sum of array elements
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
         
    if (!isPrime[sum]) {
        return 0;
    }
       
  
    // To find prime number
    // greater then sum
    let num = findPrime(sum);
  
    // Return difference of 
    // sum and num
    let difference = num - sum;

    return difference;
}
