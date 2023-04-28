import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class SearchBar extends LitElement {
  static properties = {
    header: { type: String },
    dialogue: { type: String },
    value: { type: String },
  };

  static styles = css`
    .container {
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px;
      margin: 10px;
      width: 90%;
    }
    .dialogue {
      text-align: center;
      margin: 10px;
      width: 90%;
    }
    .search {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 20px 0px;
    }
    .search-bar {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin: 0px 10px;
      width: 80%;
    }
    .search-button {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #667dff;
      cursor: pointer;
    }
    .search-button:hover {
      background-color: #485abf;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
    this.dialogue =
      'Explore our content in a self-guided manner. Want us to guide you through learning new skills? Try out Missions. Looking for other people with similar focus? Find them in Groups. Interested in viewing all the options within a certain subject area? You can do that with Topics.';
    this.value = 'Default Value';
  }

  _handleInput(e) {
    this.value = e.target.value;
    this.dispatchEvent(new CustomEvent('value-changed', {
      detail: this.value 
    
    }));
    }

  render() {
    return html`
      <div class="container">
        <div class="dialogue">${this.dialogue}</div>
        <div class="search">
          <simple-icon icon="search"></simple-icon>
          <input type="text" placeholder="Search" class="search-bar" @input=${this._handleInput} value=${this.value} />
          <button class="search-button">Search</button>
        </div>
      </div>
    `;
  }

}

customElements.define('search-bar', SearchBar);
