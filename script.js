let pontos = 0;
function responder(resposta) {
    if (resposta === "TI") {
        pontos++;
        document.getElementById("resultado").innerHTML = "Acertou!";
    } else {
        document.getElementById("resultado").innerHTML = "Errou!";
    }
    document.getElementById("pontos").innerHTML = pontos;
}