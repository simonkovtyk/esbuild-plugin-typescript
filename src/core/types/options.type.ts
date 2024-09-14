type PathOverrides = {
	overrideConfigPath: string | undefined
}

type HandlerOptions = {
	tsconfigPath?: string | undefined
} & PathOverrides

type Options = PathOverrides;

export type {
	PathOverrides,
	HandlerOptions,
	Options
}
