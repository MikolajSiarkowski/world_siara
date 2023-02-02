import React from "react";
import { Country } from "./providers/bank-countries/model";

export function useCountry(){
  const [countryHook, setCountryHook] = React.useState<Country | undefined>();

  console.log("This is country hook", countryHook);

  return {countryHook, setCountryHook};
}
