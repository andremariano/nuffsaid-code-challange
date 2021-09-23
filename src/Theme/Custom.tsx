import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

interface IThemeProp {
  children: React.ReactNode;
}

export const COLORS = {
  'INFO': '#88FCA3',
  'WARNING': '#FCE788',
  'ERROR': '#F56236'
}

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 'bold',
        margin: '0 4px',
      }
    }
  },
  palette: {
    primary: {
      main: COLORS.INFO
    },
    secondary: {
      main: COLORS.WARNING
    },
    error: {
      main: COLORS.ERROR
    }
  }
});

const customTheme = ({ children }: IThemeProp):JSX.Element => {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}

export default customTheme;