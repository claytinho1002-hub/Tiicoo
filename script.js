// Atualiza o total dos serviços
const checkboxes = document.querySelectorAll('input[name="servico"]');
const totalElement = document.getElementById('total');

checkboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    let total = 0;
    checkboxes.forEach(c => {
      if (c.checked) total += parseFloat(c.value);
    });
    totalElement.textContent = total.toFixed(2);
  });
});

// Copiar chave Pix
document.getElementById('copiar').addEventListener('click', () => {
  const chave = document.getElementById('pix-chave');
  chave.select();
  document.execCommand('copy');
  alert('Chave Pix copiada!');
});

// Agendamento só após pagamento (manual)
document.getElementById('form-agenda').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('mensagem').textContent =
    "Agendamento enviado! Após confirmar o pagamento Pix, seu horário será validado.";
  this.reset();
});