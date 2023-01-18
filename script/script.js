function retira_acentos(str) 
{

    com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";

    sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    novastr="";
    for(i=0; i<str.length; i++) {
        troca=false;
        for (a=0; a<com_acento.length; a++) {
            if (str.substr(i,1)==com_acento.substr(a,1)) {
                novastr+=sem_acento.substr(a,1);
                troca=true;
                break;
            }
        }
        if (troca==false) {
            novastr+=str.substr(i,1);
        }
    }
    return novastr;
} 

function formatarMensagem(msg){
    var mensagem

        mensagem = retira_acentos(msg.toLowerCase());

        return mensagem
    
}

function criptografia(msgForm){
    var crip = msgForm;
    crip = msgForm
    .replaceAll('i','imes')
    .replaceAll('a','ai')
    .replaceAll('u','ufat')
    .replaceAll('e','enter')
    .replaceAll('o','ober')
    

    return crip
}

function descriptografia(msgForm){
    var descrip = msgForm;
    descrip = msgForm
    .replaceAll('ai', 'a')
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

    return descrip
}

function mensagemCriptografada(msg){
    return`
        <div style="display=none !important;" ></div>
        <div class="container-com-mensagem">
            <textarea id="msgRet"class="font-m container-com-mensagem-conteudo" readonly>${msg}</textarea>
            <button type="button" class="btn-copiar" onclick="copiar(mensagemCapiturada)">COPIAR</button>
        </div>
    `
}


function criptografar(){
    var mensagemBruta = document.getElementById("mensagem").value
    var mensagemFormatada , criptografado

    mensagemFormatada = formatarMensagem(mensagemBruta);
    criptografado = criptografia(mensagemFormatada);
    
    mensagemCapiturada = criptografado;

    document.querySelector('#cripto').innerHTML = mensagemCriptografada(criptografado);

    }

    function descriptografar(){
        var mensagemBruta = document.getElementById("mensagem").value
        var mensagemFormatada , descriptografado
    
        mensagemFormatada = formatarMensagem(mensagemBruta);
        descriptografado = descriptografia(mensagemFormatada);

        mensagemCapiturada = descriptografado;
        
        document.querySelector('#cripto').innerHTML = mensagemCriptografada(descriptografado);
    }

    var mensagemCapiturada = '';

    function copiar(msgCap){
        var msgCop = msgCap;
        
        navigator.clipboard.writeText(msgCop);
        alert("Mensagem copiada com sucesso")
    }







 