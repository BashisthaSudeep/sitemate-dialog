const template = document.createElement('template');

template.innerHTML = `
<style>
    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      height: 100vh;
      width: 100vw;
      background-color: rgba(0,0,0,0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      display: none;
    }

    .overlay.open {
      display: flex;
    }

    .dialog {
      background-color: #FFFFFF;
      padding: 20px 30px;
    }
  </style>
  <div class="overlay" id="confirmationDialog">
    <div class="dialog">
      <p id="dialogTitle"></p>
      <div class="dialog-actions">
        <button id="buttonYes">Yes</button>
        <button id="buttonCancel">Cancel</button>
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
      this.shadowRoot.getElementById('confirmationDialog').setAttribute('id', this.getAttribute('modalId'))
      this.shadowRoot.getElementById('buttonYes').addEventListener('click', () => {
        eval(this.getAttribute('onYes'))()
        this.shadowRoot.getElementById(this.getAttribute('modalId')).classList.remove("open")
      })
      this.shadowRoot.getElementById('buttonCancel').addEventListener('click', () => {
        eval(this.getAttribute('onCancel'))()
        this.shadowRoot.getElementById(this.getAttribute('modalId')).classList.remove("open")
      })
  }

  connectedCallback(){
    this.render();
  }

  render(){
  }
}

window.customElements.define('confirmation-dialog', ConfirmationDialog);
