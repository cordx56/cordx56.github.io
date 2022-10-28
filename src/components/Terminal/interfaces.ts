import { CSSProperties, KeyboardEventHandler } from "react";

export type StyledChar = {
  char: string;
  style?: CSSProperties;
  class?: string;
};

export type ShellOutput = {
  text: StyledChar[];
  cursorPosition: number;
  eventHandler: KeyboardEventHandler<HTMLTextAreaElement>;
};
