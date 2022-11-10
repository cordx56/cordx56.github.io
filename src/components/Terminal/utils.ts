export const stringToStyledChars = (s: string) => {
  return s.split("").map((c) => {
    return { char: c };
  });
};
