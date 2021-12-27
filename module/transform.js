const { Transform } = require('stream');

//const { caesarCipher } = require('./code');
const { dashatize } = require('./variant_eight/t_ask1');

class CaesarTransform extends Transform {
  constructor(shift, action) {
    super();
    this.shift = shift;
    this.action = action;
  }

  _transform(chunk, _, done) {
    let result = '';

    switch (this.action) {
      case 'dashatize':
        result = dashatize(chunk.toString('utf8'));
        break;
      case 'strictEqual':
        result = dashatize(chunk.toString('utf8'));
        break;
      default:
        process.stderr.write(' Erorr: Action not found\n');
        process.exit(1);
    }

    this.push(result);
    done();
  }
}

module.exports = CaesarTransform;