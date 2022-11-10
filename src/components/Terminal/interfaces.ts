import {
  CompositionEventHandler,
  CSSProperties,
  KeyboardEventHandler,
} from "react";

export type StyledChar = {
  char: string;
  style?: CSSProperties;
  class?: string;
};

export type ShellOutput = {
  text: StyledChar[];
  cursorPosition: number;
  onKeydownHandler: KeyboardEventHandler<HTMLTextAreaElement>;
  onCompositionStartHandler: CompositionEventHandler;
  onCompositionUpdateHandler: CompositionEventHandler;
  onCompositionEndHandler: CompositionEventHandler;
};
