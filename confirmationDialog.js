const template = document.createElement('template');

template.innerHTML = `
  <div id="confirmationDialog">
    <div className="overlay">
      <div className="dialog">
        <p id="dialogTitle"></p>
        <div className="dialog-actions">
          <button id="buttonYes">Yes</button>
          <button id="buttonCancel">Cancel</button>
        </div>
      </div>
    </div>
  </div>
`

class ConfirmationDialog extends HTMLElement{
  constructor(){
      super();
      this.attachShadow({ mode: 'open'});
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.getElementById('dialogTitle').innerText = this.getAttribute('message');

      this.shadowRoot.getElementById('buttonYes').addEventListener('click', () => eval(this.getAttribute('onYes'))())
      this.shadowRoot.getElementById('buttonCancel').addEventListener('click', () => eval(this.getAttribute('onCancel'))())
  }

  connectedCallback(){
    this.render();
  }

  render(){
  }
}

window.customElements.define('confirmation-dialog', ConfirmationDialog);
