document.addEventListener('DOMContentLoaded', function () {
    let campoTexto = document.getElementById('areaTexto');
    let btnCriptografar = document.getElementById('btnCriptografar');
    let btnDescriptografar = document.getElementById('btnDescriptografar');
    let textoDestino = document.getElementById('areaCopia');
    let btnCopiar = document.getElementById('botaoCopiar');
    let campoCopia = document.getElementById('areaCopia');
    let conteudoAreaCopia = document.querySelector('.conteudo__area-de-copia');
    let conteudoMensagens = document.querySelector('.conteudo__principal__mensagens');
    let logoAlura = document.querySelector('.logo-alura');

    // Recarregar a página ao clicar na logo
    logoAlura.addEventListener('click', function () {
        location.reload();
    });

    // Função que verifica se o campo de texto está vazio para não habilitar os botões sem necessidade
    function verificarTexto() {
        let textoNoCampo = campoTexto.value.trim();
        btnCriptografar.disabled = textoNoCampo === '';
        btnDescriptografar.disabled = textoNoCampo === '';
    }

    // Previne acentos e caracteres especiais no campo de texto
    campoTexto.addEventListener('input', function () {
        this.value = this.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        this.value = this.value.replace(/[^\w\s]/gi, "");


        verificarTexto();
    });

    btnCriptografar.addEventListener('click', function () {
        if (!this.disabled) {

            let textoCriptografado = campoTexto.value;

            // Criptografa o texto
            let textoModificado = textoCriptografado.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");

            textoDestino.textContent = textoModificado;
            textoDestino.classList.add('ativo');

            conteudoAreaCopia.style.display = 'block';
            conteudoMensagens.style.display = 'none';
        }
    });

    btnDescriptografar.addEventListener('click', function () {
        if (!this.disabled) {

            let textoDescriptografado = campoTexto.value;

            // Descriptografa o texto
            let textoModificado = textoDescriptografado.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");

            textoDestino.textContent = textoModificado;
            textoDestino.classList.add('ativo');

            conteudoAreaCopia.style.display = 'block';
            conteudoMensagens.style.display = 'none';
        }
    });

    // Botão de copiar o texto
    btnCopiar.addEventListener('click', function () {
        if (campoCopia.value.length > 0) {
            campoCopia.select();
            campoCopia.setSelectionRange(0, 99999);
            document.execCommand('copy');
        }
    });

    // Chama a função de verificação para configurar o estado dos botões
    verificarTexto();
});
