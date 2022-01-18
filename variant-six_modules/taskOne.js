// стр 25 и 35

/*
Вариант 6
Создайте функцию, которая принимает целое число n и возвращает формулу для (a + b)^2 в виде строки.
*/

//Пример
//formula(0)
// -> "1"

//formula(1)
// -> "a+b"

//formula(2)
// -> "a^2+2ab+b^2"

//formula(-2)
// -> "1/(a^2+2ab+b^2)"

//formula(3)
// -> "a^3+3a^2b+3ab^2+b^3"

//formula(5)
// -> "a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5"

// Решение:
module.exports.formulaAsString = function formulaAsString(n) {

    if (n == 0) {
        return 1;
    }

    let wasNumberNegative = false;
    if (n < 0) {
        n *= -1;
        wasNumberNegative = true;
    }

    let coefficient;
    let k = 0, a, b, c;
    let formula = '';

 while ( n >= k) {
    // Calculation of binomial coefficients.
    a = factorial(n);
    b = factorial(k);
    c = factorial(n - k);
    coefficient = a / (b * c);

    if (coefficient == 0 || coefficient == 1) {
        coefficient = '';
    }

    let degreeA = n - k;
    let degreeB = k;

    if (degreeA == 0) {
        degreeA = '';
    } else if (degreeA == 1) {
        degreeA = 'a';
    } else {
        degreeA = 'a^' + degreeA;
    }

    if (degreeB == 0) {
        degreeB = '';
    } else if (degreeB == 1) {
        degreeB = 'b';
    } else {
        degreeB = 'b^' + degreeB;
    }

    formula += `${coefficient}${degreeA}${degreeB}`;
   
   // Calculation of degree ratios.
   k = k + 1;
   if (n >= k) { 
       formula += '+';
   }
 }
    
    if (wasNumberNegative == true) {
        formula = `1/(${formula})`;
    }

    return formula;
} 

function factorial(n) {
    // Base case.
    if(n == 0 || n == 1) {
        return 1;
    // Recursive case.
    } else {
        return n * factorial(n - 1);
    }
}
