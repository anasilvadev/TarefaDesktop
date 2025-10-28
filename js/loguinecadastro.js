var usuarioCadastro = ""
var senhaCadastro = ""

function cadastrar() {
    var usuarioCadastrado = document.getElementById("usuarioCadastro").value;
    var senhaCadastrada = document.getElementById("senhaCadastro").value;

    if (usuarioCadastrado === "" || senhaCadastrada === "") {
        alert("Preencha todos os campos!");
    }
    else {
        localStorage.setItem("usuario", usuarioCadastrado);
        localStorage.setItem("senha", senhaCadastrada);
        /*Professor, essa parte eu pesquisei mesmo! rsrsrsr */
        alert("Cadastro realizado com sucesso!");
    }
}

function entrar() {
    var usuarioLogin = document.getElementById("usuarioLogin").value;
    var senhaLogin = document.getElementById("senhaLogin").value;

    var usuarioCadastrado = localStorage.getItem("usuario");
    var senhaCadastrada = localStorage.getItem("senha");

    if (usuarioLogin === usuarioCadastrado && senhaLogin === senhaCadastrada) {
        alert("Login bem-sucedido!");
    } else {
        alert("Usuário ou senha incorretos!");
    }
}