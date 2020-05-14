export default async function configLoad() {
  const { config: configEnv } = await import('dotenv');
  configEnv();

  const ENV: NodeJS.ProcessEnv = process.env;

  const config: TConfig = {
    modeDebug: ENV.NODE_MODULE !== 'production',
    discordToken: ENV.DISCORD_TOKEN as string
  };

  global.config = config;
}
