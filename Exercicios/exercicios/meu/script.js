
function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 22      
msg.innerHTML = `Agora são ${hora} horas`

if (hora > 0 && hora <= 12){
    msg.innerHTML = `Agora são ${hora} horas, Bom dia!`
    img.src = 'imagens/manha_250.jpg'
}else if (hora >= 13 && hora <= 18){
    msg.innerHTML = `Agora são ${hora} horas, Boa tarde!`
    img.src = 'imagens/tarde_250.jpg'
}else if(hora >= 19 && hora <=23){
    msg.innerHTML = `Agora são ${hora} horas, Boa noite!!`
    img.src = 'imagens/noite_250.jpg'
}
}