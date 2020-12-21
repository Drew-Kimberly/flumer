import * as fs from 'fs';
import * as path from 'path';

import { lernaToRenovateConfig } from './lernaToRenovateConfig';

(async () => {
  const configPath = path.resolve(__dirname, '..', '..', 'renovate.json');
  const config = await lernaToRenovateConfig();
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
})();
