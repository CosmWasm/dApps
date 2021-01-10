import React from "react";
import { Buttons } from "./Buttons";
import { Forms } from "./Forms";

export function GlobalAntOverride(): JSX.Element {
  return (
    <>
      <Buttons />
      <Forms />
    </>
  );
}
