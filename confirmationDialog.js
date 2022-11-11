const template = document.createElement('template');

template.innerHTML = `
  <div id="confirmationDialog">
    <h3>Dialog Goes Here</h3>
  </div>
`

class ConfirmationDialog extends HTMLElement{
  constructor(){
      super();
      this.attachShadow({ mode: 'open'});
      this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(){
    this.render();
  }

  render(){
  }
}

window.customElements.define('confirmation-dialog', ConfirmationDialog);
