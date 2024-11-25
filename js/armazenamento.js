import {
   listaFrase, btnProg, btnNatal, btnAnoNovo, btnVida, btnSonhos, btnPessoas,
   btnConquistas, accordionHeader, frase, autorFrase, fundoModal,
} from "../main.js";

import { listaFrasesFavoritas } from "../main.js";
const carrosselFrases = document.querySelector('.carrossel-frases');
const caixaVazia = document.querySelector('.caixa-vazia');

export function armazenamentoLocal() {
   // FRASE
   localStorage.setItem('frase', JSON.stringify(listaFrase));

   // RADIO
   localStorage.setItem('radioProg', btnProg.classList.contains('active') ? 'active' : '');
   localStorage.setItem('radioNatal', btnNatal.classList.contains('active') ? 'active' : '');
   localStorage.setItem('radioAnoNovo', btnAnoNovo.classList.contains('active') ? 'active' : '');
   localStorage.setItem('radioVida', btnVida.classList.contains('active') ? 'active' : '');
   localStorage.setItem('radioSonhos', btnSonhos.classList.contains('active') ? 'active' : '');
   localStorage.setItem('radioConquistas', btnConquistas.classList.contains('active') ? 'active' : '');
   localStorage.setItem('radioPessoas', btnPessoas.classList.contains('active') ? 'active' : '');

   // CABEÇALHO ACCORDION
   localStorage.setItem('cabecalhoAccordion', accordionHeader.innerHTML);
   localStorage.setItem('fraseInner', frase.innerHTML);
   localStorage.setItem('autor', autorFrase.innerHTML);

   // MODAL
   localStorage.setItem('modal', fundoModal.classList.contains('backdrop-modal-disabled') ? 'backdrop-modal-disabled' : '');

   // FRASES FAVORITAS
   localStorage.setItem('favoritas', JSON.stringify(listaFrasesFavoritas));
   localStorage.setItem('frasesFavLoad', carrosselFrases.innerHTML);
   localStorage.setItem('caixaVazia', caixaVazia.classList.contains('esconder') ? 'esconder' : '');
} 