import { test } from "hnd-test-tree-shaking";
import add from 'lodash/add';

export const handler = () => {
  test();
  add(1, 2);
  return {};
};
