module.exports = async (params) => {
  const user = params.user;

  await user.sendMessage(`${user.name}, por enquanto estamos analisando os dados!\nEm breve falaremos com você novamente, obrigada!`);
  await user.update({ action: 'blank' });
}
