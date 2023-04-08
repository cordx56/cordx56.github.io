import { StyledChar, IoFunction, CommandExecuteFunction } from "../interfaces";
import { stringToStyledChars } from "../utils";
import { getPathFiles, getAbsolutePath, homeDir } from "../files";

export const cd: CommandExecuteFunction = (
  cwd,
  setCwd,
  args,
  stdin,
  stdout
) => {
  let result: StyledChar[] = [];
  let target = homeDir;
  if (1 < args.length) {
    target = args[1];
  }
  const dir = getPathFiles(cwd, target);
  if (dir && typeof dir !== "string") {
    setCwd(getAbsolutePath(cwd, target));
  } else {
    stdout(stringToStyledChars("Directory not found\n", "text-rose-500"));
  }
};
