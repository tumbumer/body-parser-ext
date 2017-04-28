# body-parser-ext

An extended version of
[body-parser](https://www.npmjs.com/package/body-parser)
middleware with additional error handling using
[VEerror](https://www.npmjs.com/package/verror)

## Extended error handling

 * JSON parse error
 * Payload too large error

## Installation

```bash
npm i -S body-parser-ext
```

## Usage

As well as [body-parser](https://www.npmjs.com/package/body-parser).

```javascript
const express = require('express');
const bodyParser = require('body-parser-ext');

const app = express();

// Parse application/json
app.use(bodyParser.json());

// ... Other middlewares

// The catch 404 error handler
app.use((req, res) => {
  res.status(404).end();
});

// The 'catch-all' error handler
app.use((err, req, res, next) => {
  // Bad request
  if (err.name === 'BodyParseJsonError') {
    return res.status(400).end();
  }

  // Payload too large
  if (err.name === 'PayloadTooLargeError') {
    return res.status(413).end();
  }

  // Unexpected error
  res.status(500).end();
});
```

## License

[MIT](LICENSE)
