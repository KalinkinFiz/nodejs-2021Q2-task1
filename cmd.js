#!/usr/bin/env node

const fs = require('fs');
const stream = require('stream');
const util = require('util');
const chalk = require('chalk');
const program = require('commander');
const pckg = require("./package.json");

const Validator = require('./variant_three/validator.class');
const DataTransformation = require('./variant_three/dataTransformation.class');

const { log, info } = console;
const errorMessage = chalk.red.bold("✘ Erorr!");
const successMessage = chalk.green.bold("✔ Successful!");
const codeMessage = chalk.yellow.bold("Code");

const pipeline = util.promisify(stream.pipeline);

const actionHandler = async () => {
    const { shift, input, output, action } = program.opts();

    // if (!Validator.isInteger(Number(shift))) {
    //   process.stderr.write(`${errorMessage} "Shift is not integer :("\n`);
    //     process.exit(1);
    // }
    if (action !== 'sortOddsOnly' && action !== 'dup') {
      process.stderr.write(
        `${errorMessage} \"Action must be included in the given list ['dup', 'sortOddsOnly'] :(\"\n`
      ); 
      process.exit(1);
    }

    Validator.isEmpty(input) && process.stdout.write('Enter the text and press ENTER to dup/sortOddsOnly | press CTRL + C to exit: ')

    const ReadableStream = !Validator.isEmpty(input) ? fs.createReadStream(input) : process.stdin;
    const WriteableStream = !Validator.isEmpty(output) ? fs.createWriteStream((output), { flags: 'a' }) : process.stdout;

    try {
      await pipeline(
        ReadableStream,
        new DataTransformation(Number(shift), action),
        WriteableStream
      );
      log(`${successMessage} method ${action}d`);
    } catch (ex) {
      process.stderr.write(`${errorMessage} ${ex.message}\n`);
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
  .requiredOption('-a --action <action>', 'An action dup/sortOddsOnly')
  .option('-i, --input <filename>', 'An input file')
  .option('-o --output <filename>', 'An output file')
  .action(actionHandler)

program.parse(process.argv);