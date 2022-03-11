import { themes } from '@storybook/theming';
import "../components/universal/ui/styles/Buttons.module.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: { ...themes.dark, appBg: 'black', classTarget: "html" },
    light: { ...themes.normal, appBg: '#E3E3E3' }
  }
}
