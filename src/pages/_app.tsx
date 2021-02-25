import { ThemeProvider } from 'styled-components';

import { ChallengesProvider } from '../context/ChallengesContext';
import { CountDownProvider} from '../context/CountDownContext';
import theme from '../styles/themes/theme';
import GlobalTheme from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <CountDownProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalTheme />
        </ThemeProvider>
      </CountDownProvider>
    </ChallengesProvider>  
  )
}

export default MyApp
