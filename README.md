<div align="center">

<img width="196" src="https://raw.githubusercontent.com/simonkovtyk/esbuild-plugin-typescript/611c5c4942c8460ec6247ab833418908e9213a9b/docs/esbuild-favicon.svg" />

<h1>TypeScript Plugin</h1>

<p>The plugin enhances the build process by seamlessly integrating TypeScript, offering powerful features like type checking, automatic generation of .d.ts files, and ensuring robust type safety throughout.</p>

![NPM Downloads](https://img.shields.io/npm/dw/esbuild-plugin-typescript)
![NPM License](https://img.shields.io/npm/l/esbuild-plugin-typescript)
![GitHub package.json version](https://img.shields.io/npm/v/esbuild-plugin-typescript)
![TypeScript types](https://img.shields.io/badge/TypeScript_types-included-blue)

<br />

Add a ⭐ to this repository — *it motivates me a lot!*

</div>

## ⚡️ Getting started

Simply install this package with your package manager.

````shell
npm install -D esbuild-plugin-typescript
````

<details>
<summary>📦 other package manager</summary>

Here are examples for installing the package with other package manager.

> 💾 **yarn**
> ````shell
> yarn add -D esbuild-plugin-typescript
> ````

> 💾 **pnpm**
> ````shell
> pnpm install -D esbuild-plugin-typescript
> ````

</details>

Looks good so far 🔥 — now you have installed the latest version!

## 💡 Introduction

This esbuild plugin integrates TypeScript, generating .d.ts files and performing type checks based on the user's tsconfig.json. It uses the TypeScript compiler API to ensure strict type checks that
esbuild alone can't provide.

During the build, TypeScript is compiled to JavaScript while .d.ts files are created simultaneously. The plugin runs tsc in a subprocess to handle type checking
independently from esbuild’s fast bundling. This ensures type safety without sacrificing performance. It respects the user's configuration, ensuring compatibility with various project setups.

## 🔧 Usage

```typescript
typescriptPlugin(options);
```

This function needs to be called inside the esbuild configuration in order to use this plugin. It will provide the plugin inside the build process of esbuild.

<details>
<summary>Show an example of the integration</summary>

````typescript
esbuild.build({
  // some configuration...
  plugins: [
    typescriptPlugin();
    // more plugins here...
  ]
})
````

</details>

<details>
<summary>Show an example of the configuration</summary>

````typescript
typescriptPlugin({
  // configure here
});
````

</details>

### Properties

#### ``overridePathToTsconfig``

> Default: ``undefined`` (esbuild's tsconfig file)

A ``string`` that determines the path to the tsconfig.

<details>
<summary>Show an example</summary>

````typescript
typescriptPlugin({
  overridePathToTsconfig: "libs/my-lib/tsconfig.json" // any path allowed
});
````

</details>

### Returns

Type: ``Plugin``

An instance of this plugin, that will be used by esbuild automatically.

## License

The MIT License (MIT) - Please have a look at the [License](https://github.com/simonkovtyk/esbuild-plugin-typescript/blob/main/LICENSE) file for more details.

## Contributing

Want to contribute to an open-source project on GitHub but unsure where to start? Check out this comprehensive step-by-step guide on how to contribute effectively!

From forking the repository to creating pull requests, this guide walks you through every stage of the process, helping you make a successful contribution to this GitHub project. Start collaborating,
learn new skills, and make an impact on this project!

[See here](https://github.com/simonkovtyk/esbuild-plugin-typescript/blob/main/docs/guides/HOW_TO_CONTRIBUTE.md) for the contribute guide at GitHub.

<hr>

GitHub [@simonkovtyk](https://github.com/simonkovtyk)
