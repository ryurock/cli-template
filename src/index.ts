import { Command } from 'commander';
import pc from "picocolors"
import {configCli} from './cli/config.js'

// import prompts from 'prompts'

const program = new Command();

program
  .name('cli')
  // .description('CLI Template')
  .description(pc.green('CLI Template'))

program.version('0.0.1', '-v, --version', 'output the current version');

configCli(program)

program.parse();