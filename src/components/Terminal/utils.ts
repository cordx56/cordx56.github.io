import { StyledChar } from "./interfaces";

export const stringToStyledChars = (s: string, className=""): StyledChar[] => {
  return s.split("").map((c) => {
    return { char: c, class: className };
  });
};
