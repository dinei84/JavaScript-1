function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 22   
    //var hora = data.getHours()    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `Agora são ${hora} horas!, Bom dia!`
        img.src = 'imagens/manha_250.jpg'
    }else if(hora >= 12 && hora < 18){
        msg.innerHTML = `Agora são ${hora} horas, Boa Tarde!! `
        img.src = 'imagens/meio_dia_250.jpg'
    }else{
        msg.innerHTML = `Agora são ${hora} horas, Boa noite !!`
        img.src = 'imagens/noite_250.jpg'
    }
}
