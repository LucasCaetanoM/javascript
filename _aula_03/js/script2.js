// escolha = prompt("Digite uma das opções para a cor de fundo:\n1-Azul:\n2-Vermelho:\n3-Amarelo:\n4-Cinza");

// if(escolha==1){
//     document.body.style.backgroundColor="blue"
// }
// else if (escolha==2){
//     document.body.style.backgroundColor="Red"
// }
// else if (escolha==3){
//     document.body.style.backgroundColor="yellow"
// }
// else if (escolha==4){
//     document.body.style.backgroundColor="Grey"  
// }
// else{
//     document.body.style.backgroundColor="White"
// }

escolha = prompt("Digite uma das opções para a cor de fundo:\n1-Azul:\n2-Vermelho:\n3-Amarelo:\n4-Cinza");

var cor="White";

if(escolha==1){
    cor="blue";
}
else if (escolha==2){
    cor="Red";
}
else if (escolha==3){
    cor="yellow";
}
else if (escolha==4){
    cor="Grey"; 
}
else{
    cor;
}
document.body.style.backgroundColor=cor;