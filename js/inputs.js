import { btnProg, btnNatal, btnAnoNovo, btnVida, btnSonhos, btnConquistas, btnPessoas, frase, autorFrase, accordionHeader } from "../main.js";

export function alteracaoEstado(radioEvent) {
   // ============= PROGRAMAÇÃO =============== //
   if (radioEvent.target === btnProg) {
      ativarBtn(btnProg);
      estadoDoInput(btnProg);
      frase.innerHTML = '';
      autorFrase.innerHTML = '';
      accordionHeader.innerHTML = 'Programação';
   }

   // ============= NATAL =============== //
   if (radioEvent.target === btnNatal) {
      ativarBtn(btnNatal);
      estadoDoInput(btnNatal);
      frase.innerHTML = '';
      autorFrase.innerHTML = '';
      accordionHeader.innerHTML = 'Natal';
   }

   // ============= ANO NOVO =============== //
   if (radioEvent.target === btnAnoNovo) {
      ativarBtn(btnAnoNovo);
      estadoDoInput(btnAnoNovo);
      frase.innerHTML = '';
      autorFrase.innerHTML = '';
      accordionHeader.innerHTML = 'Ano Novo';
   }

   // ============= PARA VOCÊ =============== //
   if (radioEvent.target === btnVida) {
      ativarBtn(btnVida);
      estadoDoInput(btnVida);
      accordionHeader.innerHTML = 'Para sua vida';
      frase.innerHTML = '';
      autorFrase.innerHTML = '';
   }

   // ============= SONHOS =============== //
   if (radioEvent.target === btnSonhos) {
      ativarBtn(btnSonhos);
      estadoDoInput(btnSonhos);
      frase.innerHTML = '';
      autorFrase.innerHTML = '';
      accordionHeader.innerHTML = 'Sonhos';
   }

   // ============= Conquistas =============== //
   if (radioEvent.target === btnConquistas) {
      ativarBtn(btnConquistas);
      estadoDoInput(btnConquistas);
      frase.innerHTML = '';
      autorFrase.innerHTML = '';
      accordionHeader.innerHTML = 'Conquistas';
   }

   // ============= Pessoas =============== //
   if (radioEvent.target === btnPessoas) {
      ativarBtn(btnPessoas);
      estadoDoInput(btnPessoas);
      frase.innerHTML = '';
      autorFrase.innerHTML = '';
      accordionHeader.innerHTML = 'Pessoas';
   }

}

// INPUT MARCADO
function estadoDoInput(btn) {
   btnConquistas.parentElement.classList.remove('active');
   btnProg.parentElement.classList.remove('active');
   btnNatal.parentElement.classList.remove('active');
   btnAnoNovo.parentElement.classList.remove('active');
   btnVida.parentElement.classList.remove('active');
   btnSonhos.parentElement.classList.remove('active');
   btnPessoas.parentElement.classList.remove('active');
   btn.parentElement.classList.add('active');
}

// CLASSES
function ativarBtn(active) {
   btnProg.classList.remove('active');
   btnNatal.classList.remove('active');
   btnAnoNovo.classList.remove('active');
   btnVida.classList.remove('active');
   btnSonhos.classList.remove('active');
   btnConquistas.classList.remove('active');
   btnPessoas.classList.remove('active');
   active.classList.add('active');
}
