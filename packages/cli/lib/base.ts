import { program } from 'commander';
import { version } from '../package.json';

program.name('myCli').description('cli').version(version);

program
  .command('init')
  .arguments('<name>')
  .option('-t, --template <template>', 'template')
  .description('init project')
  .action((name, option) => {
    console.log('init project', name, option);
  });

program.parse();
