
function botao() {
    //alert("Obrigado por clicar!")
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"

}

function redirecionar() {
    window.open("http://google.com")
    window.location.href = "http://bing.com"

}

function trocar(elemento) {
    elemento.innerHTML = "O mouse está aqui"


}

function voltar(elemento) {
    elemento.innerHTML = "Texto Original"
    

}

function funcaoChange(elemento) {

    alert(elemento.value)

}