import { Message } from 'discord.js';
import { commandsList } from '../enumerations';

class MessageProcessor {
  private _content: TContent = {
    prefix: '',
    command: '' as commandsList,
    server: () => {
      return {} as Message;
    }
  };

  constructor(message: Message) {
    this.contentExtract(message);
  }

  private contentExtract(message: Message): void {
    const words = message.content.split(' ');
    const prefixCommand: string = words.shift() || '';

    this._content = {
      prefix: message.content.substr(0, 1),
      command: prefixCommand.substr(1) as commandsList,
      server: () => message
    };
  }

  public get content(): TContent {
    return this._content;
  }
}

export default MessageProcessor;
