const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;

let app;
if(env !== 'development') {
  require('babel-register');
  app = require('./src');
} else {
  app = require('./build').default;
}

app.listen(PORT, () => `Application started at: http://localhost:${PORT}`);
