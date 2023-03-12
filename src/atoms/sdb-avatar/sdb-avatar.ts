import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('sdb-avatar')
export class SbdAvatar extends LitElement {

  render() {
    return html`
      <h1>Hello Avatar</h1>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sdb-avatart': SbdAvatar
  }
}
