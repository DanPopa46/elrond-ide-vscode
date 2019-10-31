# Elrond IDE

**This Visual Studio Code extension is still in development.**

**Elrond IDE** starts as a tool to deploy and run smart contracts on a variant of the Elrond node - also known as **node-debug** - for development and debugging purpose. Deployment and execution is also possible on other nodes of your choice, as well.

The IDE also assists with the build process of a smart contract, from a high-level language (C) to WASM bytecode.

## Features

 - List smart contracts in a Visual Studio Code workspace
 - Build smart contracts to WASM
 - Deploy smart contracts on the **node-debug** or another node of your choice
 - Execute exported functions of the smart contract on the **debug-node** or another node of your choice
 - Gather and install tools and dependencies (a subset of LLVM, node-debug and so on)
 - Execute queries against smart contracts deployed on a testnet.


## Requirements
The extension will download all its dependencies and install them itself, so you do not have to worry much about setting up the development environment.

This extension depends on:

* `clang` - for build to WASM
* `llc` - for build to WASM
* `wasm-ld` - for build to WASM
* `golang` - to build **node-debug**
* [node-debug](https://github.com/ElrondNetwork/elrond-go-node-debug)


In addition, the extension requires the following tools, which are not installed automatically:

* `untar` and `unzip` - you most probably already have them installed on your machine.


## How to build and / or install

Build the extension (you need vsce):

```
npm install -g vsce
cd vscode-elrond-c
npm install
vsce package
```

Install the extension in Visual Studio Code:

```
code --install-extension vscode-elrond-ide-{version}.vsix
```

The installation can also be performed from Visual Studio Code's user interface, by running the command `Install from VSIX`.


## Extension Settings

This extension contributes the following settings:

* `elrond.ideFolder`: base folder for tools.
* `elrond.downloadMirror`: download mirror for tools and dependencies.
* `elrond.restApi.port`: port of REST API (node-debug).
* `elrond.testnetUrl`: URL of testnet.
