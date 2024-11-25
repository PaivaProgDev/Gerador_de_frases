import { btnAccordion, accordionBody } from "../main.js";

export function ativarAccordion() {
   accordionBody.classList.toggle('active-accordion');
   btnAccordion.style.borderBottomLeftRadius = '0';
   btnAccordion.style.borderBottomRightRadius = '0';
}

export function desativarAccordion(event) {
   if (event.target !== btnAccordion) {
      accordionBody.classList.remove('active-accordion');
   }

   if (!accordionBody.classList.contains('active-accordion')) {
      btnAccordion.style.borderBottomLeftRadius = '10px';
      btnAccordion.style.borderBottomRightRadius = '10px';
   }
}
