function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || parseInt (fano.value > ano)) {
        window.alert('[ERRO] VERIFICAR DADOS E TENTE NOVAMENTE')    
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10 ){
                //Criança
                img.setAttribute('src','menino_250.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src','homemjovem_250.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','homen_250.jpg')
            }else{
                //Idoso
                img.setAttribute('src','velhohomem_250.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10 ){
                //Criança
                img.setAttribute('src','menina_250.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src','mulherjovem_250.jpg')
            }else if (idade < 50){
                //Adulta
                img.setAttribute('src','mulher_250.jpg')
            }else{
                //Idosa
                img.setAttribute('src','velhamulher_250.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}