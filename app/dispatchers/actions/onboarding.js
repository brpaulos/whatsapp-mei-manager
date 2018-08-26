module.exports = async (params) => {
  const user = params.user;

  await user.sendMessage('Tudo bem? Eu sou a Ana, e vou te ajudar a organizar as suas finanças. \nQual o seu nome?');
  await user.update({ action: 'fill_name' });
}
