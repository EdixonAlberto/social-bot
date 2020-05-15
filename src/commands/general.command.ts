import { MessageEmbed, User } from 'discord.js';

export const ping = (content: TContent): void => {
  content.server().channel.send('Pong 🏓');
};

export const avatar = async (content: TContent): Promise<void> => {
  const { author, channel, client } = content.server();
  const embed = new MessageEmbed();

  let user: User | undefined;

  if (content.params.length) {
    const users = client.users;

    if (content.params[0].startsWith('<')) {
      // Search by username: <@xxxxxxxxxxxxxxxxxxx>
      const username = content.params[0];
      user = users.cache.find((user: User) => `<@${user.id}>` === username);
    } else {
      // Search by id: xxxxxxxxxxxxxxxxxxx
      const id = content.params[0];
      user = users.cache.find((user: User) => user.id === id);
    }
  } else user = author;

  if (user) {
    // TODO: agregar mas campos para crear una salida mas compleja
    embed
      .setAuthor(`Foto de ${user.username}`)
      // .setTitle(title)
      .setImage(
        user.displayAvatarURL({
          dynamic: true // to show avatars animate
        })
      )
      // .setFooter(footer)
      .setColor('#FF8F40');

    await channel.lastMessage?.delete();
    channel.send(embed);
  } else channel.send('Usuario no encontrado 😕');
};
