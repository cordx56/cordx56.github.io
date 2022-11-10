import { useState, KeyboardEvent, CompositionEventHandler } from "react";
import { StyledChar, ShellOutput } from "./interfaces";
import { stringToStyledChars } from "./utils";

export const userName = "cordx56";
export const hostName = "cordx.cx";
export const defaultCwd = "/home/cordx56";
export const getPrompt = (cwd: string): StyledChar[] => {
  const styledCwdName: StyledChar[] = cwd.split("").map((c) => {
    return { char: c, class: "text-sky-500" };
  });
  const dollar: StyledChar[] = [{ char: " " }, { char: "$" }, { char: " " }];
  return [...styledCwdName, ...dollar];
};

const newLine: StyledChar[] = [{ char: "\n" }];

export const useShell = (): ShellOutput => {
  const [cwd, setCwd] = useState(defaultCwd);
  const [display, setDisplay] = useState<StyledChar[]>(getPrompt(defaultCwd));
  const [userInput, setUserInput] = useState<StyledChar[]>([]);
  const [imeInput, setImeInput] = useState<StyledChar[]>([]);
  const text = display.concat(userInput, imeInput);
  const [cursorPosition, setCursorPosition] = useState(
    getPrompt(defaultCwd).length
  );
  const userInputCursorPosition = cursorPosition - display.length;
  const onInput = (sc: StyledChar[]) => {
    const userInputBefore = userInput.slice(0, userInputCursorPosition);
    const userInputAfter = userInput.slice(userInputCursorPosition);
    setUserInput([].concat(userInputBefore, sc, userInputAfter));
    setCursorPosition(cursorPosition + sc.length);
  };
  const onKeydownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (!e.nativeEvent.isComposing) {
      if (e.key === "Enter") {
        const newDisplay = text.concat(newLine, getPrompt(cwd));
        setDisplay(newDisplay);
        setUserInput([]);
        setCursorPosition(newDisplay.length);
      } else if (e.key === "Backspace") {
        if (0 < userInput.length) {
          setUserInput(userInput.slice(0, -1));
          setCursorPosition(cursorPosition - 1);
        }
      } else if (e.key === "ArrowLeft") {
        if (0 < userInputCursorPosition) {
          setCursorPosition(cursorPosition - 1);
        }
      } else if (e.key === "ArrowRight") {
        if (cursorPosition < text.length) {
          setCursorPosition(cursorPosition + 1);
        }
      } else if (e.key.length === 1) {
        onInput(stringToStyledChars(e.key));
      }
    }
  };
  const onCompositionUpdateHandler: CompositionEventHandler = (e) => {
    if (!e.data.endsWith("\n")) {
      setImeInput(stringToStyledChars(e.data));
    }
  };
  const onCompositionEndHandler: CompositionEventHandler = () => {
    onInput(imeInput);
    setImeInput([]);
  };
  return {
    text: text,
    cursorPosition,
    onKeydownHandler,
    onCompositionStartHandler: onCompositionUpdateHandler,
    onCompositionUpdateHandler,
    onCompositionEndHandler,
  };
};
