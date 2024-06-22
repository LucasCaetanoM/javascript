const img = "https://image.tmdb.org/t/p/w500";
const estrutura = document.querySelector("#estrutura");

/*
Para carregar os dados da APIdo themoviedb, iremos usar o comando
fetch (buscar) para buscar os dados dos filmes populares. este comando
tem dois elementos atrelados. são eles:

then -> então: quando a execução comando fetch funciona
catch -> captura de erro: quando a execução do comando fetch falha 

O fetch é uma promise 
*/


fetch("https://api.themoviedb.org/3/movie/popular?language=pt-br&page=1&api_key=dc060f164333ae3e04d1c86eec284d37")
    .then((response) => response.json())
    .then((dados) => {
        dados.results.map((filme) => {
            let cartaz = document.createElement("div");
            cartaz.setAttribute("class", cartaz);
            let poster = document.createElement("img");
            poster.src = img + filme.poster_path;
            let votos = document.createElement("div")
            votos.setAttribute("class", "votos")
            votos.innerHTML = filme.vote_average;
            let titulo = document.createElement("h2");
            titulo.innerHTML = filme.title;
            let lancamento = document.createElement("p");
            lancamento.setAttribute("class", "lacamento");
            lancamento.innerHTML = filme.release_date;

            cartaz.appendChild(poster);
            cartaz.appendChild(votos);
            cartaz.appendChild(titulo);
            cartaz.appendChild(lancamento);
            estrutura.appendChild(cartaz);
        })

    })
    .catch((erro) => console.error(erro));

// const cidades = ["leme", "guarulhos", "são paulo", "maua", "suzano"];
// let p = 1;
// cidades.forEach(exibir);

// function exibir(itens) {
//     console.log(`${p}ª${itens}`);
//     p++;
// }
// cidades.forEach((itens) => {
//     console.log(`${p}ª${itens}`);
//     p++;
// });

// cidades.map((itens) => {
//     console.log(itens)
// })