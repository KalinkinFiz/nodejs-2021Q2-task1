// стр 27

/*
Вариант 8
Считываем переменную n,
если n - целое число, возвращать строку с дефисом '-' перед каждым нечетным целым числом и после него, но не начинать и не заканчивать строку знаком тире.
Если n отрицательное, знак минус следует удалить.
Если n не является целым числом, вернуть пустое значение.
*/

// Пример
//dashatize(274)
// -> '2-7-4'

//dashatize(6815)
// -> '68-1--5'

function isInteger(num) {
    return (num ^ 0) === num;
}

function getlength(number) {
    return number.toString().length;
}


module.exports.dashatize = function dashatize(n) {

    if (isNaN(n)) {
        return NaN;
    }

    if (isInteger(n)) {

        if (n < 0) {
            n = n * -1;
        }

        let arr = [];
        const length = getlength(n);

        for(let i = 0; i < length; i++) {
            let element = parseInt((""+n).charAt(i));
            if (element % 2 != 0 && i != 0) {

                arr[i] = "-" + element;


                if (i != length - 1) {
                    arr[i] = arr[i] + "-";
                }
            } else {
                arr[i] = element;
            }
        }

        arr = arr.join('');
        return arr;

    } else {
        return "";
    }
};

// module.exports.TaskOne = { dashatize };

// Дополнительные тесты
//dashatize(NaN)
// -> Should return NaN

//dashatize(0)
// -> Should return 0

//dashatize(-1)
// -> Should return 1

//dashatize(-28369)
// -> Should return 28-3-6-9
