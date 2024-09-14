# esbuild plugin typescript

![NPM Downloads](https://img.shields.io/npm/dw/esbuild-plugin-typescript) ![NPM License](https://img.shields.io/npm/l/esbuild-plugin-typescript)

The plugin enhances the build process by seamlessly integrating TypeScript, offering powerful features like type checking, automatic generation of .d.ts files, and ensuring robust type safety
throughout.

* Supports newest esbuild and typescript version
* Uses esbuild config to determine the out folder
* Can do everything that TypeScript offers
* Type declarations (d.ts) included

## How It Works

1. esbuild calls this package in the onStart lifecycle.
2. Gets the configuration from esbuild or user-defined configuration.
3. Evaluate the out folder, that should be deleted, based on the given input.
4. Runs the official TypeScript-Compiler by its API and\
generates output based on the given tsconfig.

## Options

### Overriding the out-folder

This package will search for a tsconfig by TypeScript itself.
It can be helpful sometimes to override the path to the tsconfig:
```typescript
typescriptPlugin(
  overrideConfigPath?: string | undefined
);
```

After using this override, this package will start to resolve your tsconfig. If your override is not valid, because the tsconfig does not exists, this package will discover the nearest tsconfing.

## Usage

### Installation

The plugin can be installed by any package manager.

<details><summary><b>Show instructions</b></summary>

> npm \
> ``npm install esbuild-plugin-typescript``

> yarn \
> ``yarn install esbuild-plugin-typescript``

> pnpm \
> ``pnpm install esbuild-plugin-typescript``

</details>

### Integration

The easy way to integrate this plugin in esbuild.

<details><summary><b>Show instructions</b></summary>

````typescript
await esbuild.build({
  plugins: [
    typescriptPlugin(...)
  ]
})
````

[See here for more about the esbuild plugin integration.](https://esbuild.github.io/plugins/#using-plugins)

</details>

## License

The MIT License (MIT) - Please have a look at the LICENSE file for more details.

## Contributing

Feel free to contribute to this project.\
You can fork this project and create a new pull request for contributing.

[Get to the repository at GitHub.](https://github.com/simonkovtyk/esbuild-plugin-typescript)

<hr>

GitHub [@simonkovtyk](https://github.com/simonkovtyk)
