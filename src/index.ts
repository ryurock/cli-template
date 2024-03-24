import { Command } from 'commander';
import pc from "picocolors"

const program = new Command();

program
  .name('cli')
  // .description('CLI Template')
  .description(pc.green('CLI Template'))

program.version('0.0.1', '-v, --version', 'output the current version');

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