export const deepCopy = <T>(obj: T): T => {
  if (Array.isArray(obj)) {
    return obj.map(item => deepCopy(item)) as unknown as T;
  }
  if (typeof obj === 'object' && obj !== null) {
    const newObj: T = {} as T;
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = deepCopy(obj[key]);
      }
    }
    return newObj;
  }
  return obj;
};

interface Array2treeOptions<T> {
  cbk?: (item: T) => any;
  defaultParentId?: any;
  nodeName: string;
  parentNodeName: string;
}
const defaultOptions: Array2treeOptions<any> = {
  nodeName: 'id',
  parentNodeName: 'parentId',
  defaultParentId: null,
  cbk: (item) => item,
};

export const array2tree = <T>(
  arr: T[],
  options: Array2treeOptions<T> = defaultOptions,
) => {
  const nodeMap = arr.reduce((acc, cur: any) => {
    const key = cur[options.parentNodeName];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(cur);
    return acc;
  }, {} as any);
  const buildTree: any = (parentId: any) => {
    const children = nodeMap[parentId] || [];
    return children.map((child: any) => {
      child.children = buildTree(child[options.nodeName]);
      return !!options.cbk ? options.cbk(child) : child
    });
  };
  return buildTree(options.defaultParentId) as T[];
};
