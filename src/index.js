/*
 * arisebank/arisey
 * Copyright © 2017 Arise Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Arise Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
import path from 'path';
import fse from 'fs-extra';
import vorpal from 'vorpal';
import { version } from '../package.json';
import config from './utils/env';

const arisey = vorpal();

const commandsDir = path.join(__dirname, 'commands');

fse.readdirSync(commandsDir).forEach((command) => {
	const commandPath = path.join(commandsDir, command);
	// eslint-disable-next-line global-require, import/no-dynamic-require
	const commandModule = require(commandPath);
	arisey.use(commandModule.default);
});

const logo = `
 _ _     _
| (_)___| | ___   _
| | / __| |/ / | | |
| | \\__ \\   <| |_| |
|_|_|___/_|\\_\\\\__, |
              |___/
`;

const message = `
Running v${version}. Copyright (C) 2017 Arise Foundation
Type \`help\` to get started.
`;
const intro = `${logo}${message}`;

const isInteractive = process.argv.length > 2;

arisey
	.delimiter('arisey>')
	.history('arisey');

if (!isInteractive) {
	arisey.log(intro).show();
}

arisey.find('help').alias('?');
arisey.find('exit').description(`Exits ${config.name}.`);

export default arisey;
