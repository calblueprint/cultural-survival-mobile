import { createContext } from 'react';

const LanguageContext = createContext({
  language: 'es',
  setLanguage: () => {},
});

export default LanguageContext;
