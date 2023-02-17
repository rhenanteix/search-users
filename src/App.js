import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import Profile from './components/Profile';
import { darkTheme, lightTheme } from './components/Theme';
import { GlobalCss } from './global/Global';
import GithubProvider from './providers/GithubProvider';

const App = () => {
  const [theme] = useState('light');


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalCss />
      <GithubProvider>
        <Layout>
          <Profile />
        </Layout>
      </GithubProvider>
    </ThemeProvider>
  );
};

export default App;
