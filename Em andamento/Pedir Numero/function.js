function exibirMensagem() {
    var nivelInput = document.getElementById('nivel');
    var nivel = nivelInput.value;

    // Verificar a nota de beleza
    if (nivel == 10) {
        document.getElementById('mensagemCorreta').style.display = 'block';
        document.getElementById('mensagemIncorreta').style.display = 'none';
        document.getElementById('mensagemTaquase').style.display='none';
        document.getElementById('mensagemMaisumpouco').style.display='none';
    }  
    else if(nivel == 8) {
        document.getElementById('mensagemCorreta').style.display = 'none';
        document.getElementById('mensagemIncorreta').style.display = 'none';
        document.getElementById('mensagemTaquase').style.display='block';
        document.getElementById('mensagemMaisumpouco').style.display='none';
    } else if(nivel > 2 && nivel < 8) {
        document.getElementById('mensagemCorreta').style.display = 'none';
        document.getElementById('mensagemIncorreta').style.display = 'none';
        document.getElementById('mensagemTaquase').style.display='none';
        document.getElementById('mensagemMaisumpouco').style.display='block';
    } else {
        document.getElementById('mensagemCorreta').style.display = 'none';
        document.getElementById('mensagemIncorreta').style.display = 'block';
        document.getElementById('mensagemTaquase').style.display='none';
        document.getElementById('mensagemMaisumpouco').style.display='none';
    }
}

function gerarArquivo() {
    var nome = document.getElementById("nome").value;
    var numero = document.getElementById("numero").value;
    var insta = document.getElementById("insta").value;
    var nivel = document.getElementById("nivel").value;
    
    if (nivel == 10){
        
    // Criar o conteúdo do arquivo
    var conteudoTexto = "Nome: " + nome + "\nNumero: " + numero + "\nInstagram: " + insta + "\nNivel: " + nivel;

    // Criar um blob com o conteúdo de texto
    var blob = new Blob([conteudoTexto], { type: 'text/plain' });

    // Criar um link de download
    var linkDownload = document.createElement('a');
    linkDownload.href = window.URL.createObjectURL(blob);
    linkDownload.download = 'respostas.txt';

    // Adicionar o link ao corpo e clicar nele para iniciar o download
    document.body.appendChild(linkDownload);
    linkDownload.click();

    // Remover o link após o download
    document.body.removeChild(linkDownload);

    // Exibir a mensagem de agradecimento
    var mensagemAgradecimento = document.getElementById('mensagemAgradecimento');
    mensagemAgradecimento.style.display = 'block';

    return false

    } 
    
}

function validar() {
    let nome = document.getElementById('nome').value
    let numero = document.getElementById('numero').value
    let insta = document.getElementById('insta').value
    
    if (nome == '' || numero == '' || insta == ''){
        document.getElementById('mensagemIncorreta').style.display = 'block'
    } else {
        window.location.href = 'pagina2.html'
    }


}