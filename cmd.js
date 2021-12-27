/*Вариант 8*/
const task1 = require("./module/variant_eight/task1");


const argv = process.argv.slice(2);

if (argv[0] == "--number" || argv[0] == "-n" && "dashatize") {
    try {
        let number = parseInt(argv[1]);
        let result = task1.dashatize(number);
        console.log(result);
    } catch (e) {
        process.stderr.write(` ${e.message}\n`);
        process.exit(1);
    }

}

if (argv[0] == "--number" || argv[0] == "-n" && "strictEqual") {

}
/*Задание первое:*/

// node cmd.js -n 274 dashatize
// -> '2-7-4'

// node cmd.js -n 6815 dashatize
// -> '68-1--5'

// Дополнительные тесты

// node cmd.js -n NaN dashatize
// -> Should return NaN

// node cmd.js -n 0 dashatize
// -> Should return 0

// node cmd.js -n -1 dashatize
// -> Should return 1

// node cmd.js -n -28369 dashatize
// -> Should return 28-3-6-9
