var miniatura = document.getElementsByClassName("miniatura")[0];
var fullsize = document.getElementsByClassName("fullsize")[0];

/*
O comandao a baixo faz uma contagem de 1 a 5 e 
incrementa de um em um. Dentro do corpo do for é
chamada a div miniatura e inserimos nela um 
comando html para exibição de imagens e este
comando é repetido tantas vezes que e pedido no
comando for. quando ha a a contagem o nome da 
foto é incremento com o numero da variavel 
i. fazendo uma contagem de 1 ate 5 e exibir
as imagens da foto1 ate a fot5  dentro da div
miniatura 
*/ 

for( var i = 1; i <= 5; i++){
    miniatura.innerHTML+="<img src=img/foto"+i+".jpg onclick=abrir("+i+")>"
}
/*
a função abrir é chamada todas a vezes que uma foto da 
miniatura e clicada.
quando a miniatura e clicada, ela dispara um evento 
chamado onclick e chama a fução abrir passando por 
parametro(argumento) um numero, que é a posição da
foto. assim, a funçao abrir recebe o numero é usada para formar o nome da foto
que sera carregada na div fullsize como vemos baixo
*/ 


function abrir(p){
        fullsize.innerHTML="<img src=img/foto"+(p)+".jpg>";
    }
