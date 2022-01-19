/*Вариант 3*/

/*Реализовать функцию, которая отсортирует нечетные числа в порядке возрастания, оставив четные числа на своих исходных позициях.*/


/*Пример*/ 

//sortArray([7, 1]) 
// -> [1, 7] 

//sortArray([5, 8, 6, 3, 4]) 
// -> [3, 8, 6, 5, 4] 

//sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) 
// -> [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


/*Дополнительные тесты */

//sortArray([5, 3, 2, 8, 1, 4]) 
// -> [1, 3, 2, 8, 5, 4] 

//sortArray([5, 3, 1, 8, 0]) 
// -> [1, 3, 5, 8, 0] 

//sortArray([])
// -> []


// Решение:

module.exports.sortOddsOnly = function sortOddsOnly (xs) {
  var n = xs.length;

  if (n == 0) {
    return '[]';
  }
  
  for (var i = 0; i < n - 1; i++) {
    if (xs[i] % 2 === 1) {
      for (var j = i + 1; j < n; j++) {
        if (xs[j] % 2 === 1) {
          if (xs[i] > xs[j]) {
            var min = xs[j];
            xs[j] = xs[i];
            xs[i] = min;
          }
        }
      }
    }
  }

  return xs;
}