export const homeDir = "/home/cordx56";

export const files = {
  home: {
    cordx56: {
      "profile.txt":
        "cordx56\n\nBachelor of Engineering\nProgramming Language, Natural Language Processing and Web Service",
    },
  },
};

export const getAbsolutePath = (cwd: string, path: string): string => {
  let joined: string;
  if (0 < path.length && path[0] === "/") {
    joined = path;
  } else {
    joined = cwd + "/" + path;
  }
  let absoluteSplitted = [];
  if (joined.length === 0) {
    return "/";
  } else {
    const splitted = joined.split("/");
    for (const s of splitted) {
      if (s === ".." && 0 < absoluteSplitted.length) {
        absoluteSplitted = absoluteSplitted.slice(0, -1);
      } else if (s !== "." && s.length !== 0) {
        absoluteSplitted.push(s);
      }
    }
  }
  const absolutePath = "/" + absoluteSplitted.join("/");
  return absolutePath;
};

export const getPathFiles = (cwd: string, path: string): any => {
  const splitted = getAbsolutePath(cwd, path).split("/").slice(1);
  let target: any = files;
  for (const s of splitted) {
    if (typeof target === "string") {
      return null;
    }
    if (s in target) {
      if (typeof target[s] === "string") {
        target = s;
      } else {
        target = target[s];
      }
    } else if (0 < s.length) {
      return null;
    }
  }
  return target;
};
