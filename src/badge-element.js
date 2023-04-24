import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class BadgeElement extends LitElement {
  static properties = {
    name: { type: String },
    creator: { type: String },
    category: { type: String },
    icon: { type: String },
    color: { type: String },
  };

  static styles = css`
    .badge {
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 5px;
      background-color: #f2f2f2;
      width: 400px;
      height: 150px;
    }

    .category {
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      color: #999;
      padding: 3px 6px;
      border-radius: 3px;
      margin-right: 10px;
      background-color: #ddd;
    }

    .icon {
      width: 50px;
    }

    .content {
      flex: 1;
    }

    .title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .creator {
      font-size: 14px;
      color: #999;
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
      <div class="badge">
        <div class="category">Category</div>
        <div class="icon">
        <simple-icon class="icon" accent-color="blue-grey" icon="image:portrait"></simple-icon>
        </div>
        <div class="content">
          <div class="title">Title</div>
          <div class="creator">Creator</div>
        </div>
      </div>
    `;
  }
}

customElements.define('badge-element', BadgeElement);
