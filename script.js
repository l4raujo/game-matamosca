let altura = 0 
let largura = 0 

function ajustarTamanhoPalcoJogo(){
    altura = innerHeight
    largura = innerWidth
}
ajustarTamanhoPalcoJogo()

function posicaoRandomica(){
    let posicaoY = Math.floor(Math.random() * (altura - 100))
    let posicaoX = Math.floor(Math.random() * (largura - 100))

    //condição ? expressão1 : expressão2 

    posicaoX = posicaoX < 0 ? 0:posicaoX
    posicaoY = posicaoY < 0 ? 0: posicaoY
    
    //Criar o elemento mosquito

    let mosquito = document.createElement('img')
    mosquito.src = "imagens/mosca.png" 
    mosquito.className = tamanhoAleatório() + " " + ladoAleatorio() //"mosquito1", "mosquito2" ou "mosquito3"

    mosquito.style.left = posicaoX + "px"
    mosquito.style.top = posicaoY + "px"
    mosquito.style.position = "absolute"

    document.body.appendChild(mosquito)
}

posicaoRandomica() 

function tamanhoAleatório(){
    let classe = Math.floor(Math.random()*3)
    
    switch(classe){
        case 0: 
            return 'mosquito1'
            case 1:
                return 'mosquito2'
                case 2:
                    return 'mosquito3'
    }
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random()*2)

    switch(classe){
        case 0:
            return 'ladoA'
            case 1:
                return 'ladoB'
                case 2:
                    return 'ladoC'
    }
}