 
document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('textoPrincipal');
    if (textarea) {
        let isPlaceholderVisible = true;
        let isEditing = false;

        // Função para alternar a aparência
        const updateAppearance = () => {
            if (textarea.value.trim() === '' && !isEditing) { // Verifica se o textarea está vazio e não está sendo editado
                if (isPlaceholderVisible) {
                    textarea.setAttribute('placeholder', '');
                    textarea.style.backgroundImage = 'none';
                } else {
                    textarea.setAttribute('placeholder', 'Digite aqui o texto.');
                    textarea.style.backgroundImage = "url('/Assets/criptografia_descriptografia.png')";
                }
                isPlaceholderVisible = !isPlaceholderVisible;
            }
        };

        // Configura o intervalo de piscamento
        const intervalId = setInterval(updateAppearance, 1000);

        // Atualiza o estado quando o usuário está digitando
        textarea.addEventListener('input', () => {
            isEditing = true;
            textarea.setAttribute('placeholder', '');
            textarea.style.backgroundImage = 'none';
        });

        // Atualiza o estado quando o textarea perde o foco
        textarea.addEventListener('blur', () => {
            isEditing = false;
            if (textarea.value.trim() === '') {
                isPlaceholderVisible = true; // Permite que o piscar ocorra novamente
            }
        });

        // Atualiza o estado quando o textarea ganha o foco
        textarea.addEventListener('focus', () => {
            isEditing = true;
            textarea.setAttribute('placeholder', '');
            textarea.style.backgroundImage = 'none';
        });
    } else {
       
    }
    
});

    function tamanhoTela() {
        const largura = window.screen.width;
        const altura = window.screen.height;
    
        // Atualiza as variáveis CSS
        document.documentElement.style.setProperty('--tela-largura', largura + 'px');
        document.documentElement.style.setProperty('--tela-altura', altura + 'px');
    
        // Retorna os valores para uso adicional em JavaScript, se necessário
        return { width: largura, height: altura };
    }
    
    // Chama a função para definir os valores CSS
    tamanhoTela();
    
    console.log(`Largura: ${window.getComputedStyle(document.documentElement).getPropertyValue('--tela-largura')}, Altura: ${window.getComputedStyle(document.documentElement).getPropertyValue('--tela-altura')}`);

    function criptografar() {
        var textarea = document.getElementById('textoPrincipal');
        if (textarea.value.trim() === '') {
            alert('Por favor, digite primeiramente um texto na área de texto');
            return;
        }
   
        
            if (jaCriptografado(textarea.value)) {
                alert('Texto já criptografado.');
                return;
             }
        
            const mensagemPrincipal =document.querySelector('#textoPrincipal');
            const mensagemSecundario = document.querySelector('#textoCripto');
            const textooEncriptado = encriptar(mensagemPrincipal.value.toLowerCase());
            mensagemSecundario.value =  textooEncriptado;
            mensagemPrincipal.value = '';
            mensagemSecundario.style.backgroundImage = 'none';
        
    }
    function jaCriptografado(texto) {
       let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        return matrizCodigo.some(function(item) {
        return texto.includes(item[1]);
      });
}

   
    function encriptar(stringEncriptada) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        for( let i = 0; 
            i < matrizCodigo.length;
            i++) {
                let stringEncriptadaSemAcentos = removerAcentos(stringEncriptada);
                if (stringEncriptadaSemAcentos.includes(matrizCodigo[i][0])) {
                stringEncriptada = stringEncriptadaSemAcentos.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
        
        return stringEncriptada;
    }
    
    function desencriptar(stringDesencriptada) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        for( let i = 0; 
            i < matrizCodigo.length;
            i++) {
            let stringDesencriptadaSemAcentos = removerAcentos(stringDesencriptada);    
            if (stringDesencriptadaSemAcentos.includes(matrizCodigo[i][1])) {
                stringDesencriptada = stringDesencriptadaSemAcentos.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }
        return stringDesencriptada;
    }


    function descriptografar() {
        var textarea = document.getElementById('textoPrincipal');
        if (textarea.value.trim() === '') {
            alert('Por favor, digite primeiramente um texto na área de texto');
        } else {
            const msgDescriptoPrincipal =document.querySelector('#textoPrincipal');
            const msgdescriptografada= document.querySelector('#textoCripto');
            const textodesencripitado =desencriptar(msgDescriptoPrincipal.value);
            msgdescriptografada.value =  textodesencripitado;
            msgdescriptografada.style.backgroundImage = 'none';
            msgDescriptoPrincipal.value = '';
        }
    }
    function transferir() {
        var textarea = document.getElementById('textoCripto');
        if (textarea.value.trim() === '') {
            alert('Atenção !!! Nenhum texto para ser transferido');
            textarea.style.backgroundImage= "url('/Assets/Garoto Com Lupa.png')";
        } else {
          
            const textoTransferenciaPrincipal =document.querySelector('#textoPrincipal');
            const textoTransferenciasecundario= document.querySelector('#textoCripto');
            textoTransferenciaPrincipal.value =  textoTransferenciasecundario.value;
            textoTransferenciasecundario.value = '';
            textoTransferenciasecundario.style.backgroundImage= "url('/Assets/Garoto Com Lupa.png')";
        }
    }
    
    function removerAcentos(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }