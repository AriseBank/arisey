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
import os from 'os';
import fse from 'fs-extra';
import config from '../utils/env';
import ariseInstance from '../utils/ariseInstance';
import { CONFIG_VARIABLES } from '../utils/constants';

const configFilePath = `${os.homedir()}/.arisey/config.json`;

const writeConfigToFile = (newConfig) => {
	try {
		fse.writeJsonSync(configFilePath, newConfig, {
			spaces: '\t',
		});
		return true;
	} catch (e) {
		console.warn(`WARNING: Could not write to \`${configFilePath}\`. Your configuration will not be persisted.`);
		return false;
	}
};

const checkBoolean = value => ['true', 'false'].includes(value);

const setNestedConfigProperty = newValue => (obj, pathComponent, i, path) => {
	if (i === path.length - 1) {
		// eslint-disable-next-line no-param-reassign
		obj[pathComponent] = newValue;
		return config;
	}
	return obj[pathComponent];
};

const setBoolean = (variable, path) => (value) => {
	if (!checkBoolean(value)) {
		return `Cannot set ${variable} to ${value}.`;
	}

	const newValue = (value === 'true');
	path.reduce(setNestedConfigProperty(newValue), config);

	if (variable === 'testnet') {
		ariseInstance.setTestnet(newValue);
	}

	const writeSuccess = writeConfigToFile(config);

	if (!writeSuccess && process.argv.length > 2) {
		return `Could not set ${variable} to ${value}.`;
	}
	return `Successfully set ${variable} to ${value}.`;
};

const handlers = {
	json: setBoolean('json output', ['json']),
	testnet: setBoolean('testnet', ['ariseJS', 'testnet']),
};

const set = vorpal => ({ variable, value }) => {
	const returnValue = CONFIG_VARIABLES.includes(variable)
		? handlers[variable](value)
		: 'Unsupported variable name.';

	return Promise.resolve(vorpal.log(returnValue));
};

export default function setCommand(vorpal) {
	vorpal
		.command('set <variable> <value>')
		.description(`Set configuration <variable> to <value>. Configuration is persisted in \`${configFilePath}\`.`)
		.autocomplete(CONFIG_VARIABLES)
		.action(set(vorpal));
}
