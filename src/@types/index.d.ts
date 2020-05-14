type TConfig = {
  modeDebug: boolean;
  discordToken: string;
};

type TOpcion = {
  prefix: string;
  token: string;
};

type TContent = {
  prefix: string;
  command: import('../enumerations').commandsList;
  server: () => import('discord.js').Message;
};

/************************************ DECLARATIONS **************************************/

declare namespace NodeJS {
  interface Global {
    config: TConfig;
  }
}
