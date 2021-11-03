   
    var vez = 1;
    var vencedor = "";

    function casasIguais(a, b, c){
        var casaA = document.getElementById("casa"+a);
        var casaB = document.getElementById("casa"+b);
        var casaC = document.getElementById("casa"+c);
        var bgA = document.getElementById("casa"+a).style.backgroundImage;
        var bgB = document.getElementById("casa"+b).style.backgroundImage;
        var bgC = document.getElementById("casa"+c).style.backgroundImage;
        if( (bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")){
            if(bgA.indexOf("1.png") >= 0)
                vencedor = "1";
            else
                vencedor = "2";
            return true;
        }
        else{
            return false;
        }
    }

    function ValidaJogoTerminou(){
        if( casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
            casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
            casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
            ){
            document.getElementById("resultado").innerHTML = "<h1>O jogador " + vencedor + "venceu!</h1>";            
        }
    }


function ClicaCasa(controle){
    var bg = controle.style.backgroundImage;
    if(bg == "none" || bg == "")
    {          
        var fig = "url(" + vez.toString() + ".png)";
        controle.style.background = fig;
        vez = (vez == 1? 2:1); 
        ValidaJogoTerminou();
    }
}