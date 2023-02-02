import React, { FC } from "react";
import { Country } from "./providers/bank-countries/model";

interface ContextProps {
  country: Country | undefined;
  setCountry: (value: Country) => void;
}

export const CountryContext = React.createContext<ContextProps>({
  country: undefined,
  setCountry: ()=>{}
});

export const CountryContextWrapper: FC<React.PropsWithChildren> = ({children})=>{
  const [rest, setRest] = React.useState<Country | undefined>(undefined);
  
  console.log('My children', children);

  return (
    <CountryContext.Provider value={{country: rest, setCountry: setRest}}>
      {children}
    </CountryContext.Provider>
  );
}

