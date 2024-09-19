import { PartialMessage } from "esbuild";
import os from "node:os";
import ts from "typescript";

const mapDiagnosticsToPartialMessages = (host: ts.CompilerHost, diagnostics: ts.Diagnostic[]) => diagnostics.map((diagnostic: ts.Diagnostic): PartialMessage => {
  if (diagnostic.file === undefined || diagnostic.start === undefined)
    return {
      text: ts.flattenDiagnosticMessageText(diagnostic.messageText, os.EOL, 2)
    };

  return {
    text: ts.formatDiagnostic(diagnostic, host)
  };
});

export {
  mapDiagnosticsToPartialMessages
};
