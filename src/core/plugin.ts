import { Plugin, PluginBuild } from "esbuild";
import { handlerProcedure } from "./procedures/handler.procedure";
import { Options } from "./types/options.type";

const typescriptPlugin = (options: Options): Plugin => ({
	name: "esbuild-plugin-typescript",
	setup: (build: PluginBuild) => {
		const handlerUnwrapped = handlerProcedure({
			...options,
			tsconfigPath: build.initialOptions.tsconfig
		});

		build.onStart(handlerUnwrapped);
	}
});

export {
	typescriptPlugin
}
