export type Tree = Array<{ name: string; children?: Tree }>;
export type FlatTree = Array<{ name: string; parent?: string }>;

export const flattenTree = (tree: Tree) => {
  throw new Error('Not implemented');
};
