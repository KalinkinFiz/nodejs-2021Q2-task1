const { Transform } = require('stream');

const { formulaAsString } = require('./taskOne');
const { minimumNumber } = require('./taskTwo');

class DataTransformation extends Transform {
  constructor(shift, action) {
    super();
    this.shift = shift;
    this.action = action;
  }

  _transform(chunk, _, done) {
    let result = '';

    switch (this.action) {
      case 'formulaAsString':
        let integer = parseInt(this.shift);
        result = formulaAsString(integer);
        break;
      case 'minimumNumber':
        // Parsing a json encoded array.
        let arr = JSON.parse(chunk.toString('utf8'), this.shift);
        result = minimumNumber(arr);
        break;
      default:
        process.stderr.write(' Erorr: Action not found\n');
        process.exit(1);
    }

    this.push(result + '\n');
    done();
  }
}

module.exports = DataTransformation;