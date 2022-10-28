import {
  CSSProperties,
  KeyboardEventHandler,
  MouseEventHandler,
  useRef,
} from "react";
import { StyledChar } from "./interfaces";

type Props = {
  text: StyledChar[];
  className?: string;
  style?: CSSProperties;
  onKeydown?: KeyboardEventHandler<HTMLTextAreaElement>;
  onInput?: KeyboardEventHandler<HTMLTextAreaElement>;
};

const TerminalArea = ({
  text,
  className,
  style,
  onKeydown,
  onInput,
}: Props) => {
  const lines: StyledChar[][] = [[]];
  for (const c of text) {
    if (c.char === "\n") {
      lines.push([]);
    } else {
      lines[lines.length - 1].push(c);
    }
  }
  const textareaRef = useRef<HTMLTextAreaElement>();
  const focusTextArea = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };
  const onParentClick: MouseEventHandler<HTMLPreElement> = (e) => {
    e.preventDefault();
    focusTextArea();
  };

  const onTextAreaKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (onKeydown) {
      onKeydown(e);
    }
    if (onInput) {
      onInput(e);
    }
  };
  return (
    <pre
      onClick={onParentClick}
      className={`relative flex flex-col font-mono overflow-hidden ${className}`}
      style={style}
    >
      {lines.map((line, li) => (
        <span key={li} className="w-full flex flex-row">
          {line.map((c, ci) => (
            <span
              key={`${li}:${ci}`}
              className={`relative ${c.class ? c.class : ""}`}
              style={c.style ? c.style : {}}
            >
              {c.char}
            </span>
          ))}
        </span>
      ))}
      <textarea
        ref={textareaRef}
        onKeyDown={onTextAreaKeyDown}
        className="absolute top-0 w-full h-full transparent outline-none opacity-0"
        spellCheck={false}
      ></textarea>
    </pre>
  );
};

export default TerminalArea;
