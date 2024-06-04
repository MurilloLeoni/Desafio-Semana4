//Abrir e fechar modal
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

function verificaEmail(email) {
  const aux = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return aux.test(email);
}

// Validação modal donate
const emailErrorDonate = document.getElementById("email-error-donate");
const valorError = document.getElementById("donate-error");
const submitDonate = document.getElementById("button-heart");
const paymentOption = document.getElementsByName("payment-method");
const paymentError = document.getElementById("payment-error");

submitDonate.addEventListener("click", function () {
  const email = document.getElementById("email-donate").value;
  if (verificaEmail(email)) {
    emailErrorDonate.innerHTML = "";
  } else {
    emailErrorDonate.innerHTML = "*Selecione um email válido";
    return;
  }

  const valorInput = document.getElementById("valor").value;
  if (valorInput === "" || isNaN(valorInput)) {
    valorError.innerHTML = "*Selecione um número válido (Ex: 7.9)";
    return false;
  } else {
    valorError.innerHTML = "";
  }

  let pagamentoSelecionado = false;
  for (let i = 0; i < paymentOption.length; i++) {
    if (paymentOption[i].checked) {
      pagamentoSelecionado = true;
      break;
    }
  }

  if (!pagamentoSelecionado) {
    paymentError.innerHTML = "*Selecione um método de pagamento";
    return;
  }
  paymentError.innerHTML = "";

  window.location.href = "success-page.html";
});


// Validação modal adopt
function validaNome(name) {
  const aux = /^[a-zA-ZÀ-ÿ']{2,}(?: [a-zA-ZÀ-ÿ']{2,})+$/;
  return aux.test(name);
}

const submitAdopt = document.getElementById("button-adopt-modal");
const emailErrorAdopt = document.getElementById("email-error-adopt");
const nameError = document.getElementById("name-error");
const termoError = document.getElementById("term-error");

submitAdopt.addEventListener("click", function () {
  const email = document.getElementById("email-adopt").value;
  if (verificaEmail(email)) {
    emailErrorAdopt.innerHTML = "";
  } else {
    emailErrorAdopt.innerHTML = "*Selecione um email válido";
    return;
  }

  const nome = document.getElementById("fullname-adopt").value;
  if (nome === "") {
    nameError.innerHTML = "*Por favor, insira seu nome completo";
    return;
  } else if (!validaNome(nome)) {
    nameError.innerHTML = "*Por favor, insira um nome completo válido";
    return;
  } else {
    nameError.innerHTML = "";
  }

  const termoAceito = document.getElementById("termo").checked;
  if (!termoAceito) {
    termoError.innerHTML = "*Por favor, aceite os termos";
    return;
  } else {
    termoError.innerHTML = "";
  }

  window.location.href = "success-page.html";
});