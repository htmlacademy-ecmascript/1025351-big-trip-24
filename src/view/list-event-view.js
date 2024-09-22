import { createElement } from '../render';

function eventListTemplate() {
  return `
  <ul class="trip-events__list"></ul>
  `;
}

export default class ListEventView {
  getTemplate() {
    return eventListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
