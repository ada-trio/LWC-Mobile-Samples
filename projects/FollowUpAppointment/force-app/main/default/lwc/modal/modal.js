import { LightningElement, api } from "lwc";

export default class Modal extends LightningElement {
  @api showModal;

  @api get modalIsOpen() {
    return this.showModal === 1;
  }

  closeModal(event) {
    event.preventDefault();

        this.dispatchEvent(
      new CustomEvent("closemodal", {
        composed: true,
        bubbles: true
      })
    );
  }
}
