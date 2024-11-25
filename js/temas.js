import { frase, autorFrase, listaFrase, armazenamentoLocal } from "../main.js";

// REMOVE A FRASE ANTERIOR
function removeFrase(values) {
   return values.splice(0);
}

// 
export function temas(frases) {
   const frasesGeradas = frases[Math.floor(Math.random() * frases.length)];
   frase.innerHTML = frasesGeradas.frase;
   autorFrase.innerHTML = frasesGeradas.autor;

   removeFrase(listaFrase);

   let salvarObjeto = new Object();
   salvarObjeto.frase = frasesGeradas.frase;
   salvarObjeto.autor = frasesGeradas.autor;
   listaFrase.push(salvarObjeto);

   armazenamentoLocal();
}

export function copiarAreaTransferencia() {
   if (frase.innerHTML !== '') {
      const texto = frase.innerHTML;
      navigator.clipboard.writeText(texto)
         .then(() => {
            const mensagem = document.querySelector('.mensagem-frase-copiada');

            mensagem.classList.add('mostrar-mensagem');

            setTimeout(() => {
               mensagem.classList.remove('mostrar-mensagem');
            }, 2000);
         });
   }
}
