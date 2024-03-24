import { Command } from '@commander-js/extra-typings';
import chalk from 'chalk';
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url);

const packageJson = require('../package.json')

const program = new Command();

program
  .name('cli')
  .description(chalk.green('CLI Template'))

program.version(packageJson.version, '-v, --version', 'output the current version');

program.command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.parse();