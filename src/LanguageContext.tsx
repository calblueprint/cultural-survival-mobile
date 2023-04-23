import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useMemo,
} from 'react';

interface ILanguageContext {
  audio: string;
  setAudio: Dispatch<SetStateAction<string>>;
}

const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<string>('en');

  const value = useMemo(
    () => ({
      language: language,
      setLanguage: setLanguage,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
