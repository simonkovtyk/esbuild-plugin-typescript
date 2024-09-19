interface PathOverrides {
  overridePathToTsconfig?: string | undefined;
}

interface HandlerOptions extends PathOverrides {
  tsconfigPath?: string | undefined;
}

type Options = PathOverrides;

export type {
  PathOverrides,
  HandlerOptions,
  Options
};
