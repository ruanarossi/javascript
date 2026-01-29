function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`  //MOSTRAR MENSAGEM
    if (hora >= 0 && hora < 12) {
         //BOM DIA!
         img.src = 'imagens/manha.jpg'  // SELECIONAR AS IMAGENS
         document.body.style.background = '#E6D09D'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#6f94ad' //mudar as cores de acordo com a hora!!
    } else {
        //Boa noite!
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#00252E'
    }
       
}