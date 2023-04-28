import { LitElement, html, css } from 'lit';
import './badge-element.js';
import './search-bar.js';

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
    this.dialogue = '';
    this.badges = [];
    this.getSearchResults().then((results) => {
      this.players = results;
    });
  }

  async getSearchResults(value = '') {
    const address = '/api/badges?search=' + value;
    const results = await fetch(address).then((response) => {
      if (response.ok) {
        return response.json()
      }
      return [];
    }).then((data) => {
        return data;
    });
    return results;
  }

  async _handleSearchEvent(e) {
    const term = e.detail.value;
    this.badges = await this.getSearchResults(term);
  }

  static get styles() {
    return css`
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      search-bar{
        display: block;
      }
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
      <div class="box">
        <search-bar @value-changed="${this._handleSearchEvent}"></search-bar>
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
      </div>
    `;
  }
}

customElements.define('badge-list', BadgeList);
