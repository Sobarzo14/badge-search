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
      background-color: #8a8a8a;
      border: 1px solid #ccc;
      width: 480px;
    }
    .container {
      width: 480px;
      text-align: center;
      padding: 2 2 2 20px;
      font-size: 12px;
      background-color: #8a8a8a;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .badge-body {
      width: 95%;
      padding: 2 2 2 20px;
      background-color: #fff;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .name {
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }
    .creator {
      font-size: 12px;
      color: #fff;
    }
    .category {
      font-size: 12px;
      color: #fff;
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
          <div class="badge-body">
            <div class="category">${this.category}</div>
            <div class="info">
              <span>${this.name}</span>
              <i></i>
            </div>
            <div class="creator">${this.creator}</div>
          </div>
        </div>
      </a>
    `;
  }
}

customElements.define('badge-element', BadgeElement);
