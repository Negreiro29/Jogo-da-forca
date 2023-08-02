let palavras = ["CASA", "FAMILIA", "JABUTICABA", "COMPUTADOR", "MUSICA"];
let dicas = ["lugar de morar", "conjunto de parentes de uma pessoa", "pequena fruta", 
            "Dispositivo eletrônico", "Som harmonioso"];
let cont = 0;

//Indentificação do jogador
function identificador(){
    let nomeJogador = document.getElementById("nome").value;
    document.getElementById("nomeJogador").innerHTML = nomeJogador.toUpperCase();
    //console.log(nomeJogador);
}

document.getElementById("nome").onkeydown = function(e){
    if(e.keyCode == 13){
        identificador();
        e.preventDefault();
    }
}

document.getElementById("submitNome").onclick = function(e){
    identificador();
    e.preventDefault();
}

//mostrar elementos do jogo
function iniciar(){
    let nomeJogador = document.getElementById("nome").value;
    if(nomeJogador == ""){
        alert("Adicione o nome do jogador antes de começar o jogo!");
    } else{
        document.querySelector(".display").style.display = "block";
        let palavraRandom = getRandom();
        let palavraCerta = palavras[palavraRandom];
        let dicaCerta = dicas[palavraRandom];
        //console.log(dicaCerta);
        document.getElementById("dicaPlavra").innerHTML = dicaCerta.toUpperCase();
        console.log(palavraCerta);
        result = palavraCerta.split("");
        mostratInputs(result);

        function jogar(){
            let letraTentada = document.getElementById("letraJogada").value.toUpperCase();
            if(letraTentada != ""){
                console.log(letraTentada);
                let letrasJogadas = [] = letraTentada.toUpperCase(); 
                document.getElementById("letasTentadas").innerHTML += letrasJogadas;
            } else alert("Digite uma letra!");
             
            //PALAVRA CASA
            if(palavraCerta == palavras[0]){
                if(document.getElementById("letra-1").value != "" && document.getElementById("letra-2").value != "" && 
                document.getElementById("letra-3").value != "" && document.getElementById("letra-4").value != ""){
                    ganhou();
                } else{
                    if(letraTentada == result[0]){
                        console.log(result[0]);
                        document.getElementById("letra-1").value = letraTentada;//c
                    } else {
                        if(letraTentada == result[1]){
                            document.getElementById("letra-2").value = letraTentada;//a
                            document.getElementById("letra-4").value = letraTentada;//a
                        } else {
                            if(letraTentada == result[2]){
                                document.getElementById("letra-3").value = letraTentada;//s
                            } else {
                                cont = cont + 1;
                                document.querySelector("#head").style.stroke = "#fff";
                                if(cont >1){
                                    document.querySelector("#body").style.stroke = "#fff";
                                }
                                if(cont >2){
                                    document.querySelector("#amry1").style.stroke = "#fff";
                                }
                                if(cont >3){
                                    document.querySelector("#army2").style.stroke = "#fff";
                                }  
                                if(cont >4){
                                    document.querySelector("#leg1").style.stroke = "#fff";
                                }
                                if(cont == 6){
                                    document.querySelector("#leg2").style.stroke = "#fff";
                                    perdeu();
                                }
                            }
                        }
                    }
                }
            }

            //PALAVRA FAMILIA
            if(palavraCerta == palavras[1]){
                if(document.getElementById("letra-1").value != "" && document.getElementById("letra-2").value != "" && 
                document.getElementById("letra-3").value != "" && document.getElementById("letra-4").value != "" &&
                document.getElementById("letra-5").value != "" && document.getElementById("letra-6").value != "" &&
                document.getElementById("letra-7").value != ""){
                    ganhou();
                } else{
                    if(letraTentada == result[0]){
                        console.log(result[0]);
                        document.getElementById("letra-1").value = letraTentada;//f
                    } else {
                        if(letraTentada == result[1]){
                            document.getElementById("letra-2").value = letraTentada;//a
                            document.getElementById("letra-7").value = letraTentada;//a
                        } else {
                            if(letraTentada == result[2]){
                                document.getElementById("letra-3").value = letraTentada;//m
                            } else {
                                if(letraTentada == result[3]){
                                    document.getElementById("letra-4").value = letraTentada;//i
                                    document.getElementById("letra-6").value = letraTentada;//i
                                } else {
                                    if(letraTentada == result[4]){
                                        document.getElementById("letra-5").value = letraTentada;//l
                                    } else {
                                        cont = cont + 1;
                                        document.querySelector("#head").style.stroke = "#fff";
                                        if(cont >1){
                                            document.querySelector("#body").style.stroke = "#fff";
                                        }
                                        if(cont >2){
                                            document.querySelector("#amry1").style.stroke = "#fff";
                                        }
                                        if(cont >3){
                                            document.querySelector("#army2").style.stroke = "#fff";
                                        }  
                                        if(cont >4){
                                            document.querySelector("#leg1").style.stroke = "#fff";
                                        }
                                        if(cont == 6){
                                            document.querySelector("#leg2").style.stroke = "#fff";
                                            perdeu();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            //PALAVRA JABUTICABA
            if(palavraCerta == palavras[2]){
                if(document.getElementById("letra-1").value != "" && document.getElementById("letra-2").value != "" && 
                document.getElementById("letra-3").value != "" && document.getElementById("letra-4").value != "" &&
                document.getElementById("letra-5").value != "" && document.getElementById("letra-6").value != "" &&
                document.getElementById("letra-7").value != "" && document.getElementById("letra-8").value != "" &&
                document.getElementById("letra-9").value != "" && document.getElementById("letra-10").value != ""){
                    ganhou();
                } else{
                    if(letraTentada == result[0]){
                        console.log(result[0]);
                        document.getElementById("letra-1").value = letraTentada; //j
                    } else {
                        if(letraTentada == result[1]){
                            document.getElementById("letra-2").value = letraTentada;//a
                            document.getElementById("letra-8").value = letraTentada;//a
                            document.getElementById("letra-10").value = letraTentada;//a
                        } else {
                            if(letraTentada == result[2]){
                                document.getElementById("letra-3").value = letraTentada;//b
                                document.getElementById("letra-9").value = letraTentada;//b
                            } else {
                                if(letraTentada == result[3]){
                                    document.getElementById("letra-4").value = letraTentada;//u
                                } else {
                                    if(letraTentada == result[4]){
                                        document.getElementById("letra-5").value = letraTentada;//t
                                    } else {
                                        if(letraTentada == result[5]){
                                            document.getElementById("letra-6").value = letraTentada;//i
                                        } else {
                                            if(letraTentada == result[6]){
                                                document.getElementById("letra-7").value = letraTentada;//c
                                            } else{
                                                cont = cont + 1;
                                                document.querySelector("#head").style.stroke = "#fff";
                                                if(cont >1){
                                                    document.querySelector("#body").style.stroke = "#fff";
                                                }
                                                if(cont >2){
                                                    document.querySelector("#amry1").style.stroke = "#fff";
                                                }
                                                if(cont >3){
                                                    document.querySelector("#army2").style.stroke = "#fff";
                                                }  
                                                if(cont >4){
                                                    document.querySelector("#leg1").style.stroke = "#fff";
                                                }
                                                if(cont == 6){
                                                    document.querySelector("#leg2").style.stroke = "#fff";
                                                    perdeu();
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            //PALAVRA COMPUTADOR
            if(palavraCerta == palavras[3]){
                if(document.getElementById("letra-1").value != "" && document.getElementById("letra-2").value != "" && 
                document.getElementById("letra-3").value != "" && document.getElementById("letra-4").value != "" &&
                document.getElementById("letra-5").value != "" && document.getElementById("letra-6").value != "" &&
                document.getElementById("letra-7").value != "" && document.getElementById("letra-8").value != "" &&
                document.getElementById("letra-9").value != "" && document.getElementById("letra-10").value != ""){
                    ganhou();
                } else{
                    if(letraTentada == result[0]){
                        console.log(result[0]);
                        document.getElementById("letra-1").value = letraTentada; //C
                    } else {
                        if(letraTentada == result[1]){
                            document.getElementById("letra-2").value = letraTentada;//O
                            document.getElementById("letra-9").value = letraTentada;//O
                        } else {
                            if(letraTentada == result[2]){
                                document.getElementById("letra-3").value = letraTentada;//M
                            } else {
                                if(letraTentada == result[3]){
                                    document.getElementById("letra-4").value = letraTentada;//P
                                } else {
                                    if(letraTentada == result[4]){
                                        document.getElementById("letra-5").value = letraTentada;//U
                                    } else {
                                        if(letraTentada == result[5]){
                                            document.getElementById("letra-6").value = letraTentada;//T
                                        } else {
                                            if(letraTentada == result[6]){
                                                document.getElementById("letra-7").value = letraTentada;//A
                                            } else{
                                                if(letraTentada == result[7]){
                                                    document.getElementById("letra-8").value = letraTentada;//D
                                                } else {
                                                    if(letraTentada == result[9]){
                                                        document.getElementById("letra-10").value = letraTentada;//R
                                                    } else {
                                                        cont = cont + 1;
                                                        document.querySelector("#head").style.stroke = "#fff";
                                                        if(cont >1){
                                                            document.querySelector("#body").style.stroke = "#fff";
                                                        }
                                                        if(cont >2){
                                                            document.querySelector("#amry1").style.stroke = "#fff";
                                                        }
                                                        if(cont >3){
                                                            document.querySelector("#army2").style.stroke = "#fff";
                                                        }  
                                                        if(cont >4){
                                                            document.querySelector("#leg1").style.stroke = "#fff";
                                                        }
                                                        if(cont == 6){
                                                            document.querySelector("#leg2").style.stroke = "#fff";
                                                            perdeu();
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            //PALAVRA MUSICA
            if(palavraCerta == palavras[4]){
                if(document.getElementById("letra-1").value != "" && document.getElementById("letra-2").value != "" && 
                document.getElementById("letra-3").value != "" && document.getElementById("letra-4").value != "" &&
                document.getElementById("letra-5").value != "" && document.getElementById("letra-6").value != ""){
                    ganhou();
                } else{
                    if(letraTentada == result[0]){
                        console.log(result[0]);
                        document.getElementById("letra-1").value = letraTentada;//M
                    } else {
                        if(letraTentada == result[1]){
                            document.getElementById("letra-2").value = letraTentada;//U
                        } else {
                            if(letraTentada == result[2]){
                                document.getElementById("letra-3").value = letraTentada;//S
                            } else {
                                if(letraTentada == result[3]){
                                    document.getElementById("letra-4").value = letraTentada;//I
                                } else {
                                    if(letraTentada == result[4]){
                                        document.getElementById("letra-5").value = letraTentada;//C
                                    } else {
                                        if(letraTentada == result[5]){
                                            document.getElementById("letra-6").value = letraTentada//A
                                        } else {
                                            cont = cont + 1;
                                            document.querySelector("#head").style.stroke = "#fff";
                                            if(cont >1){
                                                document.querySelector("#body").style.stroke = "#fff";
                                            }
                                            if(cont >2){
                                                document.querySelector("#amry1").style.stroke = "#fff";
                                            }
                                            if(cont >3){
                                                document.querySelector("#army2").style.stroke = "#fff";
                                            }  
                                            if(cont >4){
                                                document.querySelector("#leg1").style.stroke = "#fff";
                                            }
                                            if(cont == 6){
                                                document.querySelector("#leg2").style.stroke = "#fff";
                                                perdeu();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            document.getElementById("letraJogada").value = "";
        }
        limpar();
        
        document.getElementById("letraJogada").onkeydown = function(e){
            if(e.keyCode == 13){
                jogar();
                e.preventDefault();
            }
        }
        
        document.getElementById("submitLetra").onclick = function(e){
            jogar();
            e.preventDefault();
        }
    }
}

//gerar palavra aleatoriamente
function getRandom(){
    let rend = Math.floor(Math.random()*10);
    while(rend > 4){
        rend = Math.floor(Math.random()*10);
    }
    return rend;
}

//mostrar os imputs das palavas
function mostratInputs(charResult){
    console.log(charResult.length);
    for(let i=1; i<=charResult.length; i++){
        if(charResult.length == 4){
            document.querySelector("#letra-1").style.display = "block";
            document.querySelector("#letra-2").style.display = "block";
            document.querySelector("#letra-3").style.display = "block";
            document.querySelector("#letra-4").style.display = "block";
            document.querySelector("#letra-5").style.display = "none";
            document.querySelector("#letra-6").style.display = "none";
            document.querySelector("#letra-7").style.display = "none";
            document.querySelector("#letra-8").style.display = "none";
            document.querySelector("#letra-9").style.display = "none";
            document.querySelector("#letra-10").style.display = "none";
        }
        
        if(charResult.length == 6){
            document.querySelector("#letra-1").style.display = "block";
            document.querySelector("#letra-2").style.display = "block";
            document.querySelector("#letra-3").style.display = "block";
            document.querySelector("#letra-4").style.display = "block";
            document.querySelector("#letra-5").style.display = "block";
            document.querySelector("#letra-6").style.display = "block";
            document.querySelector("#letra-7").style.display = "none";
            document.querySelector("#letra-8").style.display = "none";
            document.querySelector("#letra-9").style.display = "none";
            document.querySelector("#letra-10").style.display = "none";
        }
        
        if(charResult.length == 7){
            document.querySelector("#letra-1").style.display = "block";
            document.querySelector("#letra-2").style.display = "block";
            document.querySelector("#letra-3").style.display = "block";
            document.querySelector("#letra-4").style.display = "block";
            document.querySelector("#letra-5").style.display = "block";
            document.querySelector("#letra-6").style.display = "block";
            document.querySelector("#letra-7").style.display = "block";
            document.querySelector("#letra-8").style.display = "none";
            document.querySelector("#letra-9").style.display = "none";
            document.querySelector("#letra-10").style.display = "none";
        }
        
        if(charResult.length == 10){
            document.querySelector("#letra-1").style.display = "block";
            document.querySelector("#letra-2").style.display = "block";
            document.querySelector("#letra-3").style.display = "block";
            document.querySelector("#letra-4").style.display = "block";
            document.querySelector("#letra-5").style.display = "block";
            document.querySelector("#letra-6").style.display = "block";
            document.querySelector("#letra-7").style.display = "block";
            document.querySelector("#letra-8").style.display = "block";
            document.querySelector("#letra-9").style.display = "block";
            document.querySelector("#letra-10").style.display = "block";
        }
    }
}

function perdeu(){
    alert("Voce perdeu :( Tente novamente!");
    window.location.reload();
}

function ganhou(){
    alert("Prabens! Você acertou a palavra! :)");
    window.location.reload();
}

function limpar(){
    document.getElementById("letra-1").value = ""; 
    document.getElementById("letra-2").value = ""; 
    document.getElementById("letra-3").value = ""; 
    document.getElementById("letra-4").value = ""; 
    document.getElementById("letasTentadas").innerHTML = "";
    document.querySelector(".forca-parte").style.stroke = "#000";
}