export default async function configLoad() {
  if (process.env.NODE_ENV !== 'production') {
    const { config: configEnv } = await import('dotenv');
    const result = configEnv();
    if (result.error) throw new Error(result.error.message);
  }

  const ENV: NodeJS.ProcessEnv = process.env;

  const config: TConfig = {
    modeDebug: ENV.NODE_ENV !== 'production',
    discordToken: ENV.DISCORD_TOKEN as string
  };

  global.config = config;
  console.log('>> CONFIG -> OK');
}
