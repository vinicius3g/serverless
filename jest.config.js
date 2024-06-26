import { defaults } from 'jest-config';

export default async () => ({
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testTimeout: 20000
});