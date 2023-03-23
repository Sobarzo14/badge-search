import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class SearchBar extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`

  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
  <div class= "searchBar">
  <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <input type="text" placeholder="Search..">
</div>
    `;
  }
}

customElements.define('project-2', Project2);
