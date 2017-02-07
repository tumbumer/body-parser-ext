# body-parser-ext

An extended version of
[body-parser](https://www.npmjs.com/package/body-parser)
middleware with JSON error parse handling using
[VEerror](https://www.npmjs.com/package/verror).

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
  // Bad Request
  if (err.name === 'BodyParseJsonError') {
    return res.status(400).end();
  }

  // Unexpected error
  res.status(500).end();
});
```

## License

[MIT](LICENSE)
