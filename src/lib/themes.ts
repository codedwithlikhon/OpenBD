import { Themes } from '@geist-ui/core';

const openBDTheme = Themes.createFromLight({
  type: 'openBDTheme',
  palette: {
    primary: '#006A4E',      // Bangladesh Green
    secondary: '#DC143C',    // Bangladesh Red
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
    background: '#ffffff',
    foreground: '#000000',
  },
});

export { openBDTheme };