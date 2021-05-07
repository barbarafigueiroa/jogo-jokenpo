var pcVazio = document.getElementById("pc")//esta variável el foi declarada no escopo global pq serve para as duas funções
var resultado = document.getElementById("placar")
function jogar(){
    var pedra = document.getElementById("bPedra")
    var papel = document.getElementById("bPapel")
    var tesoura = document.getElementById("bTesoura")

        if(pedra.checked == false && papel.checked == false && tesoura.checked == false){
        alert("Não da pra adivinhar o que tu escolheu né? seleciona uma opção abençoade!!");
    
    }else{
        var sorteio = Math.floor(Math.random() *3);//comando para sorteio de numero aleatorio
        switch(sorteio){
            case 0:
                pcVazio.src="resources/monitorpedra.png"
                break
            case 1:
                pcVazio.src = "resources/monitorpapel.png"   
                break
            case 2:
                pcVazio.src = "resources/monitortesoura.png"  
                break   
        }
        //declarar ganho, perda ou empate
        if((pedra.checked == true && sorteio == 0) || (papel.checked == true && sorteio == 1) || (tesoura.checked == true && sorteio == 2)){
            resultado.innerHTML = "EMPATE FI DA FÉBE!!!"

        }else if((pedra.checked == true && sorteio == 2) || (papel.checked == true && sorteio == 0) || (tesoura.checked == true && sorteio == 1)){
            resultado.innerHTML = " ÉÉÉÉÉ TU GANHASSE DO COMPUTADOR, OIA QUE PESTE!"

        }else if((pedra.checked == true && sorteio == 1) || (papel.checked == true && sorteio == 2) || (tesoura.checked == true && sorteio == 0)){
            resultado.innerHTML = "TU PERDEU PRO COMPUTADOR MURRINHA!"
        }

    }
}
function resetar(){
    
    pcVazio.src = "resources/monitor.png";
    resultado. innerHTML = "";

}