import { KeyboardEvent } from "react";
import TerminalArea from "./TerminalArea";
import { useShell } from "./shell";

const Terminal = () => {
  const { text: shellText, cursorPosition, eventHandler } = useShell();
  const onInput = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    eventHandler(e);
  };
  return (
    <TerminalArea
      text={shellText}
      className="w-full h-32"
      style={{}}
      onInput={onInput}
    />
  );
};

export default Terminal;
