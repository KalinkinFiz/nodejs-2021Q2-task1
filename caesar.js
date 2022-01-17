#!/usr/bin/env node

const fs = require('fs');
const stream = require('stream');
const util = require('util');
const chalk = require('chalk');
const program = require('commander');

const valid = require('./variant-six_modules/valid');
const CaesarTransform = require('./variant-six_modules/transform');

const pipeline = util.promisify(stream.pipeline);

const actions = async _ => {
    const { shift, input, output, action } = program.opts();

    if (!valid.isNumber(Number(shift))) {
        process.stderr.write(`Value of shift must be positive integer, but "${shift}" accepted!\n`);
        process.exit(1);
    }
    if (action !== 'decode' && action !== 'encode') {
        process.stderr.write(`Action must be "encode" or "decode"\n`);
        process.exit(1);
    }

    valid.isEmpty(input) && process.stdout.write('Enter the text and press ENTER to encode/decode | press CTRL + C to exit: ')

    const ReadableStream = !valid.isEmpty(input) ? fs.createReadStream(input) : process.stdin;
    const WriteableStream = !valid.isEmpty(output) ? fs.createWriteStream((output), { flags: 'a' }) : process.stdout;

    try {
      await pipeline(
        ReadableStream,
        new CaesarTransform(Number(shift), action),
        WriteableStream
      );
      process.stdout.write(`Text ${action}d\n`);
    } catch (e) {
      process.stderr.write(` ${e.message}\n`);
      process.exit(1);
    }
}

process.stdin.setEncoding('utf8');
process.on('exit', code => console.log(chalk.yellow.bold('Code: ') + code));
process.on('SIGINT', _ => { process.exit(0); });

program
  .requiredOption('-s, --shift <num>', 'A shift')
  .requiredOption('-a --action <action>', 'An action encode/decode')
  .option('-i, --input <filename>', 'An input file')
  .option('-o --output <filename>', 'An output file')
  .action(actions)

program.parse(process.argv);