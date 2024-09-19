import { Plugin, PluginBuild } from "esbuild";
import { handlerProcedure } from "./procedures/handler.procedure";
import { HandlerOptions, Options } from "./types/options.type";

const typescriptPlugin = (options?: Options | undefined): Plugin => ({
  name: "esbuild-plugin-typescript",
  setup: (build: PluginBuild) => {
    const handlerOptions: HandlerOptions = {
      tsconfigPath: options?.overridePathToTsconfig ?? build.initialOptions.tsconfig
    };

    const handlerUnwrapped = handlerProcedure(handlerOptions);

    build.onStart(handlerUnwrapped);
  }
});

export {
  typescriptPlugin
};
