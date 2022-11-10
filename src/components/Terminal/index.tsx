import { KeyboardEvent } from "react";
import TerminalArea from "./TerminalArea";
import { useShell } from "./shell";

const Terminal = () => {
  const {
    text: shellText,
    cursorPosition,
    onKeydownHandler,
    onCompositionStartHandler,
    onCompositionUpdateHandler,
    onCompositionEndHandler,
  } = useShell();
  const onInput = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    onInputHandler(e);
  };
  const onKeydown = (e: KeyboardEvent<HTMLTextAreaElement>) => {};
  return (
    <TerminalArea
      text={shellText}
      className="w-full h-64"
      style={{}}
      cursorPosition={cursorPosition}
      onKeydown={onKeydownHandler}
      onCompositionStart={onCompositionStartHandler}
      onCompositionUpdate={onCompositionUpdateHandler}
      onCompositionEnd={onCompositionEndHandler}
    />
  );
};

export default Terminal;
