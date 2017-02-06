'use strict';

const bodyParser = require('body-parser');
const VError = require('verror');

exports = module.exports = main;

function main () {
  return bodyParser();
}

main.json = function (options) {
  return [bodyParser.json(options), jsonParseErrorHandler];
};

function jsonParseErrorHandler (err, req, res, next) {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return next(new VError(
      {
        name: 'BodyParseJsonError',
        cause: err
      },
      'Body parse JSON error'
    ));
  }

  next(err);
}

main.raw = function (options) {
  return bodyParser.raw(options);
};

main.text = function (options) {
  return bodyParser.text(options);
};

main.urlencoded = function (options) {
  return bodyParser.urlencoded(options);
};
