const form = document.querySelector('#form');
const nameInput = document.querySelector('#userName');
const emailInput = document.querySelector('#userEmail');
const passwordInput = document.querySelector('#userPassword');
const passwordCheckInput = document.querySelector('#userCheckPassword');

console.log(form, nameInput, emailInput, passwordInput, passwordCheckInput);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    //Verifica se o nome está vazio

    if (nameInput.value === "") {
        alert('Por favor, preencha seu nome')
        return;
    }

    // Verifica se o email está preenchido e se é válido 

    else if (emailInput.value === "" || !validEmail(emailInput.value)) {
        alert('Por favor, preencha seu email')
        return;
    }
    // Verifica se a senha está preenchida e tem no minino 8 caracteres

    else if (passwordInput === "" || !validPassword(passwordInput.value, 8)) {
        alert('Por favor, preencha sua senha')
        return;
    }
    else if (passwordInput != passwordCheckInput) {
        alert("Por favor, verifique corretamente suas senhas !")
        return;
    }
    // Se todos os campos estiverem corretamente preenchidos,envie o form

    form.submit();
});

// Função para validar email

function validEmail(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);

    if (emailRegex.test(email)) {
        return true;
    }
    else {
        return false;
    }
}

// Funcção para Validar Senha

function validPassword(password, minDigits) {

    if (password.length >= minDigits) {
        return true;
    }
    else {
        return false;
    }

}
