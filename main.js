const buttonsDonate = document.querySelectorAll(".button-donate");
const modal = document.getElementById("dialog");
const buttonFecha = document.getElementById("fechar-modal");

buttonsDonate.forEach((button) => {
  button.onclick = function () {
    modal.showModal();
  };
});

buttonFecha.onclick = function () {
  modal.close();
};

document.addEventListener('DOMContentLoaded', (event) => {
    const valorInput = document.getElementById('valor');

    function formatCurrency(value) {
        value = value.replace(/\D/g, '');
        value = (value / 100).toFixed(2) + '';
        value = value.replace(".", ",");
        value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        return value;
    }

    valorInput.addEventListener('input', function() {
        this.value = formatCurrency(this.value);
    });
    
    valorInput.value = formatCurrency(valorInput.value);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const paymentOptions = document.querySelectorAll('.payment-option');

    paymentOptions.forEach(option => {
        const radioInput = option.querySelector('input[type="radio"]');
        
        radioInput.addEventListener('change', () => {
            paymentOptions.forEach(opt => opt.classList.remove('selected'));
            if (radioInput.checked) {
                option.classList.add('selected');
            }
        });
    });
});