import * as path from 'path';
import * as util from 'util';

import { lernaToRenovateConfig } from './lernaToRenovateConfig';
import { exit } from 'process';

(async () => {
  const expectedConfig = await lernaToRenovateConfig();
  const actualConfig = require(path.resolve(
    __dirname,
    '..',
    '..',
    'renovate.json'
  ));

  if (JSON.stringify(expectedConfig) !== JSON.stringify(actualConfig)) {
    console.error(
      'The Renovate (renovate.json) is invalid! Please ensure that it is up-to-date by running yarn renovate:update-config'
    );
    console.error('Expected:', util.inspect(expectedConfig, false, 10, true));
    console.error('Actual:', util.inspect(actualConfig, false, 10, true));
    exit(1);
  }
})();
