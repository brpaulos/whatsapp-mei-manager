const slugify = require('slugify');
const request = require('request-promise');

module.exports = async (params) => {
  const user = params.user;

  try {
    const response = await request.get(`https://www.receitaws.com.br/v1/cnpj/${params.message}`);
    const json = JSON.parse(response);

    if (json.status == 'ERROR') {
      await user.sendMessage('Opa, parece que esse cnpj não é válido');
      await user.sendMessage('Pode enviar novamente, por favor?', 500);
    } else {
      await user.update({ action: 'confirm_revenue', cnpj: params.message });

      await user.sendMessage('Tudo certo! Muito obrigada!');
      await user.sendMessage('Agora, para eu te ajudar, sabe me dizer qual foi o seu faturamento mês passado?', 700);
      await user.sendMessage('Exemplos: 1500,00 ou 1500', 1200);
    }
  } catch (error) {
    console.log('could not fetch cnpj external api', error);
    await user.sendMessage('Desculpa, pode enviar de novo? (Por favor, envie só os números, sem pontuação)');
  }
}
