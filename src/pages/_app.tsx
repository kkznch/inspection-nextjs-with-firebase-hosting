import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { Button } from '@/components/Button';

const themeExtension = extendTheme({
  components: {
    Button,
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={themeExtension}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
