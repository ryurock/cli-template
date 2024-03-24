import { Command } from 'commander';
import pc from "picocolors"

export const configCli = (program: Command): Command => {
  const config = program.command('config')
         .description(pc.green('設定コマンド'));
  config.command('set')
         .description(pc.green('設定ファイルを追加します'));
  return config;
};