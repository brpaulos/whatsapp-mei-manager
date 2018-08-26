module.exports = async (params) => {
  const user = params.user;

  try {
    const revenue = Number(params.message.replace(',', '.'));
    if (revenue != revenue) {
      throw Error('not a number');
    } else {
      await user.sendMessage(`Pronto! Anotei aqui, ${revenue} reais por mês`);
      await user.sendMessage(`Ótimo, ${user.name}, acho que vamos fazer um ótimo trabalho juntos.`, 700);

      await user.update({ action: 'farewell' });
    }
  } catch (error) {
    console.log('could not parse revenue', error);
    await user.sendMessage(`${user.name}, não consegui entender, consegue mandar de novo?`);
    await user.sendMessage('Exemplos: 1500,00 ou 1500', 700);
  }
}
