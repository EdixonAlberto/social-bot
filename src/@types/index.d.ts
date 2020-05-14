type TConfig = {
  modeDebug: boolean;
  discordToken: string;
};

type TOption = {
  prefix: string;
  token: string;
};

type TContent = {
  prefix: string;
  command: import('../enumerations').commandsList;
  params: Array<string>;
  server: () => import('discord.js').Message;
};

/************************************ DECLARATIONS **************************************/

declare namespace NodeJS {
  interface Global {
    config: TConfig;
  }
}
