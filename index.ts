import { start } from 'repl';
import { create, Whatsapp } from 'venom-bot';

create({ session: 'test' })
  .then((client) => {
    const shell = start('venom> ');
    shell.context.client = client;
    shell.on('exit', () => {
      client.close();
    });
  })
  .catch((err) => {
    console.log(err);
  });

  