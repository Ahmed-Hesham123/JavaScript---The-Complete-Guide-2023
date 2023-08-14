class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText = "Some dummy tooltip text.";
    this.attachShadow({ mode: "open" });
    // const template = document.querySelector("#tooltip-template");
    // this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.innerHTML = `
    <style>
      div {
        background: royalblue;
        color: #fff;
        position: absolute;
        z-index: 10;
      }

      :host(.important) {
        background: #ccc;
      }

      .highlight {
        background: red;
      }
      
      ::slotted(.highlight) {
        border: 1px solid red;
      }

      .icon {
        background: black;
        color: white;
        padding: 0.15rem 0.5rem;
        text-align: center;
        border-radius: 50%;

      }
    </style>
      <slot>Some default</slot>
      <span class="icon">?</span>`;
  }

  connectedCallback() {
    if (this.hasAttribute("text")) {
      this._tooltipText = this.getAttribute("text");
    }
    const tooltipIcon = this.shadowRoot.querySelector("span");
    tooltipIcon.textContent = " ?";
    tooltipIcon.addEventListener("mouseenter", this._showTooltip.bind(this));
    tooltipIcon.addEventListener("mouseleave", this._hideTooltip.bind(this));
    this.shadowRoot.appendChild(tooltipIcon);
    this.style.position = "relative";
  }

  _showTooltip() {
    this._tooltipContainer = document.createElement("div");
    this._tooltipContainer.textContent = this._tooltipText;
    // this._tooltipContainer.style.background = "royalblue";
    // this._tooltipContainer.style.color = "#fff";
    // this._tooltipContainer.style.position = "absolute";
    // this._tooltipContainer.style.zIndex = "10";
    this.shadowRoot.appendChild(this._tooltipContainer);
  }

  _hideTooltip() {
    this.shadowRoot.removeChild(this._tooltipContainer);
  }
}

customElements.define("ah-tooltip", Tooltip);
