import { program } from 'commander';
import picocolors from 'picocolors';
import prompts from 'prompts';

import { version } from '../package.json';

const init = async () => {
  program.name('myCli').description('cli').version(version);

  program
    .command('init')
    .argument('<name>', 'init project')
    .option('-t, --template <template>', 'template')
    .action((name, option) => {
      console.log(picocolors.green(`init project', ${name}, ${option}`));
    });

  const result = await prompts([
    {
      type: 'text',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'number',
      name: 'age',
      message: 'How old are you?',
      initial: 18,
    },
    {
      type: 'confirm',
      name: 'cool',
      message: 'Are you cool?',
    },
    {
      type: 'select',
      name: 'color',
      message: 'Pick a color',
      choices: [
        { title: 'Red', value: '#ff0000' },
        { title: 'Green', value: '#00ff00' },
        { title: 'Blue', value: '#0000ff' },
      ],
    },
    {
      type: 'text',
      name: 'dir',
      message: 'Where to put the files?',
      initial: __dirname.split('/').pop(),
    },
  ]);

  console.log(
    picocolors.green(
      `Hello, ${result.name}!, ${result.age}, ${result.cool}, ${result.color}, ${result.dir}`
    )
  );

  program.parse();
};

init();
