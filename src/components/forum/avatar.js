export const generateAvatar =  async (username) => {
  const { createWriteStream } = require('fs')
  const { createAvatar } = require('@beyonk/initials-avatar')

  const output = createWriteStream('/some/output/file.jpg')
  const avatar = await createAvatar({ firstName: username, lastName: username }, output)
  return avatar
}