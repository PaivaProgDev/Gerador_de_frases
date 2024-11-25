import { btnProg, btnNatal, btnAnoNovo, btnVida, btnSonhos, btnConquistas, frase, autorFrase, btnPessoas, listaFrasesFavoritas } from "../main.js";

const carrosselFrases = document.querySelector('.carrossel-frases');
const caixaVazia = document.querySelector('.caixa-vazia');

export function carregarLocal() {
   const localProg = localStorage.getItem('radioProg');
   const localNatal = localStorage.getItem('radioNatal');
   const localAnoNovo = localStorage.getItem('radioAnoNovo');
   const localVida = localStorage.getItem('radioVida');
   const localSonhos = localStorage.getItem('radioSonhos');
   const localConquistas = localStorage.getItem('radioConquistas');
   const localPessoas = localStorage.getItem('radioPessoas');

   const modal = document.querySelector('.backdrop-modal');
   const accordionHeader = document.querySelector('.btn-opcao');
   const localFrase = localStorage.getItem('fraseInner');
   const localAutor = localStorage.getItem('autor');
   const localModal = localStorage.getItem('modal');
   const cabecalhoAccordion = localStorage.getItem('cabecalhoAccordion');
   const listaFrasesFav = localStorage.getItem('frasesFavLoad');
   const caixa = localStorage.getItem('caixaVazia');

   if (localProg) {
      btnProg.parentElement.classList.add(localProg);
      btnProg.classList.add(localProg);
   }

   if (localNatal) {
      btnNatal.parentElement.classList.add(localNatal);
      btnNatal.classList.add(localNatal);
   }

   if (localAnoNovo) {
      btnAnoNovo.parentElement.classList.add(localAnoNovo);
      btnAnoNovo.classList.add(localAnoNovo);
   }

   if (localVida) {
      btnVida.parentElement.classList.add(localVida);
      btnVida.classList.add(localVida);
   }

   if (localSonhos) {
      btnSonhos.parentElement.classList.add(localSonhos);
      btnSonhos.classList.add(localSonhos);
   }

   if (localConquistas) {
      btnConquistas.parentElement.classList.add(localConquistas);
      btnConquistas.classList.add(localConquistas);
   }

   if (localPessoas) {
      btnPessoas.parentElement.classList.add(localPessoas);
      btnPessoas.classList.add(localPessoas);
   }

   if (cabecalhoAccordion) {
      accordionHeader.innerHTML = cabecalhoAccordion;
   }

   if (localFrase) {
      frase.innerHTML = localFrase;
   }

   if (localAutor) {
      autorFrase.innerHTML = localAutor;
   }

   if (localModal) {
      modal.classList.add(localModal);
      modal.style.display = 'none';
   }

   if (listaFrasesFav) {
      carrosselFrases.innerHTML = listaFrasesFav;
   }

   if (caixa) {
      caixaVazia.classList.add(caixa);
   }
}