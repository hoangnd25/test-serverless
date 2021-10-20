import { testExpress } from "hnd-test-tree-shaking/dist/express";
import add from 'lodash/add';

export const handler = () => {
  testExpress();
  add(1, 2)
  return {};
};
