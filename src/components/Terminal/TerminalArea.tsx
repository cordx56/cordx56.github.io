import {
  CompositionEventHandler,
  CSSProperties,
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
} from "react";
import { StyledChar } from "./interfaces";

type Props = {
  text: StyledChar[];
  className?: string;
  style?: CSSProperties;
  cursorPosition: number;
  onKeydown?: KeyboardEventHandler<HTMLTextAreaElement>;
  onCompositionStart?: CompositionEventHandler;
  onCompositionUpdate?: CompositionEventHandler;
  onCompositionEnd?: CompositionEventHandler;
};

const TerminalArea = ({
  text,
  className,
  style,
  cursorPosition,
  onKeydown,
  onCompositionStart,
  onCompositionUpdate,
  onCompositionEnd,
}: Props) => {
  const lines: StyledChar[][] = [[]];
  let cursorPositionTemp = cursorPosition;
  let cursorRow = 0;
  let cursorCol = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i].char === "\n") {
      if (0 < cursorPositionTemp) {
        cursorRow += 1;
        cursorCol = 0;
        cursorPositionTemp -= 1;
      }
      lines.push([]);
    } else {
      lines[lines.length - 1].push(text[i]);

      if (0 < cursorPositionTemp) {
        cursorCol += 1;
        cursorPositionTemp -= 1;
        if (cursorPositionTemp === 0 && i === text.length - 1) {
          lines[lines.length - 1].push({ char: " " });
          cursorPositionTemp -= 1;
        }
      }
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

  const preRef = useRef<HTMLPreElement>();
  const onTextAreaKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (onKeydown) {
      onKeydown(e);
    }
  };
  const onTextAreaCompositionStart: CompositionEventHandler = (e) => {
    if (onCompositionStart) {
      onCompositionStart(e);
    }
  };
  const onTextAreaCompositionUpdate: CompositionEventHandler = (e) => {
    if (onCompositionUpdate) {
      onCompositionUpdate(e);
    }
  };
  const onTextAreaCompositionEnd: CompositionEventHandler = (e) => {
    if (onCompositionEnd) {
      onCompositionEnd(e);
    }
  };

  useEffect(() => {
    if (preRef.current && textareaRef.current) {
      preRef.current.scrollTo(0, 10000);
    }
  }, [text]);

  const cursorClassName = "text-white bg-black dark:text-black dark:bg-white";

  return (
    <pre
      onClick={onParentClick}
      className={`relative flex flex-col font-mono overflow-y-auto ${className}`}
      style={style}
      ref={preRef}
    >
      {lines.map((line, li) => (
        <span key={li} className="w-full flex flex-row flex-wrap">
          {line.map((c, ci) => (
            <span
              key={`${li}:${ci}`}
              className={`relative ${
                cursorRow === li && cursorCol === ci
                  ? cursorClassName
                  : c.class
                  ? c.class
                  : ""
              }`}
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
        onCompositionStart={onTextAreaCompositionStart}
        onCompositionUpdate={onTextAreaCompositionUpdate}
        onCompositionEnd={onTextAreaCompositionEnd}
        className="w-0 h-0 transparent outline-none opacity-0"
        spellCheck={false}
      ></textarea>
    </pre>
  );
};

export default TerminalArea;
