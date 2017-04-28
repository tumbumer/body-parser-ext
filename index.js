'use strict';

var bodyParser = require('body-parser');
var VError = require('verror');

var jsonGetter = Object.getOwnPropertyDescriptor(bodyParser, 'json').get;
delete bodyParser.json;

bodyParser.json = function (options) {
  return [jsonGetter()(options), jsonParseErrorHandler];
};

function jsonParseErrorHandler (err, req, res, next) {
  if (err instanceof Error && err.type === 'entity.too.large') {
    return next(new VError(
      {
        name: 'PayloadTooLargeError',
        cause: err
      },
      'Payload too large error'
    ));
  }

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

module.exports = bodyParser;
