const slugify = require('slugify');

module.exports = async (params) => {
  const user = params.user;

  if (params.message && slugify(params.message).toLowerCase() == 'sim') {
    await user.sendMessage(`Ah, ótimo!`);

    await user.update({ action: 'confirm_cnpj' });
    await user.sendMessage(`Legal. Conta pra mim qual o seu cnpj`, 500);
  } else {
    await user.sendMessage('Ok! Vamos tentar de novo. \nEntão, conta pra mim o seu nome.');
    await user.update({ action: 'fill_name' });
  }
}
