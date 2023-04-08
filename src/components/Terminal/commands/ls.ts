import { StyledChar, IoFunction, CommandExecuteFunction } from "../interfaces";
import { stringToStyledChars } from "../utils";
import { getPathFiles } from "../files";

export const ls: CommandExecuteFunction = (
  cwd,
  setCwd,
  args,
  stdin,
  stdout
) => {
  let result: StyledChar[] = [];
  let target = cwd;
  if (1 < args.length) {
    target = args[1];
  }
  const files = getPathFiles(cwd, target);
  if (files) {
    if (typeof files === "string") {
      result = result.concat(stringToStyledChars(files));
    } else {
      for (const fileName in files) {
        if (typeof files[fileName] === "string") {
          result = result.concat(stringToStyledChars(fileName + " "));
        } else {
          result = result.concat(
            stringToStyledChars(fileName + " ", "text-sky-500")
          );
        }
      }
    }
    stdout(result.concat(stringToStyledChars("\n")));
  } else {
    stdout(
      stringToStyledChars("File or Directory not found\n", "text-rose-500")
    );
  }
};
