import { armazenamentoLocal } from "../main.js";

const modal = document.querySelector('.conteudo-modal');
const fundoModal = document.querySelector('.backdrop-modal');
const ativarBackdropModalFavoritas = document.querySelector('.backdrop-modal-f-favoritas');

// MODAL
export function modalLocal() {
   fundoModal.classList.add('backdrop-active');
   modal.classList.add('active-modal');
}

// FECHAR MODAL
export function btnFecharModal() {
   fundoModal.classList.add('backdrop-modal-disabled');
   modal.classList.remove('active-modal');
   armazenamentoLocal();
}

// FECHA O MODAL CLICANDO FORA
export function fecharModalClicandoFora() {
   fundoModal.classList.add('backdrop-modal-disabled');
   modal.classList.remove('active-modal');
   armazenamentoLocal();
}

// ABRIR MODAL DAS FRASES FAVORITAS
export function abrirFrasesFavoritas() {
   ativarBackdropModalFavoritas.classList.add('backdrop-modal-disabled');
}

// FECHAR MODAL DAS FRASES FAVORITAS
export function fecharFrasesFavoritas() {
   ativarBackdropModalFavoritas.classList.remove('backdrop-modal-disabled');
}

// FECHAR MODAL DAS FRASES FAVORITAS COM ESC
export function fecharFrasesFavoritasEsc(e) {
   if (e.key === 'Escape') {
      ativarBackdropModalFavoritas.classList.remove('backdrop-modal-disabled');
   }
};


