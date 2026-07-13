// ===============================
// SISTEMA DE AVALIAÇÕES RLS GUINCHO
// ===============================


let notaSelecionada = 0;


// Seleciona estrelas

const estrelas = document.querySelectorAll(".estrela");


estrelas.forEach((estrela)=>{


    estrela.addEventListener("click",()=>{


        notaSelecionada = estrela.dataset.value;


        atualizarEstrelas();


    });


});



// Pintar estrelas

function atualizarEstrelas(){


    estrelas.forEach((estrela)=>{


        if(estrela.dataset.value <= notaSelecionada){

            estrela.textContent = "★";

        }else{

            estrela.textContent = "☆";

        }


    });


}



// Enviar avaliação

const formulario = document.querySelector("#form-avaliacao");


formulario.addEventListener("submit",(e)=>{


    e.preventDefault();



    let nome = document.querySelector("#nome").value;

    let comentario = document.querySelector("#comentario").value;



    if(notaSelecionada == 0){

        alert("Escolha uma quantidade de estrelas!");

        return;

    }



    criarAvaliacao(nome, comentario, notaSelecionada);



    formulario.reset();


    notaSelecionada = 0;


    atualizarEstrelas();


});




// Criar avaliação na tela

function criarAvaliacao(nome, comentario, nota){


    let lista = document.querySelector("#lista-avaliacoes");


    let card = document.createElement("div");


    card.classList.add("card-avaliacao");



    card.innerHTML = `

        <h3>
        ${"★".repeat(nota)}
        ${"☆".repeat(5-nota)}
        </h3>


        <h4>${nome}</h4>


        <p>${comentario}</p>


        <button class="btn-like">
            👍 Curtir 0
        </button>

    `;



    lista.prepend(card);



    ativarLike(card.querySelector(".btn-like"));

}



// Sistema de curtidas

function ativarLike(botao){


    let curtidas = 0;


    botao.addEventListener("click",()=>{


        curtidas++;


        botao.innerHTML = `👍 Curtir ${curtidas}`;


    });


}