// FUNÇÕES
import { alteracaoEstado } from "./js/inputs.js";
import { buscarFrases } from "./js/gerarFrases.js";
import { carregarLocal } from "./js/carregarLocal.js";
import { ativarAccordion, desativarAccordion } from "./js/accordion.js";
import { ativarTooltip, desativarTooltip } from "./js/tooltips.js";
import { btnFecharModal, fecharModalClicandoFora, modalLocal, abrirFrasesFavoritas, fecharFrasesFavoritas, fecharFrasesFavoritasEsc } from "./js/modal.js";
import { fraseFavorita } from "./js/criarModalFavorito.js";
import { armazenamentoLocal } from "./js/armazenamento.js";
import { copiarAreaTransferencia } from "./js/temas.js";

// FRASES
const frase = document.querySelector('.frase');
const autorFrase = document.querySelector('.autor');
const btnGerarFrase = document.querySelector('.btn-gerar-frase');
const bilheteFrase = document.querySelector('.caixa-de-frases');

// ACCORDION
const accordionHeader = document.querySelector('.btn-opcao');
const accordionBody = document.querySelector('.corpo-accordion');
const btnAccordion = document.querySelector('.cabecalho-accordion');

// INPUT
const btnProg = document.querySelector('.btn-prog');
const btnNatal = document.querySelector('.btn-natal');
const btnAnoNovo = document.querySelector('.btn-ano-novo');
const btnVida = document.querySelector('.btn-vida');
const btnSonhos = document.querySelector('.btn-sonhos');
const btnConquistas = document.querySelector('.btn-conquistas');
const btnPessoas = document.querySelector('.btn-pessoas');
const radios = document.getElementsByName('radio');

// MODAL
const fundoModal = document.querySelector('.backdrop-modal');
const fecharModal = document.querySelector('.botao-fechar-modal');
const fecharModalFavorito = document.querySelector('.botao-fechar-modal-f');

// TOOLTIP
const copiarFrase = document.querySelector('.copiar-frase');
const favoritarFrase = document.querySelector('.favoritar-frase');

const tooltipFavorito = document.querySelector('.tooltip-favorito');
const tooltipCopiar = document.querySelector('.tooltip-copiar');

// PEGA AS FRASES DA LISTA
let listaFrase = localStorage.getItem('frase');
if (listaFrase) {
   listaFrase = JSON.parse(listaFrase);
} else {
   listaFrase = [];
}

// FRASES FAVORITAS
let listaFrasesFavoritas = localStorage.getItem('favoritas');
if (listaFrasesFavoritas) {
   listaFrasesFavoritas = JSON.parse(listaFrasesFavoritas);
} else {
   listaFrasesFavoritas = [];
}

// ALTERA O ESTADO DOS INPUTS
radios.forEach(radio => {
   radio.addEventListener('change', function (radioEvent) {
      alteracaoEstado(radioEvent);
   });
});

// BUSCA A FRASE NO AQUIVO FRASES.JSON
btnGerarFrase.addEventListener('click', buscarFrases);

// COPIA A FRASE
copiarFrase.addEventListener('click', copiarAreaTransferencia);
copiarFrase.addEventListener('mouseenter', () => ativarTooltip(tooltipCopiar));
copiarFrase.addEventListener('mouseleave', () => desativarTooltip(tooltipCopiar));

//  MODAL
document.addEventListener('DOMContentLoaded', modalLocal);
document.addEventListener('keyup', fecharFrasesFavoritasEsc);
fundoModal.addEventListener('click', fecharModalClicandoFora);
fecharModal.addEventListener('click', btnFecharModal);
fecharModalFavorito.addEventListener('click', fecharFrasesFavoritas);

// ACCORDION
btnAccordion.addEventListener('click', ativarAccordion);
document.addEventListener('click', desativarAccordion);

// CARREGAR ARMAZENAMENTO
document.addEventListener('DOMContentLoaded', carregarLocal);

// FRASES FAVORITAS
bilheteFrase.addEventListener('dblclick', fraseFavorita);
favoritarFrase.addEventListener('click', abrirFrasesFavoritas);
favoritarFrase.addEventListener('mouseenter', () => ativarTooltip(tooltipFavorito));
favoritarFrase.addEventListener('mouseleave', () => desativarTooltip(tooltipFavorito));

export {
   // LISTA DE FRASES
   listaFrase,
   listaFrasesFavoritas,

   // BOTÕES INPUT
   btnProg, btnNatal, btnAnoNovo, btnVida, btnSonhos, btnConquistas, btnPessoas,

   // FRASE E AUTOR
   frase, autorFrase, favoritarFrase,

   // ACCORDION
   btnAccordion, accordionHeader, accordionBody,

   // TOOLTIP
   tooltipFavorito, tooltipCopiar,

   // MODAL
   fundoModal,

   // ARMAZENAMENTO
   armazenamentoLocal
};



