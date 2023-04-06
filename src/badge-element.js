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
    .container {
      width: 25%;
      padding: 2 2 2 20;
      font-size: 12px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin: 20px;
    }
    .badge-body {
      width: 95%;
      margin: 2px 0 2px 0;
      background-color: #fff;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .category {
      font-size: 12px;
      color: #4c4c4c;
      padding: 10px 20px;
      width: 100%;
    }
    .name {
      font-size: 24px;
      text-decoration: none;
      font-weight: bold;
      color: #000000;
      padding: 10px 20px;
    }
    .creator {
      font-size: 12px;
      color: #414141;
      padding: 10px 20px;
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
      <div class="container">
        <div class="badge-body">
          <div class="category">${this.category}</div>
          <div class="info">
            <span>${this.name}</span>
            <i></i>
          </div>
          <div class="creator">${this.creator}</div>
        </div>
        <div class="icon"></div>
      </div>
    `;
  }
}

customElements.define('badge-element', BadgeElement);
