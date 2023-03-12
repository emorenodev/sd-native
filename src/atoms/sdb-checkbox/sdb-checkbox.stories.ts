import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './sdb-checkbox'

export default {
  title: 'Checkbox',
  render: (args) => html`<sdb-checkbox></sdb-checkbox>`,
} as Meta

export const Default: StoryObj = {
  name: 'Default'
}
