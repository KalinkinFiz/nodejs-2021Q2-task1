#!/usr/bin/env node

const chalk = require('chalk');
const program = require('commander');
const pckg = require("./package.json");

const taskOne = require("./variant_eight/taskOne");
const taskTwo = require("./variant_eight/taskTwo");
//const Validator = require('./variant_eight/extensions/validator.class');

const { log, info } = console;
const errorMessage = chalk.red.bold("✘ Erorr!");
const successMessage = chalk.green.bold("✔ Successful!");
const codeMessage = chalk.yellow.bold("Code");

/*Вариант 8*/
const actionHandler = async () => {
    try {
        let { shift, action } = program.opts();

        /* Validation */
        // if (!Validator.isIn(action, ["encode", "decode"])) {
        //     process.stderr.write(
        //       `${errorMessage} \"Action must be included in the given list ['dashatize', 'strictEqual'] :(\"\n`
        //     );
        //     process.exit(1);
        // }

        let result;
        switch(action) {
            case 'dashatize':
                // if (!Validator.isInteger(Number(shift))) {
                //     process.stderr.write(`${errorMessage} "Shift is not integer :("\n`);
                //     process.exit(1);
                // }
                
                result = taskOne.dashatize(parseInt(shift));
                console.log(result);
                break;
            case 'strictEqual':
                // if (!Validator.isArray(Array(shift))) {
                //     process.stderr.write(`Value of shift must be an array of positive integers, but "${shift}" accepted!\n`);
                //     process.exit(1);
                // }

                // Parsing a json encoded array.
                const arr = JSON.parse(shift);

                result = taskTwo.strictEqual(arr);
                console.log(result);
                break;
            default:
                process.stderr.write(
                    `${errorMessage} \"Action must be included in the given list ['dashatize', 'strictEqual'] :(\"\n`
                  );              
                process.exit(1);
      }

      log(`${successMessage} method ${action}d`);
    } catch (ex) {
        process.stderr.write(`${errorMessage} ${e.message}\n`);
        process.exit(1);
    }
    
}

process.stdin.setEncoding('utf8');
process.on("exit", (code) => log(`${codeMessage} ${code}`));
process.on('SIGINT', _ => {
    process.exit(0); 
});

program.storeOptionsAsProperties(false).version(pckg.version);

program
  .requiredOption('-s, --shift <value>', 'A shift')
  .requiredOption('-a --action <action>', 'An action dashatize/strictEqual')
  .action(actionHandler);

program.parse(process.argv);

/*************************************************/
// Задание первое:
// node cmd -s 274 -a dashatize
// -> '2-7-4'

// node cmd -s 6815 -a dashatize
// -> '68-1--5'

// Дополнительные тесты

// node cmd -s NaN -a dashatize
// -> Should return NaN

// node cmd -s 0 -a dashatize
// -> Should return 0

// node cmd -s -1 -a dashatize
// -> Should return 1

// node cmd -s -28369 -a dashatize
// -> Should return 28-3-6-9

/*************************************************/
// Задание второе:
// node cmd -s '[1, 2, 3, 4]' -a strictEqual
// -> 0 inversions

// node cmd -s '[1, 3, 2, 4]' -a strictEqual
// -> 1 inversion: 2 and 3

// node cmd -s '[4, 1, 2, 3]' -a strictEqual
// -> 3 inversions: 4 and 1, 4 and 2, 4 and 3

// Дополнительные тесты

// node cmd -s '[]' -a strictEqual
// -> 0

// node cmd -s '[6, 5, 4, 3, 2, 1]' -a strictEqual
// -> 15
