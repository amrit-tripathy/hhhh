import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FirebaseProvider } from './Firebase';
import {ChakraProvider} from '@chakra-ui/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <FirebaseProvider>
    <App />
    </FirebaseProvider>
    </ChakraProvider>
  </React.StrictMode>
);
