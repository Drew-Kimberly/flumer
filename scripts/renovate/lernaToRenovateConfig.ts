import { glob } from 'glob';
import * as path from 'path';

interface ILernaConfig {
  packages: string[];
}

interface IRenovatePackageRule {
  paths: string[];
  extends?: string[];
  branchPrefix?: string;
}

interface IRenovateConfig {
  packageRules: IRenovatePackageRule[];
}

const getRepositoryRootFilePath = (filename: string) =>
  path.resolve(__dirname, '..', '..', filename);

const getGlobMatches = (pattern: string): Promise<string[]> =>
  new Promise((resolve, reject) => {
    glob(pattern, (err, matches) => {
      if (err !== null) {
        return reject(err);
      }

      return resolve(matches);
    });
  });

const flatten = <T>(arr: T[][]): T[] =>
  arr.reduce((curr, next) => curr.concat(next), []);

/**
 * Returns the Renovate config with packageRules derived from the Lerna Monorepo config.
 */
export const lernaToRenovateConfig = async (): Promise<IRenovateConfig> => {
  const lernaConfig: ILernaConfig = require(getRepositoryRootFilePath(
    'lerna.json'
  ));

  const renovateConfigPath = getRepositoryRootFilePath('renovate.json');
  const existingRenovateConfig: IRenovateConfig =
    require(renovateConfigPath) || {};
  const defaultPackageRule: IRenovatePackageRule = {
    paths: ['+(package.json)', '.github'],
    extends: [':semanticCommitScopeDisabled'],
  };

  const lernaPackages: string[] = flatten(
    await Promise.all(
      lernaConfig.packages.map(packagesGlob =>
        getGlobMatches(getRepositoryRootFilePath(packagesGlob))
      )
    )
  );

  const lernaPackageRules: IRenovatePackageRule[] = lernaPackages.map(pkg => ({
    paths: [path.relative(process.cwd(), pkg)],
    branchPrefix: `renovate/${path.basename(pkg)}/`,
  }));

  const newRenovateConfig: IRenovateConfig = {
    ...existingRenovateConfig,
    packageRules: [defaultPackageRule, ...lernaPackageRules],
  };

  return newRenovateConfig;
};
