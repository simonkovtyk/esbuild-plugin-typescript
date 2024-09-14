import { OnStartResult } from "esbuild";
import path from "node:path";
import ts from "typescript";
import { ErrorMessages } from "../constants/messages.constant";
import { HandlerOptions } from "../types/options.type";
import { mapDiagnosticsToPartialMessages } from "../utils/error.util";

const handlerProcedure = (options: HandlerOptions) => {
	return async (): Promise<OnStartResult | null> => {
		const parsedTsconfigPath = options.tsconfigPath === undefined ? undefined : path.parse(options.tsconfigPath);

		const configFile = ts.findConfigFile(
			parsedTsconfigPath?.dir ?? ".",
			ts.sys.fileExists,
			parsedTsconfigPath?.base
		);

		if (configFile === undefined)
			return {
				errors: [ {
					text: ErrorMessages.TSCONFIG_NOT_FOUND
				} ]
			};

		const config = ts.readConfigFile(configFile, ts.sys.readFile);
		const parsedConfig = ts.parseJsonConfigFileContent(config.config, ts.sys, path.dirname(configFile));

		const host = ts.createCompilerHost(parsedConfig.options, true);
		const program = ts.createProgram(parsedConfig.fileNames, parsedConfig.options, host);

		program.emit();

		const redundantDiagnostics = ts.getPreEmitDiagnostics(program);
		const sourceDiagnostics = ts.sortAndDeduplicateDiagnostics(redundantDiagnostics);
		const configDiagnostics = parsedConfig.errors;

		if (sourceDiagnostics.length === 0 && configDiagnostics.length === 0)
			return null;

		const partialSourceMessages = mapDiagnosticsToPartialMessages(host, Array.from(sourceDiagnostics));
		const partialConfigMessages = mapDiagnosticsToPartialMessages(host, configDiagnostics);

		return {
			errors: partialSourceMessages,
			warnings: partialConfigMessages
		};
	}
}

export {
	handlerProcedure
}
