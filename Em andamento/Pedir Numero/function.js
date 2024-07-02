function exibirMensagem1() {
    var nivelInput = document.getElementById('nivel1');
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

function exibirMensagem2() {
    var nivelInput = document.getElementById('nivel2');
    var nivel = nivelInput.value;

    // Verificar a nota de beleza
    if (nivel == 10) {
        document.getElementById('mensagemCorreta2').style.display = 'block';
        document.getElementById('mensagemIncorreta2').style.display = 'none';
        document.getElementById('mensagemTaquase2').style.display='none';
        document.getElementById('mensagemMaisumpouco2').style.display='none';
    }  
    else if(nivel == 8) {
        document.getElementById('mensagemCorreta2').style.display = 'none';
        document.getElementById('mensagemIncorreta2').style.display = 'none';
        document.getElementById('mensagemTaquase2').style.display='block';
        document.getElementById('mensagemMaisumpouco2').style.display='none';
    } else if(nivel > 2 && nivel < 8) {
        document.getElementById('mensagemCorreta2').style.display = 'none';
        document.getElementById('mensagemIncorreta2').style.display = 'none';
        document.getElementById('mensagemTaquase2').style.display='none';
        document.getElementById('mensagemMaisumpouco2').style.display='block';
    } else {
        document.getElementById('mensagemCorreta2').style.display = 'none';
        document.getElementById('mensagemIncorreta2').style.display = 'block';
        document.getElementById('mensagemTaquase2').style.display='none';
        document.getElementById('mensagemMaisumpouco2').style.display='none';
    }
}



function gerarArquivo() {
    var nome = document.getElementById("nome").value;
    var numero = document.getElementById("numero").value;
    var insta = document.getElementById("insta").value;
    var nivel1 = document.getElementById("nivel1").value;
    var nivel2 = document.getElementById("nivel2").value;
    
    // Verifica se todos os campos estão preenchidos
    if (nome !== '' && numero !== '' && insta !== '' && nivel1 !== '' && nivel2 !== '') {
        if (nivel2 == 10 || nivel1 == 10) {
            // Criar o conteúdo do arquivo
            var conteudoTexto = "Nome: " + nome + "\nNumero: " + numero + "\nInstagram: " + insta + "\nNota de beleza: " + nivel1 + "\nNota da chance: " + nivel2;

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

            return false;
        } else {
            document.getElementById('mensagemIncorreta2').style.display = 'block';
        }
    } else {
        document.getElementById('mensagemIncorreta').style.display = 'block';
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

function validar2() {
    let nivel = document.getElementById('nivel1').value
    
    if (nivel != 10){
        document.getElementById('mensagemIncorreta').style.display = 'block'
    } else {
        window.location.href = 'pagina3.html'
    }

}
