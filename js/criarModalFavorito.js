import { frase, autorFrase, listaFrasesFavoritas, armazenamentoLocal } from "../main.js";

const carrosselFrases = document.querySelector('.carrossel-frases');
const caixaVazia = document.querySelector('.caixa-vazia');
const mensagemSalva = document.querySelector('.mensagem-frase-salva');

// PEGA TODOS OS ITENS DO ARRAY 
function fraseIndex() {
   let index = listaFrasesFavoritas[listaFrasesFavoritas.length - 1];


   const frasesFavoritadas = document.createElement('li');
   frasesFavoritadas.className = 'caixa-de-frases-favoritas';
   frasesFavoritadas.id = index.id;
   frasesFavoritadas.innerHTML =
      `<ion-icon class="excluir-frase-favorita" name="trash"></ion-icon>
      <span class="frase-favorita">${index.valorFrase}</span>
      <span class="autor-favorito">${index.valorAutor}</span>`;

   carrosselFrases.appendChild(frasesFavoritadas);


   armazenamentoLocal();
}

// REMOVE A FRASE FAVORITA PELO BOTÃO
document.addEventListener('click', (e) => {
   if (e.target.classList.contains('excluir-frase-favorita')) {
      e.target.parentElement.classList.add('delete-animation');
      setTimeout(() => {
         e.target.parentElement.remove();
         if (carrosselFrases.innerHTML === '') {
            caixaVazia.classList.remove('esconder');
         }
         armazenamentoLocal();
      }, 200);
   }
});

// ADICIONAR FRASE PELO INDEX DO ARRAY
export function fraseFavorita() {

   if (frase.innerHTML !== '') {
      mensagemSalva.classList.add('mostrar-mensagem');

      setTimeout(() => {
         mensagemSalva.classList.remove('mostrar-mensagem');
      }, 2000);

      const escopo = {
         valorFrase: frase.innerHTML,
         valorAutor: autorFrase.innerHTML,
         id: gerarId()
      };

      if (escopo.valorFrase !== '') {
         listaFrasesFavoritas.push(escopo);

         fraseIndex();
         armazenamentoLocal();
      }
      caixaVazia.classList.add('esconder');
   }

   armazenamentoLocal();
}
// GERA O ID PARA CADA FRASE SALVA
function gerarId() {
   let caracteres = '123456789abcdefghijklmnopqrstuvwxyz';
   let resultadoId = '';

   for (let i = 0; i < 6; i++) {
      let idGerado = Math.floor(Math.random() * caracteres.length);
      resultadoId += caracteres.charAt(idGerado);
   }
   return resultadoId;
}



