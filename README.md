# arisey

Arisey allows you to communicate with a remote or local node and carry out Arise-related functionality using an interactive or non-interactive command line tool.

[![Build Status](https://jenkins.arise.io/buildStatus/icon?job=arisey/development)](https://jenkins.arise.io/job/arisey/job/development/)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)
[![GitHub release](https://img.shields.io/badge/version-0.1.3-blue.svg)](#)

## Prerequisites

Arisey requires [Node.js](https://nodejs.org/) as the underlying engine for code execution. Node.js is supported on most operating systems. Follow the instructions for your operating system on the [Node.js downloads page](https://nodejs.org/en/download/). You will need version 6.11.x or higher. NPM is automatically installed along with Node.js.

## Installation

### From NPM

```sh
$ npm install --global --production arisey
```

Upon successful completion, NPM will add the `arisey` executable to your PATH.

### From Source

Clone the Arisey repository using Git and install the dependencies:

```sh
$ git clone https://github.com/arisebank/arisey.git
$ cd arisey
$ npm install
```
Before running the executable you will need to build Arisey:

```sh
npm run build
```

#### Adding the Arisey executable to your PATH

WARNING: If you have installed Arisey globally via NPM (see [Install Arisey via NPM](docs:arisey-installation-npm)), following the instructions in this section is not recommended as they will introduce conflicts.

If you would like to add the `arisey` executable to your PATH you have two options: option 1 will install the current state of the code you are installing globally, while option 2 will only link to the code and therefore automatically reflect changes you make going forward.

##### 1. Install globally

Running this command from within the repository will add Arisey to your global NPM packages, and add the `arisey` executable to your PATH. Be aware that any previous globally installed arisey version will get overridden with this local version.

```sh
$ npm install --global --production
```

Note that you will have to repeat this process for each subsequent build of Arisey.

##### 2. Create a symlink

The other option is to ask NPM to create a symlink in the global folder that links to the package.

```sh
$ npm link
```

This will also add `arisey` to your PATH, but you won't have to repeat the process if you pull or create a new build. Be aware that any previous globally installed arisey version will get overridden with this local version.


## Usage

### Interactive use

To run commands interactively:

```sh
$ arisey
 _ _     _
| (_)___| | ___   _
| | / __| |/ / | | |
| | \__ \   <| |_| |
|_|_|___/_|\_\\__, |
              |___/

Running v0.1.3. Copyright (C) 2017 Arise Foundation
Type `help` to get started.

arisey> help

  Commands:

    help [command...]                    Provides help for a given command.
    exit                                 Exits arisey.
    env                                  Print environmental configuration.
    get [options] <type> <input>         Get information from <type> with parameter <input>.
                                         Types available: account, address, block, delegate, transaction
                                         E.g. get delegate lightcurve
                                         e.g. get block 5510510593472232540
    list [options] <type> <variadic...>  Get information from <type> with parameters <input, input, ...>.
                                         Types available: accounts, addresses, blocks, delegates, transactions
                                         E.g. list delegates lightcurve tosch
                                         E.g. list blocks 5510510593472232540 16450842638530591789
    set <variable> <value>               Set configuration <variable> to <value>. Configuration is
                                         persisted in `~/.arisey/config.json`.
arisey>
```

### Non-interactive use

To run commands and options directly from the command line:

```sh
$ arisey get delegate lightcurve --json
```

## Settings

Configuration is stored in a config file placed in the user's home directory (run `help set` to see the exact location). If this is unavailable a default configuration is used. The following settings can be updated (and will be persisted if possible):

| Command | Description |
| --- | --- |
| <code>set json true&#124;false</code> | Sets default to json output (true) or text output (false) |
| <code>set testnet true&#124;false</code> | Set default to testnet (true) or mainnet (false) |


## Documentation

Further information can be found on our documentation site:

- [Introduction](https://docs.arisecoin.com/v1.3/docs/arisey-introduction)
- [Pre-Installation](https://docs.arisecoin.com/v1.3/docs/arisey-pre-installation)
- [Installation](https://docs.arisecoin.com/v1.3/docs/arisey-installation)
    - [Install-from-NPM](https://docs.arisecoin.com/v1.3/docs/arisey-installation-npm)
    - [Install-from-Source](https://docs.arisecoin.com/v1.3/docs/arisey-installation-source)
- [Upgrading](https://docs.arisecoin.com/v1.3/docs/arisey-upgrading)
    - [Upgrading-from-NPM](https://docs.arisecoin.com/v1.3/docs/arisey-upgrading-npm)
    - [Upgrading-from-Source](https://docs.arisecoin.com/v1.3/docs/arisey-upgrading-source)
- [Usage](https://docs.arisecoin.com/v1.3/docs/arisey-usage)
    - [Configuration](https://docs.arisecoin.com/v1.3/docs/arisey-usage-configuration)
    - [Usage](https://docs.arisecoin.com/v1.3/docs/arisey-usage-interactive-and-noninteractive)
    - [Commands](https://docs.arisecoin.com/v1.3/docs/arisey-usage-commands)

## Get Involved

Arisey is an open-source project and all contributions are welcome.

If you find a bug or want to make feature request, please create an [issue](https://github.com/arisebank/arisey/issues) with as much detail as you can.

## Run Tests

Arisey has an extensive set of unit tests. To run the tests, please install arisey from source, and then run the command:

```sh
$ npm test
```

## Authors

- Tobias Schwarz <tobias@lightcurve.io>
- Will Clark <will@lightcurve.io>

## License

Copyright © 2016-2017 Arise Foundation

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.
