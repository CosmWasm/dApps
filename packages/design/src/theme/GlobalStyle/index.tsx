import React from "react";
import { GlobalAntOverride } from "./GlobalAntOverride";
import { GlobalColors } from "./GlobalColors";
import { GlobalFonts } from "./GlobalFonts";
import { GlobalReset } from "./GlobalReset";
import { GlobalSpacing } from "./GlobalSpacing";

export function GlobalStyle(): JSX.Element {
  return (
    <>
      <GlobalReset />
      <GlobalSpacing />
      <GlobalColors />
      <GlobalFonts />
      <GlobalAntOverride />
    </>
  );
}
