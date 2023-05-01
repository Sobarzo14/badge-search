import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class BadgeElement extends LitElement {
  static properties = {
    name: { type: String },
    creator: { type: String },
    category: { type: String },
    icon: { type: String },
    topColor: { type: String },
    sideColor: { type: String }
  };

  constructor() {
    super();
    this.name = 'Stage Crew stamp';
    this.creator = 'Aunt Arctic';
    this.category = 'Easy';
    this.icon = 'av:airplay';
    this.sideColor = this.randomColor();
  }

  randomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
  }

  static styles = css`
  :host {
    --side-color: #667dff;
  }
    .badge {
      display: flex;
      flex-direction: row;
      border-radius: 5px;
      background-color: #f2f2f2;
      width: 400px;
      height: 150px;
    }
    .side {
      background-color: var(--side-color);
      width: 20px;
      height: 100%;
      border-radius: 5px 0px 0px 5px;
    }
    .badge-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: start;
    }
    .category {
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      width: 100%;
      height: 20px;
      padding-top: 5px;
      border-radius: 0px 5px 0px 0px;
      background-color: #999;
    }
    .category-name{
      padding-left: 15px;
    }
    .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      margin: 10px;
      flex: 1.2;
    }
    .icon {
      width: 50px;
    }
    .title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .creator {
      font-size: 14px;
      color: #999;
      justify-self: flex-end;
      height: 20px;
      padding: 0px 0px 5px 10px;
    }
  `;



  render() {
    return html`
      <div class="badge">
        <div class="side" style="--side-color: ${this.sideColor};"></div>
        <div class="badge-content">
          <div class="category">
          <div class="category-name">${this.category}</div>
          </div>
          <div class="content">
            <div class="title">${this.name}</div>
            <div class="icon">
            <simple-icon class="icon" accent-color="blue-grey" icon=${this.icon}></simple-icon>
            </div>
          </div>
          <div class="creator">${this.creator}</div>
        </div>
      </div>
    `;
  }
}

customElements.define('badge-element', BadgeElement);
