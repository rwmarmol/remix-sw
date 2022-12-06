// PostCSS configuration
module.exports = cfg => {

  const variables = require('./app/styles/variables.json');

  const
    dev = cfg.env === 'development',
    scss = cfg.file.extname === '.scss';

  return {
    map: dev ? true : false,
    parser:  scss ? 'postcss-scss' : false,
    plugins: [
      require('postcss-import')({
        path: ["app"],
      }),
      require('postcss-advanced-variables')({ variables }),
      require('autoprefixer'),
      require('postcss-nested'),
      dev ? null : require('cssnano')(),
    ]
  };

};
