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
import arise from './ariseInstance';

class Query {
	constructor() {
		this.client = arise;
	}

	isBlockQuery(input) {
		// console.log(this);
		return this.client.sendRequest('blocks/get', { id: input });
	}

	isAccountQuery(input) {
		return this.client.sendRequest('accounts', { address: input });
	}

	isTransactionQuery(input) {
		return this.client.sendRequest('transactions/get', { id: input });
	}

	isDelegateQuery(input) {
		return this.client.sendRequest('delegates/get', { username: input });
	}
}

export default new Query();
