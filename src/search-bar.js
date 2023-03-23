import { LitElement, html, css } from 'lit';

class SearchBar extends LitElement {
  static properties = {
    header: { type: String },
    dialogue: { type: String },
  };

  static styles = css`
    .search-bar {
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px;
      margin: 10px;
      width: 80%;
    }
    input {
      width: 95%;
      padding: 10px;
      margin: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      display: inline-flex;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
    this.dialogue =
      'Explore our content in a self-guided manner. Want us to guide you through learning new skills? Try out Missions. Looking for other people with similar focus? Find them in Groups. Interested in viewing all the options within a certain subject area? You can do that with Topics.';
  }

  render() {
    return html`
      <div class="search-bar">
        <div class="dialogue">${this.dialogue}</div>
        <div class="search">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);
