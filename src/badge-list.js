import { LitElement, html, css } from 'lit';

class BadgeList extends LitElement {
  static properties = {
    name: { type: String },
    dialogue: { type: String },
  };

  static styles = css`
    .card-list {
      width: 80%;
      background-color: #fff;
    }
  `;

  constructor() {
    super();
    this.name = 'My name';
    this.dialogue =
      "Looking for something brand spankin' new? Here are the most recently added badges!";
  }

  render() {
    return html`
      <div class="card-list">
        <div class="dialogue">${this.dialogue}</div>
        <badge-element></badge-element>
      </div>
    `;
  }
}

customElements.define('badge-list', BadgeList);
