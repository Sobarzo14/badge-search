import { LitElement, html, css } from 'lit';

class BadgeElement extends LitElement {
  static properties = {
    name: { type: String },
    creator: { type: String },
    category: { type: String },
    icon: { type: String },
  };

  static styles = css`
    a {
      text-decoration: none;
      background-color: #fff;
      border: 1px solid #ccc;
      width: 100px;
    }
    .contents {
      padding: 10px;
      text-align: center;
      font-size: 12px;
    }
  `;

  constructor() {
    super();
    this.name = 'My name';
    this.creator = 'My creator';
    this.category = 'My category';
  }

  render() {
    return html`
      <a href="#">
        <div class="contents">
          <span>${this.category}</span>
          <span>${this.name}</span>
          <div>${this.creator}</div>
        </div>
      </a>
    `;
  }
}

customElements.define('badge-element', BadgeElement);
