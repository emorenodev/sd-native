import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './sdb-avatar'

export default {
  title: 'Avatar',
  render: (args) => html`<sdb-avatar></sdb-avatar>`,
} as Meta

export const Default: StoryObj = {
  name: 'Default'
}
