import { LitElement, html, css } from 'lit';
import './badge-element.js';

class BadgeList extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      dialogue: { type: String },
      badges: { type: Array }
    };
  };

  constructor() {
    super();
    this.name = '';
    this.creator = '';
    this.category = '';
    this.dialogue = "";
    this.badges = [];
    this.searchBadges(); 
  }

  async searchBadges() {
    const address = new URL('../api/badges.js', import.meta.url).href;
    fetch(address).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return [];
    }).then((data) => { 
      this.badges = data.badges;
    });
  }

  static get styles() {
    return css`
      .container {
        width: 90%;
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid #ccc;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px;
        margin: 10px;
      }
      .dialogue {
        text-align: center;
        margin: 10px;
        width: 90%;
      }
      .badge-list {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 10px 20px;
      }
      .item {
        margin: 10px;
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <div class="dialogue">${this.dialogue}</div>
        <div class="badge-list">
          ${this.badges.map(
            badge =>
              html` 
              <div class="item">
                <badge-element name=${badge.name} category=${badge.category} creator=${badge.creator} icon=${badge.icon}></badge-element>
              </div>`
          )}
        </div>
      </div>
    `;
  }
}

customElements.define('badge-list', BadgeList);
