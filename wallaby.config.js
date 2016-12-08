module.exports = wallaby => ({
  files: [
    'src/**/*',
    'test/**/*',
    '!test/**/*.test.js'
  ],
  
  tests: [
    'test/**/*.test.js'
  ],
  
  env: {
    type: 'node',
    runner: 'node',
    params: {
      env: 'MONGODB_URI=localhost:32768/classroom-tools-testing'
    }
  },
  
  // testFramework: 'ava',
  
  setup: () => {
//    require('babel-polyfill');
    require('./test/helper');
  },
  
  compilers: {
    '**/*.js': wallaby.compilers.babel()
  }
});
