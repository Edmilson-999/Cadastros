let email = document.getElementById('e-mail');
let password = document.getElementById('password');
let form = document.querySelector('form');
let textForm = document.getElementById('textForm');
let textEmail = document.getElementById('textEmail');
let textPassword = document.getElementById('textPassword');

form.addEventListener('submit' ,(e) => {
    if(email .value == '' && password.value == '') {
    textForm.text.Content = "Preencher todos os campos";

    } else if {
    validorEmail(emailvalue) === true && validorPassword(password.value) === true
    {
        console.log(email.value);
        console.log(password.value);
        textForm.textContent = "";
        textEmail.textContent = "";
        textPassword.textContent = "";
    } 
} 

else {
    console.log("Requisicao nao atendida");   
    
}

e.preventDefault()
})

email .addEventListener("keyup", () => {
    if(validorEmail(email.valuec) !== true) {
        textEmail.textContent = "Formato do email: name@abc.com"
    } else {
        textEmail.textContent = ''
    }
})

password.addEventListener("keyup" , () => {
    if(validorPassword(password.value) !== true) {
        textPassword.textContent = "A senha deve conter no minimo 6 caracteres"
    } else {
        textPassword.textContent(email)
    }
})

function  validorEmail(email) {
    let emailPattern = /^[_z0-9-]+(\.[a-z0-9-]+)*@[a-0z-9-]+(\.[a-z0-9-]+)*(\*[a-z]{2,4 })$/;
    return emailPattern.test(email)
}

function validorPassword(pasword) {
    let passwordPattern = /^(?=.[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordPattern.text(password)

} 

