import Bot from './core/Bot';
import configLoad from './config';

async function main() {
  try {
    await configLoad();

    const bot = new Bot({
      prefix: '/',
      token: global.config.discordToken
    });

    await bot.start();
  } catch (error) {
    console.error('!! ERROR', error.message);
  }
}

main();
