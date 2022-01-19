const { Transform } = require('stream');

const { dup } = require('./taskOne');
const { sortOddsOnly } = require('./taskTwo');

class DataTransformation extends Transform {
  constructor(shift, action) {
    super();
    this.shift = shift;
    this.action = action;
  }

  _transform(chunk, _, done) {
    let result = '';

    // Parsing a json encoded array.
    let arr = JSON.parse(chunk.toString('utf8'), this.shift);

    switch (this.action) {
      case 'dup':
        result = dup(arr);
        break;
      case 'sortOddsOnly':
        result = sortOddsOnly(arr);
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