import { useState, KeyboardEvent } from "react";
import { StyledChar, ShellOutput } from "./interfaces";

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
  const text = display.concat(userInput);
  const [cursorPosition, setCursorPosition] = useState(0);
  const eventHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      setDisplay(text.concat(newLine, getPrompt(cwd)));
      setUserInput([]);
    } else {
      setUserInput(userInput.concat([{ char: e.key }]));
    }
    setCursorPosition(cursorPosition + 1);
  };
  return { text: text, cursorPosition: cursorPosition, eventHandler };
};
