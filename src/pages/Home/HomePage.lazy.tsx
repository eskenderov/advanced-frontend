import { lazy } from "react";

export const HomePageLazy = lazy(
  () =>
    new Promise((resolve, reject) => {
      // @ts-ignore
      setTimeout(() => resolve(import("./HomePage")), 1500);
    })
);
