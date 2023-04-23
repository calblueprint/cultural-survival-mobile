import { createContext } from 'react';

const LanguageContext = createContext({
  language: 'es',
  setLanguage: () => {
    /** initializing as an empty function */
  },
});

export default LanguageContext;
