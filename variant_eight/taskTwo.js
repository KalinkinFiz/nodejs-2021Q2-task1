// стр 37

/*
Вариант 8
Инверсия массива указывает, насколько далеко массив от сортировки. Инверсия массива – это пара элементов, которые расположены «вне своего естественного порядка».
*/

// пример
//strictEqual([1, 2, 3, 4])
// -> 0 inversions

//strictEqual([1, 3, 2, 4])
// -> 1 inversion: 2 and 3

//strictEqual([4, 1, 2, 3])
// -> 3 inversions: 4 and 1, 4 and 2, 4 and 3

/*
Цель:
Цель состоит в том, чтобы придумать функцию, которая может вычислять инверсии для любого произвольного массива.
*/

module.exports.strictEqual = function strictEqual(arr) {
    let inv_count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) inv_count++;
        }
    }
    return inv_count;
}

// console.log("Number of inversions: "+ strictEqual(arr));

// Дополнительный тест
//strictEqual(([]) // -> 0

//strictEqual( [6,5,4,3,2,1] )
// -> 15