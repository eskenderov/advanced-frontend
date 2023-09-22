import { lazy } from "react";

export const AboutPageLazy = lazy(
  () =>
    new Promise((resolve, reject) => {
      // @ts-ignore
      setTimeout(() => resolve(import("./AboutPage")), 1500);
    })
);
