export const clean = async (content: TContent): Promise<void> => {
  const server = content.server();
  const messages = await server.channel.messages.fetch();

  //  TODO: add security
  try {
    await server.channel.bulkDelete(messages);
  } catch (error) {
    console.error('>> ERROR-CLEAN ->', error.message);
  }
};
