const buttonsDonate = document.querySelectorAll(".button-donate");
const buttonsApply = document.querySelectorAll(".button-apply-adopt");
const modalDonate = document.getElementById("dialog-donate");
const modalAdopt = document.getElementById("dialog-adopt");
const buttonCloseDonate = document.getElementById("button-cancel");
const buttonCloseAdopt = document.getElementById("button-cancel-modal-adopt");

buttonsDonate.forEach((button) => {
  button.onclick = function () {
    modalDonate.showModal();
  };
});

buttonCloseDonate.onclick = function () {
  modalDonate.close();
};

buttonsApply.forEach((button) => {
  button.onclick = function () {
    modalAdopt.showModal();
  };
});

buttonCloseAdopt.onclick = function () {
  modalAdopt.close();
};

document.addEventListener("DOMContentLoaded", (event) => {
  const valorInput = document.getElementById("valor");

  function formatCurrency(value) {
    value = value.replace(/\D/g, "");
    value = (value / 100).toFixed(2) + "";
    value = value.replace(".", ",");
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    return value;
  }
  valorInput.addEventListener("input", function () {
    this.value = formatCurrency(this.value);
  });
  valorInput.value = formatCurrency(valorInput.value);
});

 document.addEventListener("DOMContentLoaded", (event) => {
   const paymentOptions = document.querySelectorAll(".payment-option");
   paymentOptions.forEach((option) => {
     const radioInput = option.querySelector('input[type="radio"]');
     radioInput.addEventListener("change", () => {
       paymentOptions.forEach((opt) => opt.classList.remove("selected"));
       if (radioInput.checked) {
         option.classList.add("selected");
       }
     });
   });
 });
