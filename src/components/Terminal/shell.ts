import { useState, KeyboardEvent, CompositionEventHandler } from "react";
import { StyledChar, ShellOutput, IoFunction } from "./interfaces";
import { stringToStyledChars } from "./utils";
import { commands } from "./commands";
import { getPathFiles, homeDir } from "./files";

export const userName = "cordx56";
export const hostName = "cordx.cx";
export const getPrompt = (cwd: string): StyledChar[] => {
  const styledCwdName: StyledChar[] = stringToStyledChars(cwd, "text-sky-500");
  return [...styledCwdName, ...stringToStyledChars(" $ ")];
};

const newLine: StyledChar[] = stringToStyledChars("\n");

export const useShell = (): ShellOutput => {
  const [cwd, setCwd] = useState(homeDir);
  const [display, setDisplay] = useState<StyledChar[]>(getPrompt(homeDir));
  const [userInput, setUserInput] = useState("");
  const [imeInput, setImeInput] = useState("");
  const getStyledUserInput = (input: string): StyledChar[] => {
    const splitted = input.split(" ");
    let command: StyledChar[] = [];
    let commandName: StyledChar[] = [];
    for (let i = 0; i < splitted.length; i++) {
      if (commandName.length === 0) {
        if (0 < splitted[i].length) {
          commandName = stringToStyledChars(
            splitted[i],
            splitted[i] in commands ? "text-lime-500" : ""
          );
          command = command.concat(commandName);
        }
      } else {
        command = command.concat(
          stringToStyledChars(
            splitted[i],
            getPathFiles(cwd, splitted[i]) ? "text-sky-500" : ""
          )
        );
      }
      if (i !== splitted.length - 1) {
        command = command.concat(stringToStyledChars(" "));
      }
    }
    return command;
  };
  const getText = (userInput: string, imeInput: string) => {
    const styledUserInput = getStyledUserInput(userInput);
    return display.concat(styledUserInput, stringToStyledChars(imeInput));
  };
  const stdout: IoFunction = (cs: StyledChar[]) => {
    onInput(cs);
  };
  const text = getText(userInput, imeInput);
  const [cursorPosition, setCursorPosition] = useState(
    getPrompt(homeDir).length
  );
  const userInputCursorPosition = cursorPosition - display.length;
  const onInput = (input: string | StyledChar[]) => {
    const userInputBefore = userInput.slice(0, userInputCursorPosition);
    const userInputAfter = userInput.slice(userInputCursorPosition);
    setUserInput(userInputBefore + input + userInputAfter);
    setCursorPosition(cursorPosition + input.length);
  };
  const onKeydownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (!e.nativeEvent.isComposing) {
      if (e.key === "Enter") {
        const command = userInput.trim().split(" ");
        const commandName = command[0];
        if (commandName in commands) {
          commands[commandName](cwd, setCwd, command, () => {}, stdout);
        }
        const newDisplay = text.concat(newLine, getPrompt(cwd));
        setDisplay(newDisplay);
        setUserInput("");
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
        onInput(e.key);
      }
    }
  };
  const onCompositionUpdateHandler: CompositionEventHandler = (e) => {
    const data = e.data.replaceAll("\n", "");
    setImeInput(data);
  };
  const onCompositionEndHandler: CompositionEventHandler = () => {
    onInput(imeInput);
    setImeInput("");
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
