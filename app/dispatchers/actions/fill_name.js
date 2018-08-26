module.exports = async (params) => {
  const user = params.user;

  await user.sendMessage(`Oi ${params.message}. É esse seu nome?\n(Por favor responda "Sim" ou "Não")`);
  await user.update({ action: 'confirm_name', name: params.message });
}
