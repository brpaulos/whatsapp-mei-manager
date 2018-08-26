module.exports = async (params) => {
  const user = params.user;
  const filename = `https://github.com/tarla/whatsapp-mei-manager/raw/master/Fechamento-Dom-26-Ago%20(1).pdf`;

  if (params.message.toLowerCase().includes('fechamento')) {
    await user.sendMessage(`Pronto, ${user.name}! É só baixar aqui: ${filename}`);
  }
}
