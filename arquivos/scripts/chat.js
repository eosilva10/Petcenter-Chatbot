// Colapsar
var janela = document.getElementsByClassName("colapsar");

for (let i = 0; i < janela.length; i++) {
    janela[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var conteudo = this.nextElementSibling;

        if (conteudo.style.maxHeight) {
            conteudo.style.maxHeight = null;
        } else {
            conteudo.style.maxHeight = conteudo.scrollHeight + "px";
        }

    });
}

function getHorario() {
    let hoje = new Date();
    horas = hoje.getHours();
    minutos = hoje.getMinutes();

    if (horas < 10) {
        horas = "0" + horas;
    }

    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    let horario = horas + ":" + minutos;
    return horario;
}

// MENSAGEM INICIAL DO CHATBOT
function msgInicial() {
    let primeiraMsg = "Olá, bem-vindo ao ChatBot da PetCenter<br><br> Digite uma das seguintes opções para saber mais sobre nossos serviços: <br><br>Funcionamento<br> Localização<br> Contato<br> Tosa<br> Vacina<br> Castração<br>";
    document.getElementById("iniciarMensagens").innerHTML = '<p class="textoBot"><span>' + primeiraMsg + '</span></p>';

    let horario = getHorario();

    $("#horario-chat").append(horario);
    document.getElementById("inputUsuario").scrollIntoView(false);
}

msgInicial();

// PROCESSAMENTO DA CONVERSA
function pegaPergunta(inputTexto) {
    let botResposta = interaçoes(inputTexto);
    let botHtml = '<p class="textoBot"><span>' + botResposta + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("resposta-barra-chat").scrollIntoView(true);
}


function pegaResposta() {
    let textoUsuario = $("#inputTexto").val();

    if (textoUsuario == "") {
        textoUsuario = "Opa! Apertei sem querer :/";
    }

    let htmlUsuario = '<p class="textoUsuario"><span>' + textoUsuario + '</span></p>';

    $("#inputTexto").val("");
    $("#chatbox").append(htmlUsuario);
    document.getElementById("resposta-barra-chat").scrollIntoView(true);

    setTimeout(() => {
        pegaPergunta(textoUsuario);
    }, 1000)

}

// ENVIANDO TEXTO PELOS BOTÕES
function botaoEnviarTexto(textoSimples) {
    let htmlUsuario = '<p class="textoUsuario"><span>' + textoSimples + '</span></p>';

    $("#inputTexto").val("");
    $("#chatbox").append(htmlUsuario);
    document.getElementById("resposta-barra-chat").scrollIntoView(true);

     setTimeout(() => {
         pegaPergunta(textoSimples);
     }, 1000)
}

function botaoEnviar() {
    pegaResposta();
}

function botaoFavorito() {
    botaoEnviarTexto("Adorei o site!")
}

// APERTAR ENTER PARA ENVIAR MENSAGEM
$("#inputTexto").keypress(function (e) {
    if (e.which == 13) {
        pegaResposta();
    }
});