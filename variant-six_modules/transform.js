const { Transform } = require('stream');

const { caesarCipher } = require('./code');
const { formulaAsString } = require('./taskOne');

class CaesarTransform extends Transform {
  constructor(shift, action) {
    super();
    this.shift = shift;
    this.action = action;
  }

  _transform(chunk, _, done) {
    let result = '';

    switch (this.action) {
      case 'formulaAsString':
        result = formulaAsString(this.shift);
        break;
      case 'decode':
        result = caesarCipher(chunk.toString('utf8'), -this.shift);
        break;
      default:
        process.stderr.write(' Erorr: Action not found\n');
        process.exit(1);
    }

    this.push(result + '\n');
    done();
  }
}

module.exports = CaesarTransform;