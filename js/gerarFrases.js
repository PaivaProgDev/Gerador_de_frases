// INPUT
import { btnProg, btnNatal, btnAnoNovo, btnVida, btnSonhos, btnConquistas, btnPessoas, accordionHeader } from "../main.js";

// FUNÇÃO
import { temas } from "./temas.js";

export function buscarFrases() {
   fetch('./api/frases.json')
      .then(res => res.json())
      .then(data => {
         gerarFrases(data);
      });

   const mensagemTema = document.querySelector('.mensagem-tema');

   if (accordionHeader.innerHTML === 'Frases') {
      mensagemTema.classList.add('message-active');
   } else {
      mensagemTema.classList.remove('message-active');
   }
}

function gerarFrases(data) {

   if (btnProg.classList.contains('active')) {
      const fraseProg = data.programacao;
      temas(fraseProg);
   }

   if (btnNatal.classList.contains('active')) {
      const fraseNatal = data.natal;
      temas(fraseNatal);
   }

   if (btnAnoNovo.classList.contains('active')) {
      const fraseAnoNovo = data.anoNovo;
      temas(fraseAnoNovo);
   }

   if (btnVida.classList.contains('active')) {
      const fraseVida = data.vida;
      temas(fraseVida);
   }

   if (btnSonhos.classList.contains('active')) {
      const fraseSonhos = data.sonhos;
      temas(fraseSonhos);
   }

   if (btnConquistas.classList.contains('active')) {
      const fraseConquistas = data.conquistas;
      temas(fraseConquistas);
   }

   if (btnPessoas.classList.contains('active')) {
      const frasePessoas = data.pessoas;
      temas(frasePessoas);
   }

}
