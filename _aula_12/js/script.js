document.querySelector("#menu").onclick = () => {
    document.querySelector("#nav").style.top = "0px"
}
document.querySelector("#fechar").onclick = () => {
    document.querySelector("#nav").style.top = "-100px"
}
const section_listar = document.querySelector("#listar");
const section_resultado = document.querySelector("#resultado");
const section_inserir = document.querySelector("#inserir")
// esconder a section resultado e inserir
function listar() {
    section_resultado.style.display = "none";
    section_inserir.style.display = "none";
    // section listar deve ficar visivel
    section_listar.style.display = "block";

    // fazer referencia a div chamada listarlivros para
    // exibir os livros vindos da api
    const listar_livros = document.querySelector("#listarlivros");
    fetch("http://10.26.44.14:5000/api/v1/livros/listar")
        .then((res) => res.json())
        .then((dados) => {
            dados.payload.map((iten) => {
                let caixa = document.createElement("div")
                caixa.setAttribute("class", "caixa");
                let capa = document.createElement("img");
                capa.src = iten.foto1;
                let titulo = document.createElement("h4");
                titulo.innerHTML = iten.titulo;
                let autor = document.createElement("h5");
                autor.innerHTML = iten.autor;
                let preco = document.createElement("p");
                preco.setAttribute("class", "preco");
                preco.innerHTML = iten.precoatual;
                caixa.appendChild(capa);
                caixa.appendChild(titulo);
                caixa.appendChild(autor);
                caixa.appendChild(preco);
                listar_livros.appendChild(caixa);
            })
        })
        .catch((erro) => console.error(`Erro ao carregar dados ${erro}`))
}
function resultado() {
    section_resultado.style.display = "block";
    section_inserir.style.display = "none";
    section_listar.style.display = "none";
    const buscar = document.querySelector("#buscar");
    const resultado_busca = document.querySelector(".resultadobusca");
    resultado_busca.innerHTML= "Você pesquisou por :"+buscar.value;
    fetch("http://10.26.44.14:5000/api/v1/livros/pesquisar/"+buscar.value)
        .then((res) => res.json())
        .then((dados) => {
            dados.payload.map((iten) => {
                let caixa = document.createElement("div")
                caixa.setAttribute("class", "caixa");
                let capa = document.createElement("img");
                capa.src = iten.foto1;
                let titulo = document.createElement("h4");
                titulo.innerHTML = iten.titulo;
                let autor = document.createElement("h5");
                autor.innerHTML = iten.autor;
                let preco = document.createElement("p");
                preco.setAttribute("class", "preco");
                preco.innerHTML = iten.precoatual;
                caixa.appendChild(capa);
                caixa.appendChild(titulo);
                caixa.appendChild(autor);
                caixa.appendChild(preco);
                resultado_busca.appendChild(caixa);
            })
        })
        .catch((erro) => console.error(`Erro ao carregar dados ${erro}`))
}
function abrircadastrar(){
    section_resultado.style.display = "none";
    section_inserir.style.display = "block";
    section_listar.style.display = "none";
}
function inserir(){
    const txttitulo = document.querySelector("#txttitulo");
    const txtautor = document.querySelector("#txtautor");
    const txtpreco = document.querySelector("#txtpreco");
    const txtfoto1 = document.querySelector("#txtfoto1");
    const txtfoto2 = document.querySelector("#txtfoto2");
    const txtgenero = document.querySelector("#txtgenero");
    const txtsinopse = document.querySelector("#txtsinopse");

    fetch("http://10.26.44.14:5000/api/v1/livros/cadastrar",{
        method:"POST",
        headers:{
            "accept":"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({

            titulo:txttitulo.value,
            autor:txtautor.value,
            genero:txtgenero.value,
            precoatual:txtpreco.value,
            foto1:txtfoto1.value,
            foto2:txtfoto2.value,
            sinopse:txtsinopse.value


        })
    })
    .then((res)=>res.json())
    .then((dados)=>{
        if(dados.msg=="OK"){
            return alert("Livro cadastrado")
        }
        else{
            alert(dados.msg);
        }
    })
    .catch((erro)=>console.log("Erro ao cadastrar"+erro))
}