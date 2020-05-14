import Bot from './core/Bot';
import configLoad from './config';

async function main() {
  try {
    configLoad();

    const bot = new Bot({
      prefix: '-',
      token: global.config.discordToken
    });

    // bot.
  } catch (error) {
    console.error('!! ERROR', error.message);
  }
}

main();
