import { LitElement, html, css } from 'lit';

class BadgeElement extends LitElement {
  static properties = {
    name: { type: String },
    creator: { type: String },
    category: { type: String },
    icon: { type: String },
    color: { type: String },
  };

  static styles = css`
    .card {
      text-decoration: none;
      background-color: #000000;
      border: 1px solid #ccc;
      width: 100px;
    }
    .container {
      padding: 10px;
      text-align: center;
      font-size: 12px;
      background-color: #8a8a8a;
    }
  `;

  constructor() {
    super();
    this.name = 'APA Styles Citation: Introduction';
    this.creator = 'Victoria Rash';
    this.category = 'My category';
  }

  render() {
    return html`
      <a href="#" class="card">
        <div class="container">
          <span>${this.category}</span>
          <span>${this.name}</span>
          <div>${this.creator}</div>
        </div>
      </a>
    `;
  }
}

customElements.define('badge-element', BadgeElement);
