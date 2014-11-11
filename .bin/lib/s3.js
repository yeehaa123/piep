const knox = require('knox');
const chalk = require('chalk');

try {
  module.exports = knox.createClient(require('../../config/secrets/s3'));
} catch (e) {
  console.log(chalk.red(
    'Unable to locate s3 credentials.',
    'Please `npm run get-secrets` first.'
  ));
  process.exit(1);
}
