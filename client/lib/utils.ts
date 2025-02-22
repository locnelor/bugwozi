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