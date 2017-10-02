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
import {
	getTableString,
	printResult,
} from '../../src/utils/print';

describe('print utils', () => {
	describe('#getTableString', () => {
		it('should return a string', () => {
			const obj = { arise: 'JS' };
			const result = getTableString(obj);

			(result).should.be.ok();
			(result).should.be.type('string');
		});
	});

	describe('#printResult', () => {
		const vorpal = {
			log: () => {},
		};
		let stub;

		beforeEach(() => {
			stub = sinon.stub(vorpal, 'log');
		});

		afterEach(() => {
			stub.restore();
		});

		it('should log results', () => {
			const result = { arise: 'JS' };
			const printFn = obj => obj.arise + obj.arise;

			printResult(printFn, vorpal, result);

			(stub.calledWithExactly('JSJS')).should.be.true();
		});

		it('should log error messages', () => {
			const result = { error: 'oh no' };
			const printFn = a => `${a.error} 123`;

			printResult(printFn, vorpal, result);

			(stub.calledWithExactly('oh no 123')).should.be.true();
		});
	});
});
