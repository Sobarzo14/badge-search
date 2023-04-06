import { LitElement, html, css } from 'lit';

class BadgeList extends LitElement {
  static properties = {
    name: { type: String },
    dialogue: { type: String },
    badges: { type: Array },
  };

  static styles = css`
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
    .card-list {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      padding: 10px 20px;
    }
  `;

  constructor() {
    super();
    this.name = 'My name';
    this.creator = 'My creator';
    this.category = 'My category';
    this.dialogue =
      "Looking for something brand spankin' new? Here are the most recently added badges!";
    this.searchBadges();
    this.badges = [];
  }

  async searchBadges() {
    const address = new URL('../assets/badges.json', import.meta.url).href;
    fetch(address)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then(data => {
        this.badges = data.badges;
      });
  }

  render() {
    return html`
      <div class="container">
        <div class="dialogue">${this.dialogue}</div>
        <div class="badge-list">
          ${this.badges.map(
            badge =>
              html` <badge-card
                name=${badge.name}
                category=${badge.category}
                creator=${badge.creator}
              ></badge-card>`
          )}
        </div>
      </div>
    `;
  }
}

customElements.define('badge-list', BadgeList);
