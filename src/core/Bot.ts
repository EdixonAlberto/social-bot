import { Client, Message } from 'discord.js';
import * as Command from '../commands';
import { commandsList } from '../enumerations';
import MessageProcessor from './MessageProcessor';

class Bot {
  private static client: Client;
  private static options: TOption;

  // TODO: agregar mas opciones de config para el bot
  constructor(_options: TOption) {
    Bot.options = _options;
    Bot.client = new Client();
    this.event();
  }

  public async start(): Promise<void> {
    try {
      await Bot.client.login(Bot.options.token);
    } catch (error) {
      console.log('>> BOT -> ', error.message);
    }
  }

  private event(): void {
    Bot.client.on('ready', () => console.log('>> BOT -> OK'));
    Bot.client.on('message', (message: Message) => {
      const { content } = new MessageProcessor(message);
      this.commands(content);
    });
  }

  private commands(content: TContent): void {
    if (content.prefix === Bot.options.prefix) {
      if (global.config.modeDebug)
        console.log('>> CONTENT -> ' + JSON.stringify(content));

      // Verify commnad in commnads list
      if (commandsList[content.command]) {
        Command[content.command](content); // Execute command dynamically
      } else {
        content.server().channel.send('Comando Incorrecto ❌');
        console.log('>> COMMAND -> Incorrect');
      }
    }
  }
}

export default Bot;
